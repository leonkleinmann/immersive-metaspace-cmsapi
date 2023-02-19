import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Texture from "./Texture.js";

const schema = new mongoose.Schema({
  textures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Texture,
    },
  ],
});

const AnimatedObject = MapObject.discriminator("object_type", schema);
export default AnimatedObject;
