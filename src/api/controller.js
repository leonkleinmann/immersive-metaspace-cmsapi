import express from "express";
import AssetService from "./service/asset.js";
import SettingsService from "./service/settings.js";
import MapService from "./service/map.js";
import TextureModel from "../model/Texture.js";
import Texture from "../model/Texture.js";

const api = express();

export default class API {
  constructor(port = 9003) {
    this.port = port;
  }

  listen() {
    console.log("API: will listen to port " + this.port);

    const assetService = new AssetService();
    const settingsService = new SettingsService();
    const mapService = new MapService();

    api.listen(this.port);
    api.get((req, res) => {
      res.send("404");
    });

    api.get("/settings", async (req, res) => {
      res.send(await settingsService.handle());
    });
    api.get("/assets", async (req, res) => {
      res.send(await assetService.handle());
    });
    api.get("/map/world", async (req, res) => {
      res.send(await mapService.getWorld());
    });
    api.get("/map/room/:id", async(req, res) => {
      res.send(await mapService.getRoom(req.params.id))
    })
  }
}
