import mongoose from "mongoose";
import Tile from "./Tile.js";
import Animation from "./Animation.js";

const schema = new mongoose.Schema({
  animation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Animation,
  },
});

const AnimatedTile = Tile.discriminator("animated_tile", schema);
export default AnimatedTile;
