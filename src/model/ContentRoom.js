import mongoose from "mongoose";
import VirtualRoom from "./VirtualRoom.js";

const schema = new mongoose.Schema({});

const ContentRoom = VirtualRoom.discriminator("content_room", schema)
export default ContentRoom;