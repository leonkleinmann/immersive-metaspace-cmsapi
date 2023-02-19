import mongoose from "mongoose";
import VirtualWorld from "./VirtualWorld.js";

const schema = new mongoose.Schema({
  world: {
    type: mongoose.Schema.Types.ObjectId,
    ref: VirtualWorld,
  },
});

const MetaSpace = mongoose.model("MetaSpace", schema, "meta_space");
export default MetaSpace;
