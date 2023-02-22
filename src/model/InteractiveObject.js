import mongoose from "mongoose";
import Content from "./Content.js";
import MapObject from "./MapObject.js";
import Animation from "./Animation.js";

const schema = new mongoose.Schema({
  animation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Animation,
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Content,
  },
});

const InteractiveObject = MapObject.discriminator("interactive_object", schema);
export default InteractiveObject;
