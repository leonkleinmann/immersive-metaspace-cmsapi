import VirtualWorld from "../VirtualWorld.js";
import MetaSpace from "../MetaSpace.js";
import Texture from "../Texture.js";
import Sprite from "../Sprite.js";
import Animation from "../Animation.js";
import ContentRoom from "../ContentRoom.js";
import BaseTile from "../BaseTile.js";
import CommonObject from "../CommonObject.js";

async function buildAvatarAssets() {
  /** IDLE **/
  const maleIdleEast = await Texture.create({
    type: "male_idle_east",
    width: 32,
    height: 64,
    x: 0,
    y: 0,
  });
  const maleIdleNorth = await Texture.create({
    type: "male_idle_north",
    width: 32,
    height: 64,
    x: 32,
    y: 0,
  });
  const maleIdleWest = await Texture.create({
    type: "male_idle_west",
    width: 32,
    height: 64,
    x: 64,
    y: 0,
  });
  const maleIdleSouth = await Texture.create({
    type: "male_idle_south",
    width: 32,
    height: 64,
    x: 96,
    y: 0,
  });

  const maleIdleSprite = await Sprite.create({
    identifier: "male_idle",
    src: "drawable/avatar/male/idle.png",
    textures: [maleIdleNorth, maleIdleEast, maleIdleSouth, maleIdleWest],
  });

  /** NORTH **/
  const maleWalkNorth1 = await Texture.create({
    type: "male_walk_north_0",
    width: 32,
    height: 64,
    x: 6 * 32,
    y: 0,
  });
  const maleWalkNorth2 = await Texture.create({
    type: "male_walk_north_1",
    width: 32,
    height: 64,
    x: 7 * 32,
    y: 0,
  });
  const maleWalkNorth3 = await Texture.create({
    type: "male_walk_north_2",
    width: 32,
    height: 64,
    x: 8 * 32,
    y: 0,
  });
  const maleWalkNorth4 = await Texture.create({
    type: "male_walk_north_3",
    width: 32,
    height: 64,
    x: 9 * 32,
    y: 0,
  });
  const maleWalkNorth5 = await Texture.create({
    type: "male_walk_north_4",
    width: 32,
    height: 64,
    x: 10 * 32,
    y: 0,
  });
  const maleWalkNorth6 = await Texture.create({
    type: "male_walk_north_5",
    width: 32,
    height: 64,
    x: 11 * 32,
    y: 0,
  });

  const maleWalkNorthAnimation = await Animation.create({
    identifier: "male_walk_north",
    textures: [
      maleWalkNorth1,
      maleWalkNorth2,
      maleWalkNorth3,
      maleWalkNorth4,
      maleWalkNorth5,
      maleWalkNorth6,
    ],
  });

  /** EAST **/
  const maleWalkEast1 = await Texture.create({
    type: "male_walk_east_0",
    width: 32,
    height: 64,
    x: 0 * 32,
    y: 0,
  });
  const maleWalkEast2 = await Texture.create({
    type: "male_walk_east_1",
    width: 32,
    height: 64,
    x: 1 * 32,
    y: 0,
  });
  const maleWalkEast3 = await Texture.create({
    type: "male_walk_east_2",
    width: 32,
    height: 64,
    x: 2 * 32,
    y: 0,
  });
  const maleWalkEast4 = await Texture.create({
    type: "male_walk_east_3",
    width: 32,
    height: 64,
    x: 3 * 32,
    y: 0,
  });
  const maleWalkEast5 = await Texture.create({
    type: "male_walk_east_4",
    width: 32,
    height: 64,
    x: 4 * 32,
    y: 0,
  });
  const maleWalkEast6 = await Texture.create({
    type: "male_walk_east_5",
    width: 32,
    height: 64,
    x: 5 * 32,
    y: 0,
  });
  const maleWalkEastAnimation = await Animation.create({
    identifier: "male_walk_east",
    textures: [
      maleWalkEast1,
      maleWalkEast2,
      maleWalkEast3,
      maleWalkEast4,
      maleWalkEast5,
      maleWalkEast6,
    ],
  });

  /** SOUTH **/
  const maleWalkSouth1 = await Texture.create({
    type: "male_walk_south_0",
    width: 32,
    height: 64,
    x: 18 * 32,
    y: 0,
  });
  const maleWalkSouth2 = await Texture.create({
    type: "male_walk_south_1",
    width: 32,
    height: 64,
    x: 19 * 32,
    y: 0,
  });
  const maleWalkSouth3 = await Texture.create({
    type: "male_walk_south_2",
    width: 32,
    height: 64,
    x: 20 * 32,
    y: 0,
  });
  const maleWalkSouth4 = await Texture.create({
    type: "male_walk_south_3",
    width: 32,
    height: 64,
    x: 21 * 32,
    y: 0,
  });
  const maleWalkSouth5 = await Texture.create({
    type: "male_walk_south_4",
    width: 32,
    height: 64,
    x: 22 * 32,
    y: 0,
  });
  const maleWalkSouth6 = await Texture.create({
    type: "male_walk_south_5",
    width: 32,
    height: 64,
    x: 23 * 32,
    y: 0,
  });
  const maleWalkSouthAnimation = await Animation.create({
    identifier: "male_walk_south",
    textures: [
      maleWalkSouth1,
      maleWalkSouth2,
      maleWalkSouth3,
      maleWalkSouth4,
      maleWalkSouth5,
      maleWalkSouth6,
    ],
  });

  /** WEST **/
  const maleWalkWest1 = await Texture.create({
    type: "male_walk_west_0",
    width: 32,
    height: 64,
    x: 12 * 32,
    y: 0,
  });
  const maleWalkWest2 = await Texture.create({
    type: "male_walk_west_1",
    width: 32,
    height: 64,
    x: 13 * 32,
    y: 0,
  });
  const maleWalkWest3 = await Texture.create({
    type: "male_walk_west_2",
    width: 32,
    height: 64,
    x: 14 * 32,
    y: 0,
  });
  const maleWalkWest4 = await Texture.create({
    type: "male_walk_west_3",
    width: 32,
    height: 64,
    x: 15 * 32,
    y: 0,
  });
  const maleWalkWest5 = await Texture.create({
    type: "male_walk_west_4",
    width: 32,
    height: 64,
    x: 16 * 32,
    y: 0,
  });
  const maleWalkWest6 = await Texture.create({
    type: "male_walk_west_6",
    width: 32,
    height: 64,
    x: 17 * 32,
    y: 0,
  });
  const maleWalkWestAnimation = await Animation.create({
    identifier: "male_walk_west",
    textures: [
      maleWalkWest1,
      maleWalkWest2,
      maleWalkWest3,
      maleWalkWest4,
      maleWalkWest5,
      maleWalkWest6,
    ],
  });

  const maleWalkSprite = await Sprite.create({
    identifier: "male_walk",
    src: "drawable/avatar/male/walk.png",
    textures: [
      maleWalkNorth1,
      maleWalkNorth2,
      maleWalkNorth3,
      maleWalkNorth4,
      maleWalkNorth5,
      maleWalkNorth6,
      maleWalkEast1,
      maleWalkEast2,
      maleWalkEast3,
      maleWalkEast4,
      maleWalkEast5,
      maleWalkEast6,
      maleWalkSouth1,
      maleWalkSouth2,
      maleWalkSouth3,
      maleWalkSouth4,
      maleWalkSouth5,
      maleWalkSouth6,
      maleWalkWest1,
      maleWalkWest2,
      maleWalkWest3,
      maleWalkWest4,
      maleWalkWest5,
      maleWalkWest6,
    ],
  });

  /** IDLE **/
  const femaleIdleEast = await Texture.create({
    type: "female_idle_east",
    width: 32,
    height: 64,
    x: 0,
    y: 0,
  });
  const femaleIdleNorth = await Texture.create({
    type: "female_idle_north",
    width: 32,
    height: 64,
    x: 32,
    y: 0,
  });
  const femaleIdleWest = await Texture.create({
    type: "female_idle_west",
    width: 32,
    height: 64,
    x: 64,
    y: 0,
  });
  const femaleIdleSouth = await Texture.create({
    type: "female_idle_south",
    width: 32,
    height: 64,
    x: 96,
    y: 0,
  });

  const femaleIdleSprite = await Sprite.create({
    identifier: "female_idle",
    src: "drawable/avatar/female/idle.png",
    textures: [
      femaleIdleNorth,
      femaleIdleEast,
      femaleIdleSouth,
      femaleIdleWest,
    ],
  });

  /** NORTH **/
  const femaleWalkNorth1 = await Texture.create({
    type: "female_walk_north_0",
    width: 32,
    height: 64,
    x: 6 * 32,
    y: 0,
  });
  const femaleWalkNorth2 = await Texture.create({
    type: "female_walk_north_1",
    width: 32,
    height: 64,
    x: 7 * 32,
    y: 0,
  });
  const femaleWalkNorth3 = await Texture.create({
    type: "female_walk_north_2",
    width: 32,
    height: 64,
    x: 8 * 32,
    y: 0,
  });
  const femaleWalkNorth4 = await Texture.create({
    type: "female_walk_north_3",
    width: 32,
    height: 64,
    x: 9 * 32,
    y: 0,
  });
  const femaleWalkNorth5 = await Texture.create({
    type: "female_walk_north_4",
    width: 32,
    height: 64,
    x: 10 * 32,
    y: 0,
  });
  const femaleWalkNorth6 = await Texture.create({
    type: "female_walk_north_5",
    width: 32,
    height: 64,
    x: 11 * 32,
    y: 0,
  });

  const femaleWalkNorthAnimation = await Animation.create({
    identifier: "female_walk_north",
    textures: [
      femaleWalkNorth1,
      femaleWalkNorth2,
      femaleWalkNorth3,
      femaleWalkNorth4,
      femaleWalkNorth5,
      femaleWalkNorth6,
    ],
  });

  /** EAST **/
  const femaleWalkEast1 = await Texture.create({
    type: "female_walk_east_0",
    width: 32,
    height: 64,
    x: 0 * 32,
    y: 0,
  });
  const femaleWalkEast2 = await Texture.create({
    type: "female_walk_east_1",
    width: 32,
    height: 64,
    x: 1 * 32,
    y: 0,
  });
  const femaleWalkEast3 = await Texture.create({
    type: "female_walk_east_2",
    width: 32,
    height: 64,
    x: 2 * 32,
    y: 0,
  });
  const femaleWalkEast4 = await Texture.create({
    type: "female_walk_east_3",
    width: 32,
    height: 64,
    x: 3 * 32,
    y: 0,
  });
  const femaleWalkEast5 = await Texture.create({
    type: "female_walk_east_4",
    width: 32,
    height: 64,
    x: 4 * 32,
    y: 0,
  });
  const femaleWalkEast6 = await Texture.create({
    type: "female_walk_east_5",
    width: 32,
    height: 64,
    x: 5 * 32,
    y: 0,
  });
  const femaleWalkEastAnimation = await Animation.create({
    identifier: "female_walk_east",
    textures: [
      femaleWalkEast1,
      femaleWalkEast2,
      femaleWalkEast3,
      femaleWalkEast4,
      femaleWalkEast5,
      femaleWalkEast6,
    ],
  });

  /** SOUTH **/
  const femaleWalkSouth1 = await Texture.create({
    type: "female_walk_south_0",
    width: 32,
    height: 64,
    x: 18 * 32,
    y: 0,
  });
  const femaleWalkSouth2 = await Texture.create({
    type: "female_walk_south_1",
    width: 32,
    height: 64,
    x: 19 * 32,
    y: 0,
  });
  const femaleWalkSouth3 = await Texture.create({
    type: "female_walk_south_2",
    width: 32,
    height: 64,
    x: 20 * 32,
    y: 0,
  });
  const femaleWalkSouth4 = await Texture.create({
    type: "female_walk_south_3",
    width: 32,
    height: 64,
    x: 21 * 32,
    y: 0,
  });
  const femaleWalkSouth5 = await Texture.create({
    type: "female_walk_south_4",
    width: 32,
    height: 64,
    x: 22 * 32,
    y: 0,
  });
  const femaleWalkSouth6 = await Texture.create({
    type: "female_walk_south_5",
    width: 32,
    height: 64,
    x: 23 * 32,
    y: 0,
  });
  const femaleWalkSouthAnimation = await Animation.create({
    identifier: "female_walk_south",
    textures: [
      femaleWalkSouth1,
      femaleWalkSouth2,
      femaleWalkSouth3,
      femaleWalkSouth4,
      femaleWalkSouth5,
      femaleWalkSouth6,
    ],
  });

  /** WEST **/
  const femaleWalkWest1 = await Texture.create({
    type: "female_walk_west_0",
    width: 32,
    height: 64,
    x: 12 * 32,
    y: 0,
  });
  const femaleWalkWest2 = await Texture.create({
    type: "female_walk_west_1",
    width: 32,
    height: 64,
    x: 13 * 32,
    y: 0,
  });
  const femaleWalkWest3 = await Texture.create({
    type: "female_walk_west_2",
    width: 32,
    height: 64,
    x: 14 * 32,
    y: 0,
  });
  const femaleWalkWest4 = await Texture.create({
    type: "female_walk_west_3",
    width: 32,
    height: 64,
    x: 15 * 32,
    y: 0,
  });
  const femaleWalkWest5 = await Texture.create({
    type: "female_walk_west_4",
    width: 32,
    height: 64,
    x: 16 * 32,
    y: 0,
  });
  const femaleWalkWest6 = await Texture.create({
    type: "female_walk_west_6",
    width: 32,
    height: 64,
    x: 17 * 32,
    y: 0,
  });
  const femaleWalkWestAnimation = await Animation.create({
    identifier: "female_walk_west",
    textures: [
      femaleWalkWest1,
      femaleWalkWest2,
      femaleWalkWest3,
      femaleWalkWest4,
      femaleWalkWest5,
      femaleWalkWest6,
    ],
  });

  const femaleWalkSprite = await Sprite.create({
    identifier: "female_walk",
    src: "drawable/avatar/female/walk.png",
    textures: [
      femaleWalkNorth1,
      femaleWalkNorth2,
      femaleWalkNorth3,
      femaleWalkNorth4,
      femaleWalkNorth5,
      femaleWalkNorth6,
      femaleWalkEast1,
      femaleWalkEast2,
      femaleWalkEast3,
      femaleWalkEast4,
      femaleWalkEast5,
      femaleWalkEast6,
      femaleWalkSouth1,
      femaleWalkSouth2,
      femaleWalkSouth3,
      femaleWalkSouth4,
      femaleWalkSouth5,
      femaleWalkSouth6,
      femaleWalkWest1,
      femaleWalkWest2,
      femaleWalkWest3,
      femaleWalkWest4,
      femaleWalkWest5,
      femaleWalkWest6,
    ],
  });
}
async function buildTextures() {
  let textures = {}

  /** FLOORS **/
  const stone = await Texture.create({
    type: "stone",
    width: 32,
    height: 32,
    x: 0,
    y: 0,
  });
  const grass = await Texture.create({
    type: "grass",
    width: 32,
    height: 32,
    x: 32,
    y: 0,
  });
  const wood = await Texture.create({
    type: "wood",
    width: 64,
    height: 32,
    x: 64,
    y: 0,
  });
  const building = await Texture.create({
    type: "building",
    width: 500,
    height: 272,
    x: 0,
    y: 0,
  })
  const tree = await Texture.create({
    type: "tree",
    width: 158,
    height: 180,
    x: 0,
    y: 320,
  });

  textures["stone"] = stone;
  textures["grass"] = grass;
  textures["wood"] = wood
  textures["building"] = building;
  textures["tree"] = tree;
  return textures
}
async function buildSprites(textures) {
  await Sprite.create({
    identifier: "floors",
    src: "/drawable/tiles/base/floors.png",
    textures: [textures["stone"], textures["grass"], textures["wood"]]
  });

  await Sprite.create({
    identifier: "lobby_objects",
    src: "/drawable/object/base/lobbyObjects.png",
    textures: [textures["building"], textures["tree"]]
  });
}
async function buildTiles(textures) {
  let tiles = {}
  tiles["initial_lobby"] = await BaseTile.create({
    type: "grass",
    x: 0,
    y: 0,
    texture: textures["grass"],
  });
  tiles["steg_1"] = await BaseTile.create({
    type: "wood",
    x: 18,
    y: 14,
    texture: textures["wood"]
  });
  tiles["steg_2"] = await BaseTile.create({
    type: "wood",
    x: 18,
    y: 15,
    texture: textures["wood"]
  });
  tiles["steg_3"] = await BaseTile.create({
    type: "wood",
    x: 18,
    y: 16,
    texture: textures["wood"]
  });
  tiles["steg_4"] = await BaseTile.create({
    type: "wood",
    x: 18,
    y: 17,
    texture: textures["wood"]
  });


  return tiles
}
async function buildAnimatedTiles(textures) {

}
async function buildCommonObjects(textures) {
  let commonObjects = {}

  const buildingObject = await CommonObject.create({
    x: 10,
    y: 0,
    texture: textures["building"],
  })

  const treeObject = await CommonObject.create({
    x: 26,
    y: 14,
    texture: textures["tree"],
  });

  commonObjects["buildingObject"] = buildingObject
  commonObjects["treeObject"] = treeObject
  return commonObjects
}
async function buildFrame(tile_type, tile_object) {
  let frameTiles = [];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 50; y++) {
      const frameTile = await BaseTile.create({
        type: tile_type,
        x: x,
        y: y,
        texture: tile_object,
      });
      frameTiles.push(frameTile);
    }
  }

  for (let x = 0; x < 35; x++) {
    for (let y = 0; y < 15; y++) {
      const frameTile = await BaseTile.create({
        type: tile_type,
        x: x,
        y: y,
        texture: tile_object,
      });
      frameTiles.push(frameTile);
    }
  }

  for (let x = 30; x < 35; x++) {
    for (let y = 0; y < 55; y++) {
      const frameTile = await BaseTile.create({
        type: tile_type,
        x: x,
        y: y,
        texture: tile_object,
      });
      frameTiles.push(frameTile);
    }
  }

  for (let x = 0; x < 35; x++) {
    for (let y = 50; y < 55; y++) {
      const frameTile = await BaseTile.create({
        type: tile_type,
        x: x,
        y: y,
        texture: tile_object,
      });
      frameTiles.push(frameTile);
    }
  }

  return frameTiles;
}

export async function buildDemo() {
  await buildAvatarAssets();
  let textures = await buildTextures();
  await buildSprites(textures);
  let frameTiles = await buildFrame("stone", textures["stone"]);
  let tiles = await buildTiles(textures);
  let commonObjects = await buildCommonObjects(textures);

  frameTiles.push(tiles["steg_1"])
  frameTiles.push(tiles["steg_2"])
  frameTiles.push(tiles["steg_3"])
  frameTiles.push(tiles["steg_4"])
  const lobbyRoom = await ContentRoom.create({
    width: 35,
    height: 55,
    base_texture: textures["grass"],
    initial_position: tiles["initial_lobby"],
    music: "/assets/music/lobby.mp3",
    tiles: frameTiles,
    exits: [],
    objects: [commonObjects["buildingObject"], commonObjects["treeObject"]],
    npcs: [],
  });

  const virtualWorld = await VirtualWorld.create({
    tile_size: 32,
    initial_room: lobbyRoom,
  });
  const metaSpace = MetaSpace.create({
    world: virtualWorld._id,
  });
}
