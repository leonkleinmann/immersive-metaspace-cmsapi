import mongoose from "mongoose";
import VirtualRoom from "./VirtualRoom.js";

const schema = new mongoose.Schema({
  tile_size: {
    type: Number,
    required: true,
  },
  initial_room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: VirtualRoom,
  },
});

const VirtualWorld = mongoose.model("VirtualWorld", schema, "virtual_worlds");
export default VirtualWorld;
