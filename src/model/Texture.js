import mongoose from "mongoose";

const textureSchema = new mongoose.Schema({
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
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

const Texture = mongoose.model("Texture", textureSchema, "textures");
export default Texture;
