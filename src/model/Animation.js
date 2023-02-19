import mongoose from "mongoose";
import Texture from "./Texture.js";

const schema = new mongoose.Schema({
  identifier: {
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

const Animation = mongoose.model("Animation", schema, "animations");
export default Animation;
