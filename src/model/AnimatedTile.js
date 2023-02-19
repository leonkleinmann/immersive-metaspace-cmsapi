import mongoose from "mongoose";
import Tile from "./Tile.js";
import Texture from "./Texture.js";

const schema = new mongoose.Schema({
  textures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Texture,
    },
  ],
});

const AnimatedTile = Tile.discriminator("animated_tile", schema);
export default AnimatedTile;
