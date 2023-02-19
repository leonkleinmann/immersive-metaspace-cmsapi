import mongoose from "mongoose";

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
});

const Command = mongoose.model("Command", schema, "commands");
export default Command;
