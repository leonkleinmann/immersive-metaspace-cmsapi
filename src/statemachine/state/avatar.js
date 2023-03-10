/**
 * Class which represents avatar states
 */
export default class AvatarState {

  /**
   * Constructor of AvatarState
   */
  constructor() {
    this.avatars = new Map();
  }

  /**
   * function which modifies an avatar state
   * @param id id of the avatar
   * @param data data to set
   */
  modifyAvatarState(id, data) {
    this.avatars.set(id, data);
  }

  /**
   * function which removes an avatar state
   * @param client_id id of the avatar
   */
  removeAvatarState(client_id) {
    this.avatars.delete(client_id)
  }

  /**
   * function which updates the position of an avatar
   * @param client_id id of the avatar
   * @param x new x-position of the avatar
   * @param y new y-position of the avatar
   */
  updatePosition(client_id, x, y) {
    let value = this.avatars.get(client_id)
    value.x = x
    value.y = y
    this.avatars.set(client_id, value)
  }

  /**
   * function which updates direction avatar is looking/walking to
   * @param client_id id of the avatar
   * @param direction direction to set
   */
  updateDirection(client_id, direction) {
    let value = this.avatars.get(client_id)
    value.direction = direction
    this.avatars.set(client_id, value)
  }

  /**
   * function which returns an avatar by id
   * @param client_id id of the avatar
   * @returns avatar avatar of corresponding client_id
   */
  getAvatarStateById(client_id) {
    return this.avatars.get(client_id)
  }

  /**
   * function which returns all avatars in a certain room
   * @param room_id id of the room
   * @param exclude_id id of one avatar to exclude
   * @returns {*[]} array of avatars
   */
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
