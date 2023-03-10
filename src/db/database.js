import mongoose from "mongoose";
import {buildTest} from "../model/world/test.js";

/**
 * Class which represents the Database
 */
export default class Database {
  static instance;

  /**
   * Function which returns the Singleton of the Database
   * @returns Database Instance
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = mongoose;
    }
    return this.instance;
  }

  /* TESTING */
  static createWorlds() {
    buildTest().then(() => {
      console.log("WORLD CREATED!");
    });
  }
}
