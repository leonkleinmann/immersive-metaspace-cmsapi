import mongoose from "mongoose";
import Texture from "./Texture.js";

const schema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  textures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Texture,
    },
  ],
});

const Sprite = mongoose.model("Sprite", schema, "sprites");
export default Sprite;
