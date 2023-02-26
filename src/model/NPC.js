import mongoose from "mongoose";
import CommandChain from "./CommandChain.js";

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
  animation_identifier: {
    type: String,
    required: true,
  },
  chain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CommandChain
  },
});

const NPC = mongoose.model("NPC", schema, "npcs");
export default NPC;
