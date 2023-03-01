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
    this.on("close", this.handleClose);
    console.log("StateMachine: will listen to port " + port);
  }

  handleConnection(client) {
    console.log("Client connected to me! :-)");
    client.on("message", (command) =>
      this.handleIncomingMessage(command, client)
    );
  }

  handleClose(client) {
    console.log("Connection Closed", client);
  }
  handleIncomingMessage(command, client) {
    const parsedCommand = JSON.parse(command);
    //console.log("parsedCommand", parsedCommand);
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
      case "ROOM_LEAVE":
        this.handleRoomLeave(parsedCommand);
        break;
      case "AVATAR_STATE_UPDATE":
        this.handleAvatarStateUpdate(parsedCommand);
        break;
      case "VIDEO_CHUNK":
        this.handleVideoChunk(parsedCommand);
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
    let callerAvatarState = this.avatarState.getAvatarStateById(
      parsedCommand.clientId
    );
    let callerClient = this.clientRepository.getClientById(
      parsedCommand.clientId
    );

    roomClients.forEach((client) => {
      let socketClient = this.clientRepository.getClientById(client.client_id);

      let item = {
        clientId: parsedCommand.clientId,
        gender: callerClient.gender,
        username: callerClient.username,
        link: callerClient.link,
        x: callerAvatarState.x,
        y: callerAvatarState.y,
        ip: callerClient.socket._socket.remoteAddress,
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
        ip: socketClient.socket._socket.remoteAddress,
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
  handleRoomLeave(parsedCommand) {
    let stateCpy = this.avatarState.getAvatarStateById(parsedCommand.clientId);
    this.avatarState.removeAvatarState(parsedCommand.clientId);

    let roomClients = this.avatarState.getAvatarStatesByRoom(stateCpy.room_id);
    roomClients.forEach((avatarState) => {
      this.clientRepository.getClientById(avatarState.client_id).socket.send(
        JSON.stringify({
          command: "ROOM_LEFT",
          data: {
            clientId: parsedCommand.clientId,
          },
        })
      );
    });
  }
  handleAvatarStateUpdate(parsedCommand) {
    // update position
    this.avatarState.updatePosition(
      parsedCommand.clientId,
      parsedCommand.message.x,
      parsedCommand.message.y
    );
    this.avatarState.updateDirection(
      parsedCommand.clientId,
      parsedCommand.message.direction
    );

    let changedAvatarState = this.avatarState.getAvatarStateById(
      parsedCommand.clientId
    );

    // hole alle avatars ausser den anfragenden
    let roomClients = this.avatarState.getAvatarStatesByRoom(
      changedAvatarState.room_id,
      parsedCommand.clientId
    );

    roomClients.forEach((client) => {
      this.clientRepository.getClientById(client.client_id).socket.send(
        JSON.stringify({
          command: "AVATAR_STATE_UPDATED",
          clientId: parsedCommand.clientId,
          x: changedAvatarState.x,
          y: changedAvatarState.y,
          direction: changedAvatarState.direction,
        })
      );
    });
  }
  handleVideoChunk(parsedCommand) {
    const toClients = parsedCommand.message.toClients;
    toClients.forEach((clientId) => {
      this.clientRepository.getClientById(clientId).socket.send(
        JSON.stringify({
          command: "VIDEO_CHUNK",
          clientId: parsedCommand.clientId,
          chunk: parsedCommand.message.chunk,
        })
      );
    });
  }
}
