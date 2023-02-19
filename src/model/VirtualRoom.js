import mongoose from "mongoose";
import Texture from "./Texture.js";
import Tile from "./Tile.js";
import MapObject from "./MapObject.js";
import NPC from "./NPC.js";
import ExitObject from "./ExitObject.js";

const schema = new mongoose.Schema({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  base_texture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Texture,
  },
  initial_position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Tile,
  },
  exits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: ExitObject,
    },
  ],
  tiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Tile,
    },
  ],
  objects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: MapObject,
    },
  ],
  npcs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: NPC,
    },
  ],
});

const VirtualRoom = mongoose.model("VirtualRoom", schema, "virtual_rooms");
export default VirtualRoom;
