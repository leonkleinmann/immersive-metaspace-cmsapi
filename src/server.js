import Database from "./db/database.js";
import API from "./api/controller.js";
import StateMachine from "./statemachine/controller.js";
//import {buildTest} from "./model/world/test.js";
import { buildDemo } from "./model/world/demo.js";

/** DB HOST **/
const uri = "mongodb://localhost/demo";

/* get database instance and connect to db, start API and StateMAchine afterwards */
const database = Database.getInstance();
database
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(async (db) => {
    buildDemo().then(() => {
      new API().listen();
      new StateMachine();
    });
  })
  .catch((error) => {
    console.log("MongoDB: error while connecting!", error);
  });
