import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Texture from "./Texture.js";
import Content from "./Content.js";

const schema = new mongoose.Schema({
  textures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Texture,
    },
  ],
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Content,
  },
});

const AnimatedObject = MapObject.discriminator("interactive_object", schema);
export default AnimatedObject;
