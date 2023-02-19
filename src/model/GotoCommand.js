import mongoose from "mongoose";
import Command from "./Command.js";

const schema = new mongoose.Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  with_user: {
    type: Boolean,
    required: true,
  },
});

const GotoCommand = Command.discriminator("goto_command", schema);
export default GotoCommand;
