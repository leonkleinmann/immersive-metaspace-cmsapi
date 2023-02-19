import WebSocket, { WebSocketServer } from "ws";
import ClientRepository from "./repository.js";
import ChatState from "./state/chat.js";

export default class StateMachine extends WebSocketServer {
  constructor(port = 8888) {
    super({
      port: port,
    });
    this.clientRepository = new ClientRepository();
    this.chatState = new ChatState();

    this.on("connection", this.handleConnection);
    console.log("StateMachine: will listen to port " + port);
  }

  handleConnection(client) {
    this.clientRepository.registerClient(client).then((clientId) => {
      client.send(
        JSON.stringify({
          command: "REGISTER_COMPLETE",
          clientId: clientId,
        })
      );
    });

    client.on("message", this.handleIncomingMessage.bind(this));
  }

  handleIncomingMessage(message) {
    const parsedMessage = JSON.parse(message);
    console.log("pasedMessage", parsedMessage);
    switch (parsedMessage.command) {
      case "CHAT_MSG":
        console.log(this.port);
        this.chatState.addMessage(message.author, message.message).then(() => {
          const clients = this.clientRepository.getAllClients();
          for (const client of clients) {
            client.socket.send(
              JSON.stringify({
                command: "CHAT_MSG",
                message: parsedMessage.message,
              })
            );
          }
        });
        break;
    }
  }
}
