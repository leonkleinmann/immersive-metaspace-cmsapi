import mongoose from "mongoose";
import VirtualRoom from "./VirtualRoom.js";

const schema = new mongoose.Schema({});

const WorkshopRoom = VirtualRoom.discriminator("workshop_room", schema);
export default WorkshopRoom;
