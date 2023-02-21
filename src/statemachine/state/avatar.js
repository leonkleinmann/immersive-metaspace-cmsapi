export default class AvatarState {
  constructor() {
    this.avatars = new Map();
  }

  modifyAvatarState(id, data) {
    this.avatars.set(id, data);
  }

  updateX(client_id, x) {
    let value = this.avatars.get(client_id)
    value.x = x
    this.avatars.set(client_id, value)
  }
  updateY(client_id, y) {
    let value = this.avatars.get(client_id)
    value.y = y
    this.avatars.set(client_id, value)
  }

  getAvatarStateById(client_id) {
    return this.avatars.get(client_id)
  }
  getAvatarStatesByRoom(room_id, exclude_id = 0) {
    let roomAvatars = [];

    this.avatars.forEach((value, key, map) => {
      if (value.room_id === room_id && key !== exclude_id) {
        roomAvatars.push({
          client_id: key,
          state: value,
        });
      }
    });

    return roomAvatars;
  }
}
