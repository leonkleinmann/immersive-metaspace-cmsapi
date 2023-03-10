import MetaSpace from "../../model/MetaSpace.js";
import VirtualRoom from "../../model/VirtualRoom.js";

/**
 * Class which contains functions get the world and rooms of the meta space
 */
export default class MapService {

  /**
   * function which gets the currently deployed world of the meta space
   * @returns {Promise<string>}
   */
  async getWorld() {
    let metaSpace = await MetaSpace.find().populate("world");
    let world = metaSpace[0].world;

    return JSON.stringify(world);
  }

  /**
   * function which gets a certain room from the mongodb
   * @param id id of the desired room
   * @returns {Promise<string>} promise caller can wait for
   */
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
          path: "workshopObjects",
          populate: [
            {
              path: "texture"
            }
          ]
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
