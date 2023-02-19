import Sprite from "../../model/Sprite.js";
import Animation from "../../model/Animation.js";

export default class AssetService {
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
