import mongoose from "mongoose";
import Command from "./Command.js";

const schema = new mongoose.Schema({
    commands: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Command,
        },
    ],
});

const CommandChain = mongoose.model("CommandChain", schema, "command_chain");
export default CommandChain;
