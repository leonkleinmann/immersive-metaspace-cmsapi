import mongoose from "mongoose";
import {buildTest} from "../model/world/test.js";

export default class Database {
  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = mongoose;
    }
    return this.instance;
  }

  static createWorlds() {
    buildTest().then(() => {
      console.log("WORLD CREATED!");
    });
  }
}
