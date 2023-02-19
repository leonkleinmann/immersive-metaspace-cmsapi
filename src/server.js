import Database from "./db/database.js";
import API from "./api/controller.js";
import StateMachine from "./statemachine/controller.js";
import {buildTest} from "./model/world/test.js";

const uri = "mongodb://localhost/test";

const database = Database.getInstance();
database
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(async (db) => {
    buildTest().then(() => {
      console.log('World was created')
    })
    new API().listen();
    new StateMachine();
  })
  .catch((error) => {
    console.log("MongoDB: error while connecting!", error);
  });
