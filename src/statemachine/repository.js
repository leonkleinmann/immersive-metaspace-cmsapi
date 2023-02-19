export default class ClientRepository {
  constructor(props) {
    this.clients = new Map();
    this.nextClientId = 1;
  }

  async registerClient(socket) {
    const clientId = this.nextClientId;
    const client = { clientId, socket };

    this.clients.set(clientId, client);
    this.nextClientId = this.nextClientId + 1;

    return clientId;
  }

  getAllClients() {
    return this.clients.values();
  }

  getClientById(id) {}
}
