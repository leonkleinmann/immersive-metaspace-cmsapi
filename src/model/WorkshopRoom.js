import mongoose from "mongoose";
import VirtualRoom from "./VirtualRoom.js";
import MapObject from "./MapObject.js";

const schema = new mongoose.Schema({
  max_players: {
    type: Number,
    required: true,
  },
  workshopObjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: MapObject,
    },
  ],
});

const WorkshopRoom = VirtualRoom.discriminator("workshop_room", schema);
export default WorkshopRoom;
