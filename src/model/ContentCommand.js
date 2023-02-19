import mongoose from "mongoose";
import Content from "./Content.js";
import Command from "./Command.js";

const schema = new mongoose.Schema({
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Content,
  },
});

const ContentCommand = Command.discriminator("content_command", schema);
export default ContentCommand;
