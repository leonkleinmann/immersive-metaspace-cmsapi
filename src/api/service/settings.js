import MetaSpace from "../../model/MetaSpace.js";
import VirtualWorld from "../../model/VirtualWorld.js";

/**
 * Class which contains functions to get settings of the meta space
 */
export default class SettingsService {
  /**
   * Function which gets meta space settings from mongodb
   * @returns {Promise<string>} promise caller can wait for
   */
  async handle() {
    let metaspace = await MetaSpace.find()
    let world_id = metaspace[0].world

    let world = await VirtualWorld.findById(world_id)
    return JSON.stringify(world)
  }
}
