/**
 * Class which represents the state of the chat
 */
export default class ChatState {
  /**
   * Constructor of ChatState
   */
  constructor() {
    this.messages = [];
  }

  /**
   * function which adds message to test
   * @param author author of the chat message
   * @param message message of the author
   * @returns chatArray promise user can wait for
   */
  async addMessage(author, message) {
    this.messages.push({
      author: author,
      message: message,
    });

    return this.messages[this.messages.length - 1];
  }
}
