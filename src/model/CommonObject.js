import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Texture from "./Texture.js";

const schema = new mongoose.Schema({
  texture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Texture,
  },
});

const CommonObject = MapObject.discriminator("common_object", schema);
export default CommonObject;
