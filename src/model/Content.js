import mongoose from "mongoose";

const schema = new mongoose.Schema({
  html: {
    type: String,
    required: true,
  },
});

const Content = mongoose.model("Content", schema, "contents");
export default Content;
