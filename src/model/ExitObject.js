import mongoose from "mongoose";
import MapObject from "./MapObject.js";
import Texture from "./Texture.js";
import VirtualRoom from "./VirtualRoom.js";

const schema = new mongoose.Schema({
  texture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Texture,
  },
  next_room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VirtualRoom'
  },
});

const ExitObject = MapObject.discriminator("exit_object", schema);
export default ExitObject;