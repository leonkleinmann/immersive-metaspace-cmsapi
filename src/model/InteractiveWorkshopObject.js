import MapObject from "./MapObject.js";
import Texture from "./Texture.js";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  texture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Texture,
  },
});

const InteractiveWorkshopObject = MapObject.discriminator(
  "interactive_workshop_object",
  schema
);
export default InteractiveWorkshopObject;
