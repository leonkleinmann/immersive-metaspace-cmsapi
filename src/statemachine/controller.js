import { WebSocketServer } from "ws";
import ClientRepository from "./repository.js";
import ChatState from "./state/chat.js";
import AvatarState from "./state/avatar.js";

export default class StateMachine extends WebSocketServer {
  constructor(port = 8888) {
    super({
      port: port,
    });
    this.clientRepository = new ClientRepository();
    this.chatState = new ChatState();
    this.avatarState = new AvatarState();
    this.on("connection", this.handleConnection);
    console.log("StateMachine: will listen to port " + port);
  }

  handleConnection(client) {
    console.log("Client connected to me! :-)");
    client.on("message", (command) =>
      this.handleIncomingMessage(command, client)
    );
  }

  handleIncomingMessage(command, client) {
    const parsedCommand = JSON.parse(command);
    console.log("parsedCommand", parsedCommand);
    switch (parsedCommand.command) {
      case "REGISTER":
        this.handleRegister(parsedCommand, client);
        break;
      case "CHAT_MSG":
        this.handleChatMsg(parsedCommand);
        break;
      case "ROOM_ENTRY":
        this.handleRoomEntry(parsedCommand);
        break;
      case "AVATAR_STATE_UPDATE":
        this.handleAvatarStateUpdate(parsedCommand);
        break;
    }
  }

  handleRegister(parsedCommand, client) {
    this.clientRepository
      .registerClient(client, parsedCommand.message)
      .then((clientId) => {
        client.send(
          JSON.stringify({
            command: "REGISTER_COMPLETE",
            clientId: clientId,
          })
        );
      });
  }
  handleChatMsg(parsedCommand) {
    this.chatState
      .addMessage(parsedCommand.author, parsedCommand.message)
      .then(() => {
        const clients = this.clientRepository.getAllClients();
        for (const client of clients) {
          client.socket.send(
            JSON.stringify({
              command: "CHAT_MSG",
              message: parsedCommand.message,
            })
          );
        }
      });
  }
  handleRoomEntry(parsedCommand) {
    this.avatarState.modifyAvatarState(
      parsedCommand.clientId,
      parsedCommand.message
    );
    const roomClients = this.avatarState.getAvatarStatesByRoom(
      parsedCommand.message.room_id,
      parsedCommand.clientId
    );

    roomClients.forEach((client) => {
      let socketClient = this.clientRepository.getClientById(client.client_id);
      let item = {
        clientId: parsedCommand.clientId,
        gender: socketClient.gender,
        username: socketClient.username,
        link: socketClient.link,
        x: client.state.x,
        y: client.state.y,
      };
      socketClient.socket.send(
        JSON.stringify({
          command: "ROOM_ENTRY",
          data: item,
        })
      );
    });

    let items = [];
    roomClients.forEach((client) => {
      let socketClient = this.clientRepository.getClientById(client.client_id);

      let item = {
        clientId: client.client_id,
        gender: socketClient.gender,
        username: socketClient.username,
        link: socketClient.link,
        x: client.state.x,
        y: client.state.y,
      };
      items.push(item);
    });
    this.clientRepository.getClientById(parsedCommand.clientId).socket.send(
      JSON.stringify({
        command: "ROOM_ENTERED",
        data: items,
      })
    );
  }
  handleAvatarStateUpdate(parsedCommand) {
    this.avatarState.updateX(parsedCommand.clientId, parsedCommand.message.x);
    this.avatarState.updateY(parsedCommand.clientId, parsedCommand.message.y);
    let changedAvatarState = this.avatarState.getAvatarStateById(
      parsedCommand.clientId
    );

    let roomies = this.avatarState.getAvatarStatesByRoom(
      changedAvatarState.room_id,
      parsedCommand.clientId
    );
    roomies.forEach((client) => {
      this.clientRepository.getClientById(client.client_id).socket.send(
        JSON.stringify({
          command: "AVATAR_STATE_UPDATED",
          clientId: parsedCommand.clientId,
          x: changedAvatarState.x,
          y: changedAvatarState.y,
        })
      );
    });
  }
}
