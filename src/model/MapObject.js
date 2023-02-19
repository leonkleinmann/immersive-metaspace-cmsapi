import mongoose from "mongoose";

const schema = new mongoose.Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

const MapObject = mongoose.model("MapObject", schema, "map_objects");
export default MapObject;
