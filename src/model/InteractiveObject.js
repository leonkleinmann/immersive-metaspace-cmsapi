import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Content from "./Content.js";

const schema = new mongoose.Schema({
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Content,
  },
});

const InteractiveObject = MapObject.discriminator("interactive_object", schema);
export default InteractiveObject;
