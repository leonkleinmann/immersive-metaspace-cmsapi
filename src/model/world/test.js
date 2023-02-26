import Texture from "../Texture.js";
import Sprite from "../Sprite.js";
import VirtualRoom from "../VirtualRoom.js";
import BaseTile from "../BaseTile.js";
import VirtualWorld from "../VirtualWorld.js";
import MetaSpace from "../MetaSpace.js";
import Animation from "../Animation.js";
import ExitObject from "../ExitObject.js";
import CommonObject from "../CommonObject.js";
import AnimatedObject from "../AnimatedObject.js";
import InteractiveObject from "../InteractiveObject.js";
import Content from "../Content.js";
import NPC from "../NPC.js";
import GotoCommand from "../GotoCommand.js";
import ContentCommand from "../ContentCommand.js";
import CommandChain from "../CommandChain.js";

export async function buildTest() {
  /* UI */
  const linkTexture = await Texture.create({
    type: "link",
    width: 800,
    height: 800,
    x: 0,
    y: 0,
  });

  const uiSprite = await Sprite.create({
    identifier: "ui",
    src: "drawable/ui/base/link.png",
    textures: [linkTexture],
  });

  /* CARPETS */
  const carpet_purple = await Texture.create({
    type: "carpet_purple",
    width: 112,
    height: 116,
    x: 0,
    y: 0,
  });
  const carpet_brown = await Texture.create({
    type: "carpet_brown",
    width: 84,
    height: 54,
    x: 114,
    y: 0,
  });

  const carpet_green = await Texture.create({
    type: "carpet_green",
    width: 64,
    height: 55,
    x: 200,
    y: 0,
  });

  const carpet_red = await Texture.create({
    type: "carpet_red",
    width: 128,
    height: 64,
    x: 113,
    y: 57,
  });

  const carpetSprite = await Sprite.create({
    identifier: "carpets",
    src: "drawable/tiles/base/carpets.png",
    textures: [carpet_purple, carpet_brown, carpet_green, carpet_red],
  });

  /* COUCH */
  const couchTexture = await Texture.create({
    type: "carpet_red",
    width: 96,
    height: 96,
    x: 0,
    y: 0,
  });
  const couchSprite = await Sprite.create({
    identifier: "couch",
    src: "/drawable/object/base/couches.png",
    textures: [couchTexture],
  });

  /* FRIDGE */
  const fridge1 = await Texture.create({
    type: "fridge_02",
    width: 32,
    height: 72,
    x: 0,
    y: 14,
  });
  const fridge2 = await Texture.create({
    type: "fridge_02",
    width: 32,
    height: 72,
    x: 64,
    y: 14,
  });
  const fridge3 = await Texture.create({
    type: "fridge_03",
    width: 32,
    height: 72,
    x: 128,
    y: 14,
  });
  const fridge4 = await Texture.create({
    type: "fridge_04",
    width: 32,
    height: 72,
    x: 192,
    y: 14,
  });
  const fridge5 = await Texture.create({
    type: "fridge_05",
    width: 32,
    height: 72,
    x: 256,
    y: 14,
  });
  const fridge6 = await Texture.create({
    type: "fridge_06",
    width: 32,
    height: 72,
    x: 320,
    y: 14,
  });
  const fridge7 = await Texture.create({
    type: "fridge_07",
    width: 32,
    height: 72,
    x: 384,
    y: 14,
  });
  const fridgeSprite = await Sprite.create({
    identifier: "fridge",
    src: "/drawable/object/animated/fridge.png",
    textures: [fridge1, fridge2, fridge3, fridge4, fridge5, fridge6, fridge7],
  });
  const fridgeAnimation = await Animation.create({
    identifier: "fridge",
    textures: [fridge1, fridge2, fridge3, fridge4, fridge5, fridge6, fridge7],
  });

  /* FLOORS */
  const floor1 = await Texture.create({
    type: "yellow_floor",
    width: 32,
    height: 32,
    x: 0,
    y: 0,
  });
  const floor2 = await Texture.create({
    type: "graete_floor",
    width: 32,
    height: 32,
    x: 32,
    y: 256,
  });
  const floorSprite = await Sprite.create({
    identifier: "floors",
    src: "/drawable/tiles/base/floors.png",
    textures: [floor1, floor2],
  });

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

  const initialTile = await BaseTile.create({
    type: "grass",
    x: 5,
    y: 5,
    texture: floor1,
  });

  const sustainabilityRoom = await VirtualRoom.create({
    width: 20,
    height: 20,
    music: "/assets/music/sustainability.mp3",
    base_texture: floor1,
    initial_position: initialTile,
  });

  const lobbyExit = await ExitObject.create({
    x: 2,
    y: 2,
    texture: floor1,
    next_room: sustainabilityRoom,
  });

  const commonObject = await CommonObject.create({
    x: 0,
    y: 0,
    texture: carpet_purple,
  });
  const commonObject2 = await CommonObject.create({
    x: 2,
    y: 2,
    texture: carpet_brown,
  });

  const commonObject3 = await CommonObject.create({
    x: 4,
    y: 4,
    texture: carpet_green,
  });

  const commonObject4 = await CommonObject.create({
    x: 0,
    y: 4,
    texture: carpet_red,
  });

  const animatedObject = await AnimatedObject.create({
    x: 6,
    y: 6,
    animation: fridgeAnimation,
  });

  const testContent = await Content.create({
    html: "<h1>Test-Content</h1>",
  });

  const testContent2 = await Content.create({
    html: "<h1>Test-Content 2</h1>",
  });

  const baseTile1 = await BaseTile.create({
    type: "carpet",
    x: 0,
    y: 0,
    texture: carpet_purple,
  });

  const interactiveObject = await InteractiveObject.create({
    x: 8,
    y: 8,
    animation: fridgeAnimation,
    content: testContent,
  });

  const interactiveObject2 = await InteractiveObject.create({
    x: 2,
    y: 8,
    animation: fridgeAnimation,
    content: testContent2,
  });

  const interactiveObject3 = await InteractiveObject.create({
    x: 8,
    y: 1,
    animation: fridgeAnimation,
    content: testContent2,
  });

  const commonCouchObject = await CommonObject.create({
    x: 2,
    y: 14,
    texture: couchTexture,
  });

  const gotoCommand = await GotoCommand.create({
    type: "goto",
    x: 0,
    y: 0,
    with_user: false,
  });
  const gotoCommand2 = await GotoCommand.create({
    type: "goto",
    x: 0,
    y: 5,
    with_user: false,
  });


  const contentCommand = await ContentCommand.create({
    type: "content",
    content: testContent2,
  });

  const commandChain = await CommandChain.create({
    commands: [gotoCommand, contentCommand, gotoCommand2, contentCommand],
  });

  const npc = await NPC.create({
    name: "LEON",
    x: 6,
    y: 6,
    animation_identifier: "male",
    chain: commandChain
  });

  const lobbyRoom = await VirtualRoom.create({
    width: 10,
    height: 20,
    base_texture: floor2,
    initial_position: initialTile,
    music: "/assets/music/lobby.mp3",
    tiles: [baseTile1],
    exits: [lobbyExit],
    objects: [interactiveObject3, commonCouchObject],
    npcs: [npc],
  });

  const virtualWorld = await VirtualWorld.create({
    max_players: 10,
    tile_size: 32,
    initial_room: lobbyRoom,
  });
  const metaSpace = MetaSpace.create({
    world: virtualWorld._id,
  });
}
