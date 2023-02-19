import MetaSpace from "../../model/MetaSpace.js";
import VirtualWorld from "../../model/VirtualWorld.js";

export default class SettingsService {
  async handle() {
    let metaspace = await MetaSpace.find()
    let world_id = metaspace[0].world

    let world = await VirtualWorld.findById(world_id)
    return JSON.stringify(world)
  }
}
