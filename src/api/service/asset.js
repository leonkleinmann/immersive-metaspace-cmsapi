import Sprite from "../../model/Sprite.js";
import Animation from "../../model/Animation.js";

/**
 * Class which contains methods to get asset data from mongodb
 */
export default class AssetService {

  /**
   * function which extract all assets from the mongodb
   * @returns {Promise<string>} promise caller can wait for
   */
  async handle() {
    let sprites = await Sprite.find().populate('textures')
    let animations = await Animation.find().populate('textures')
    const assets = {
      sprites: sprites,
      animations: animations
    }

    return JSON.stringify(assets)
  }
}
