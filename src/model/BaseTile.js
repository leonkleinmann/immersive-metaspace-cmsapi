import mongoose from "mongoose";
import Texture from "./Texture.js";
import Tile from "./Tile.js";

const schema = new mongoose.Schema({
  texture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Texture,
  },
});

const BaseTile = Tile.discriminator("base_tile", schema);
export default BaseTile;
