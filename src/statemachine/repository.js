export default class ClientRepository {
  constructor() {
    this.clients = new Map();
    this.nextClientId = 1;
  }

  async registerClient(socket, clientData) {
    const clientId = this.nextClientId;
    const client = {
      id: clientId,
      socket: socket,
      gender: clientData.gender,
      username: clientData.username,
      link: clientData.link
    };

    this.clients.set(clientId, client);
    this.nextClientId = this.nextClientId + 1;

    return clientId;
  }

  getAllClients() {
    return this.clients.values();
  }

  getClientById(id) {
    return this.clients.get(id)
  }
}
