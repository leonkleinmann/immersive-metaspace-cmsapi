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
import AnimatedTile from "../AnimatedTile.js";
import ContentRoom from "../ContentRoom.js";
import WorkshopRoom from "../WorkshopRoom.js";
import InteractiveWorkshopObject from "../InteractiveWorkshopObject.js";

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

  /* DESK */
  const deskTexture = await Texture.create({
    type: "desk",
    width: 78,
    height: 76,
    x: 0,
    y: 0,
  });
  const deskSprite = await Sprite.create({
    identifier: "desk",
    src: "/drawable/object/base/desk.png",
    textures: [deskTexture],
  });

  /* ACTION */
  const actionButtonTexture1 = await Texture.create({
    type: "action_01",
    width: 20,
    height: 20,
    x: 0,
    y: 0,
  });

  const actionButtonTexture2 = await Texture.create({
    type: "action_02",
    width: 20,
    height: 20,
    x: 20,
    y: 0,
  });

  const actionSprite = await Sprite.create({
    identifier: "action",
    src: "drawable/ui/animated/action.png",
    textures: [actionButtonTexture1, actionButtonTexture2],
  });

  const actionAnimation = await Animation.create({
    identifier: "action",
    textures: [actionButtonTexture1, actionButtonTexture2],
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
    type: "fridge_01",
    width: 32,
    height: 64,
    x: 0,
    y: 0,
  });
  const fridge2 = await Texture.create({
    type: "fridge_02",
    width: 32,
    height: 64,
    x: 32,
    y: 0,
  });
  const fridge3 = await Texture.create({
    type: "fridge_03",
    width: 32,
    height: 64,
    x: 96,
    y: 0,
  });
  const fridge4 = await Texture.create({
    type: "fridge_04",
    width: 32,
    height: 64,
    x: 128,
    y: 0,
  });
  const fridge5 = await Texture.create({
    type: "fridge_05",
    width: 32,
    height: 64,
    x: 160,
    y: 0,
  });
  const fridge6 = await Texture.create({
    type: "fridge_06",
    width: 32,
    height: 64,
    x: 192,
    y: 0,
  });
  const fridgeSprite = await Sprite.create({
    identifier: "fridge",
    src: "/drawable/object/animated/fridge2.png",
    textures: [fridge1, fridge2, fridge3, fridge4, fridge5, fridge6],
  });
  const fridgeAnimation = await Animation.create({
    identifier: "fridge",
    textures: [fridge1, fridge2, fridge3, fridge4, fridge5, fridge6],
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
    textures: [femaleIdleNorth, femaleIdleEast, femaleIdleSouth, femaleIdleWest],
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


  /**
   *
   * @type {Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? IfAny<U, {_id: Types.ObjectId}, Required<{_id: U}>> : {_id: Types.ObjectId}}
   */


  const initialTile = await BaseTile.create({
    type: "grass",
    x: 5,
    y: 5,
    texture: floor1,
  });

  const interactiveWorkshopObject = await InteractiveWorkshopObject.create({
    x: 10,
    y: 0,
    texture: deskTexture,
  });

  const workshopRoom = await WorkshopRoom.create({
    max_players: 2,
    width: 20,
    height: 20,
    music: "/assets/music/sustainability.mp3",
    base_texture: floor1,
    initial_position: initialTile,
    workshopObjects: [interactiveWorkshopObject],
  });

  const lobbyExit = await ExitObject.create({
    x: 2,
    y: 2,
    texture: floor1,
    next_room: workshopRoom,
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

  const animatedTile = await AnimatedTile.create({
    type: "fridge",
    x: 0,
    y: 4,
    animation: fridgeAnimation,
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
    chain: commandChain,
  });

  const lobbyRoom = await ContentRoom.create({
    width: 12,
    height: 40,
    base_texture: floor2,
    initial_position: initialTile,
    music: "/assets/music/lobby.mp3",
    tiles: [baseTile1, animatedTile],
    exits: [lobbyExit],
    objects: [interactiveObject3, commonCouchObject],
    npcs: [npc],
  });

  const virtualWorld = await VirtualWorld.create({
    tile_size: 32,
    initial_room: lobbyRoom,
  });
  const metaSpace = MetaSpace.create({
    world: virtualWorld._id,
  });
}
