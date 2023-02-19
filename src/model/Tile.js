import mongoose from "mongoose";

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

const Tile = mongoose.model("Tile", schema, "tiles");
export default Tile;
