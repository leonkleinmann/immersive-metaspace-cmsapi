import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Animation from "./Animation.js";

const schema = new mongoose.Schema({
  animation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Animation,
  },
});

const AnimatedObject = MapObject.discriminator("animated_object", schema);
export default AnimatedObject;
