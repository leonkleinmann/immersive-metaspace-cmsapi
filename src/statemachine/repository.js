/**
 * Class which represents the ClientRepository. It handles connected clients.
 */
export default class ClientRepository {

  /**
   * Constructor of ClientRepository
   */
  constructor() {
    this.clients = new Map();
    this.nextClientId = 1;
  }

  /**
   * Function which registers client
   * @param socket corresponding socket of the client
   * @param clientData information about the client to register, other clients need this information later
   * @returns {Promise<number>} promise caller can wait for
   */
  async registerClient(socket, clientData) {
    const clientId = this.nextClientId;
    const client = {
      id: clientId,
      socket: socket,
      gender: clientData.gender,
      username: clientData.username,
      link: clientData.link,
    };

    this.clients.set(clientId, client);
    this.nextClientId = this.nextClientId + 1;

    return clientId;
  }

  /**
   * function which gets a client by id
   * @param id id of the client
   * @returns {unknown} client object
   */
  getClientById(id) {
    return this.clients.get(id);
  }

  /**
   * function which removes a client by socket
   * @param socket socket of the corresponding client
   * @returns number id of the removed client
   */
  removeBySocket(socket) {
    let removeId = undefined;

    for (const [key, value] of this.clients) {
      if (value.socket === socket) {
        removeId = key;
        this.clients.delete(key);
      }
    }

    return removeId;
  }
}
