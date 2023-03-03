import MetaSpace from "../../model/MetaSpace.js";
import VirtualRoom from "../../model/VirtualRoom.js";
import ExitObject from "../../model/ExitObject.js";

export default class MapService {
  async getWorld() {
    let metaSpace = await MetaSpace.find().populate("world");
    let world = metaSpace[0].world;

    return JSON.stringify(world);
  }

  async getRoom(id) {
    let room = await VirtualRoom.findById(id)
      .populate("base_texture")
      .populate("initial_position")
      .populate([
        {
          path: 'exits',
          populate: [
            {
              path: "texture"
            }
          ]
        },
        {
          path: "objects",
          populate: [
            {
              path: "texture",
            },
            {
              path: "animation",
            },
            {
              path: "content",
            },
          ],
        },
        {
          path: "tiles",
          populate: [
            {
              path: "texture",
            },
            {
              path: "animation",
            },
          ],
        },
        {
          path: "npcs",
          populate: [
            {
              path: "chain",
              populate: [
                {
                  path: "commands",
                  populate: [
                    {
                      path: "content"
                    }
                  ]
                }
              ]
            },
          ],
        },
      ]);
    return JSON.stringify(room);
  }
}
