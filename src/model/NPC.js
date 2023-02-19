import mongoose from "mongoose";
import Texture from "./Texture.js";
import Command from "./Command.js";

const schema = new mongoose.Schema({
  name: {
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
  textures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Texture,
    },
  ],
  chain: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Command,
    },
  ],
});

const NPC = mongoose.model("NPC", schema, "npcs");
export default NPC;
