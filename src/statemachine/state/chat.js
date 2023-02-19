export default class ChatState {
  constructor() {
    this.messages = [];
  }

  async addMessage(author, message) {
    this.messages.push({
      author: author,
      message: message,
    });

    return this.messages[this.messages.length - 1];
  }
}
