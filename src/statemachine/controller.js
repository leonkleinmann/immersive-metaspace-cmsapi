import { WebSocket, WebSocketServer } from "ws";
import ClientRepository from "./repository.js";
import ChatState from "./state/chat.js";
import AvatarState from "./state/avatar.js";

/**
 * Class which represents the StateMachine of the Server which provides a WebSocketServer
 */
export default class StateMachine extends WebSocketServer {
  /**
   * Constructor of the WebsocketServer
   * @param port port state machine should listen to (default: 8888)
   */
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

  /**
   * function which handles a connected client
   * @param client socket of client
   */
  handleConnection(client) {
    // handle closure of connection
    client.on("close", () => {
      let removedId = this.clientRepository.removeBySocket(client);
      let state = this.avatarState.getAvatarStateById(removedId);
      let roomId = state.room_id;
      let roomClients = this.avatarState.getAvatarStatesByRoom(
        roomId,
        removedId
      );
      this.avatarState.removeAvatarState(removedId);

      for (let client of roomClients) {
        let socketClient = this.clientRepository.getClientById(
          client.client_id
        ).socket;

        socketClient.send(
          JSON.stringify({
            command: "ROOM_LEFT",
            data: {
              clientId: removedId,
            },
          })
        );
      }
    });

    client.on("message", (command) =>
      this.handleIncomingMessage(command, client)
    );
  }

  /**
   * function which handles incoming messages
   * @param command received command
   * @param client socket instance of the client
   */
  handleIncomingMessage(command, client) {
    if (client.readyState === WebSocket.OPEN) {
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
        case "SCREEN_CHUNK":
          this.handleScreenChunk(parsedCommand);
          break;
        default:
          console.log("Unknown Message", parsedCommand);
          break;
      }
    } else {
      console.log("Connection lost");
    }
  }

  /**
   * function which handles register
   * @param parsedCommand parsed command
   * @param client socket
   */
  handleRegister(parsedCommand, client) {
    // register client and send him generated client id
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

  /**
   * function which handles incoming chat message
   * @param parsedCommand parsed command containing command, author and chat message
   */
  handleChatMsg(parsedCommand) {
    // add chat message to state and notify other clients
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

  /**
   * function which handles room entry command from client
   * @param parsedCommand parsed command containing command, clientid and entered room
   */
  handleRoomEntry(parsedCommand) {
    // set new avatar room
    this.avatarState.modifyAvatarState(
      parsedCommand.clientId,
      parsedCommand.message
    );
    // get other clients in new roo
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

    // nofify sender about successfull room enter and hand him a list of clients in this room
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

    // nofify other clients in room that command sender entered the room
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

  /**
   * function which handles room leave of client
   * @param parsedCommand parsed command containing command, client id and room id to leave
   */
  handleRoomLeave(parsedCommand) {
    // remove avatar state since he is in no room currently
    let stateCpy = this.avatarState.getAvatarStateById(parsedCommand.clientId);
    this.avatarState.removeAvatarState(parsedCommand.clientId);

    // notify other clients that client left room
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

  /**
   * function which handles avatar state update (position)
   * @param parsedCommand parsed command containing new position
   */
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

    // get all clients except calling client
    let roomClients = this.avatarState.getAvatarStatesByRoom(
      changedAvatarState.room_id,
      parsedCommand.clientId
    );

    // notify other clients avatar position was updated
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

  /**
   * function which handles video chunks and delegates them to aim client
   * @param parsedCommand command containing a (big) chunk and aim client ids
   */
  handleVideoChunk(parsedCommand) {
    // just delegate to other clients
    const toClients = parsedCommand.message.toClients;
    toClients.forEach((clientId) => {
      try {
        this.clientRepository.getClientById(clientId).socket.send(
            JSON.stringify({
              command: "VIDEO_CHUNK",
              clientId: parsedCommand.clientId,
              chunk: parsedCommand.message.chunk,
            })
        );
      } catch {
        console.log('Socket not available')
      }
    });
  }

  /**
   * function which delegates screen chunks to aim object
   * @param parsedCommand parsed command containing chunk and delegates it to client
   */
  handleScreenChunk(parsedCommand) {
    // delegate chunk to other clients
    const senderId = parsedCommand.clientId;
    const chunk = parsedCommand.message.chunk;
    const objectId = parsedCommand.message.objectId;
    const roomId = this.avatarState.getAvatarStateById(senderId).room_id;
    const roomClients = this.avatarState.getAvatarStatesByRoom(
      roomId,
      senderId
    );
    roomClients.forEach((roomClient) => {
      const socket = this.clientRepository.getClientById(
        roomClient.client_id
      ).socket;
      socket.send(
        JSON.stringify({
          command: "SCREEN_CHUNK",
          objectId: objectId,
          chunk: chunk,
        })
      );
    });
  }
}
