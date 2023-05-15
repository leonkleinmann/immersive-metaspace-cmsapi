import VirtualWorld from "../VirtualWorld.js";
import MetaSpace from "../MetaSpace.js";
import Texture from "../Texture.js";
import Sprite from "../Sprite.js";
import Animation from "../Animation.js";
import ContentRoom from "../ContentRoom.js";
import BaseTile from "../BaseTile.js";
import CommonObject from "../CommonObject.js";
import ExitObject from "../ExitObject.js";
import AnimatedTile from "../AnimatedTile.js";
import InteractiveObject from "../InteractiveObject.js";
import Content from "../Content.js";
import NPC from "../NPC.js";
import CommandChain from "../CommandChain.js";
import GotoCommand from "../GotoCommand.js";

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
async function buildMichelAssets() {
  /** IDLE **/
  const michelIdleEast = await Texture.create({
    type: "michel_idle_east",
    width: 32,
    height: 64,
    x: 0,
    y: 0,
  });
  const michelIdleNorth = await Texture.create({
    type: "michel_idle_north",
    width: 32,
    height: 64,
    x: 32,
    y: 0,
  });
  const michelIdleWest = await Texture.create({
    type: "michel_idle_west",
    width: 32,
    height: 64,
    x: 64,
    y: 0,
  });
  const michelIdleSouth = await Texture.create({
    type: "michel_idle_south",
    width: 32,
    height: 64,
    x: 96,
    y: 0,
  });

  const michelIdleSprite = await Sprite.create({
    identifier: "michel_idle",
    src: "drawable/avatar/michel/idle.png",
    textures: [michelIdleNorth, michelIdleEast, michelIdleSouth,michelIdleWest],
  });

  /** NORTH **/
  const michelWalkNorth1 = await Texture.create({
    type: "michel_walk_north_0",
    width: 32,
    height: 64,
    x: 6 * 32,
    y: 0,
  });
  const michelWalkNorth2 = await Texture.create({
    type: "michel_walk_north_1",
    width: 32,
    height: 64,
    x: 7 * 32,
    y: 0,
  });
  const michelWalkNorth3 = await Texture.create({
    type: "michel_walk_north_2",
    width: 32,
    height: 64,
    x: 8 * 32,
    y: 0,
  });
  const michelWalkNorth4 = await Texture.create({
    type: "michel_walk_north_3",
    width: 32,
    height: 64,
    x: 9 * 32,
    y: 0,
  });
  const michelWalkNorth5 = await Texture.create({
    type: "michel_walk_north_4",
    width: 32,
    height: 64,
    x: 10 * 32,
    y: 0,
  });
  const michelWalkNorth6 = await Texture.create({
    type: "michel_walk_north_5",
    width: 32,
    height: 64,
    x: 11 * 32,
    y: 0,
  });

  const michelWalkNorthAnimation = await Animation.create({
    identifier: "michel_walk_north",
    textures: [
      michelWalkNorth1,
      michelWalkNorth2,
      michelWalkNorth3,
      michelWalkNorth4,
      michelWalkNorth5,
      michelWalkNorth6,
    ],
  });

  /** EAST **/
  const michelWalkEast1 = await Texture.create({
    type: "michel_walk_east_0",
    width: 32,
    height: 64,
    x: 0 * 32,
    y: 0,
  });
  const michelWalkEast2 = await Texture.create({
    type: "michel_walk_east_1",
    width: 32,
    height: 64,
    x: 1 * 32,
    y: 0,
  });
  const michelWalkEast3 = await Texture.create({
    type: "michel_walk_east_2",
    width: 32,
    height: 64,
    x: 2 * 32,
    y: 0,
  });
  const michelWalkEast4 = await Texture.create({
    type: "michel_walk_east_3",
    width: 32,
    height: 64,
    x: 3 * 32,
    y: 0,
  });
  const michelWalkEast5 = await Texture.create({
    type: "michel_walk_east_4",
    width: 32,
    height: 64,
    x: 4 * 32,
    y: 0,
  });
  const michelWalkEast6 = await Texture.create({
    type: "michel_walk_east_5",
    width: 32,
    height: 64,
    x: 5 * 32,
    y: 0,
  });
  const michelWalkEastAnimation = await Animation.create({
    identifier: "michel_walk_east",
    textures: [
      michelWalkEast1,
      michelWalkEast2,
      michelWalkEast3,
      michelWalkEast4,
      michelWalkEast5,
      michelWalkEast6,
    ],
  });

  /** SOUTH **/
  const michelWalkSouth1 = await Texture.create({
    type: "michel_walk_south_0",
    width: 32,
    height: 64,
    x: 18 * 32,
    y: 0,
  });
  const michelWalkSouth2 = await Texture.create({
    type: "michel_walk_south_1",
    width: 32,
    height: 64,
    x: 19 * 32,
    y: 0,
  });
  const michelWalkSouth3 = await Texture.create({
    type: "michel_walk_south_2",
    width: 32,
    height: 64,
    x: 20 * 32,
    y: 0,
  });
  const michelWalkSouth4 = await Texture.create({
    type: "michel_walk_south_3",
    width: 32,
    height: 64,
    x: 21 * 32,
    y: 0,
  });
  const michelWalkSouth5 = await Texture.create({
    type: "michel_walk_south_4",
    width: 32,
    height: 64,
    x: 22 * 32,
    y: 0,
  });
  const michelWalkSouth6 = await Texture.create({
    type: "michel_walk_south_5",
    width: 32,
    height: 64,
    x: 23 * 32,
    y: 0,
  });
  const michelWalkSouthAnimation = await Animation.create({
    identifier: "michel_walk_south",
    textures: [
      michelWalkSouth1,
      michelWalkSouth2,
      michelWalkSouth3,
      michelWalkSouth4,
      michelWalkSouth5,
      michelWalkSouth6,
    ],
  });

  /** WEST **/
  const michelWalkWest1 = await Texture.create({
    type: "michel_walk_west_0",
    width: 32,
    height: 64,
    x: 12 * 32,
    y: 0,
  });
  const michelWalkWest2 = await Texture.create({
    type: "michel_walk_west_1",
    width: 32,
    height: 64,
    x: 13 * 32,
    y: 0,
  });
  const michelWalkWest3 = await Texture.create({
    type: "michel_walk_west_2",
    width: 32,
    height: 64,
    x: 14 * 32,
    y: 0,
  });
  const michelWalkWest4 = await Texture.create({
    type: "michel_walk_west_3",
    width: 32,
    height: 64,
    x: 15 * 32,
    y: 0,
  });
  const michelWalkWest5 = await Texture.create({
    type: "michel_walk_west_4",
    width: 32,
    height: 64,
    x: 16 * 32,
    y: 0,
  });
  const michelWalkWest6 = await Texture.create({
    type: "michel_walk_west_6",
    width: 32,
    height: 64,
    x: 17 * 32,
    y: 0,
  });
  const michelWalkWestAnimation = await Animation.create({
    identifier: "michel_walk_west",
    textures: [
      michelWalkWest1,
      michelWalkWest2,
      michelWalkWest3,
      michelWalkWest4,
      michelWalkWest5,
      michelWalkWest6,
    ],
  });

  const michelWalkSprite = await Sprite.create({
    identifier: "michel_walk",
    src: "drawable/avatar/michel/walk.png",
    textures: [
      michelWalkNorth1,
      michelWalkNorth2,
      michelWalkNorth3,
      michelWalkNorth4,
      michelWalkNorth5,
      michelWalkNorth6,
      michelWalkEast1,
      michelWalkEast2,
      michelWalkEast3,
      michelWalkEast4,
      michelWalkEast5,
      michelWalkEast6,
      michelWalkSouth1,
      michelWalkSouth2,
      michelWalkSouth3,
      michelWalkSouth4,
      michelWalkSouth5,
      michelWalkSouth6,
      michelWalkWest1,
      michelWalkWest2,
      michelWalkWest3,
      michelWalkWest4,
      michelWalkWest5,
      michelWalkWest6,
    ],
  });
}
async function buildLobbyCommandChain() {
  const gotoCommand = await GotoCommand.create({
    type: "goto",
    x: 6,
    y: 20,
    with_user: false,
  });

  const commandChain = await CommandChain.create({
    commands: [gotoCommand, gotoCommand],
  });

  return commandChain
}
async function buildNPCMichel(commandChain) {
  return await NPC.create({
    name: "Michel",
    x: 1,
    y: 20,
    animation_identifier: "michel",
    chain: commandChain,
  });
}
async function buildPeterAssets() {}



async function buildTextures() {
  let textures = {};

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
    width: 96,
    height: 32,
    x: 64,
    y: 0,
  });
  const black_arrow = await Texture.create({
    type: "black_arrow",
    width: 32,
    height: 32,
    x: 160,
    y: 0,
  });
  const building = await Texture.create({
    type: "building",
    width: 912,
    height: 448,
    x: 0,
    y: 0,
  });
  const tree = await Texture.create({
    type: "tree",
    width: 160,
    height: 192,
    x: 0,
    y: 496,
  });
  const tree2 = await Texture.create({
    type: "tree2",
    width: 192,
    height: 160,
    x: 160,
    y: 496,
  });
  const stair = await Texture.create({
    type: "stair",
    width: 32,
    height: 32,
    x: 0,
    y: 448,
  });
  const house = await Texture.create({
    type: "house",
    width: 128,
    height: 128,
    x: 0,
    y: 688,
  });
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

  textures["stone"] = stone;
  textures["grass"] = grass;
  textures["wood"] = wood;
  textures["black_arrow"] = black_arrow;
  textures["building"] = building;
  textures["tree"] = tree;
  textures["tree2"] = tree2;
  textures["stair"] = stair;
  textures["house"] = house;
  textures["action_1"] = actionButtonTexture1;
  textures["action_2"] = actionButtonTexture2;
  return textures;
}
async function buildAnimations(textures) {
  let animations = {};

  const blackArrowAnimation = await Animation.create({
    identifier: "black_arrow_animation",
    textures: [
      textures["stone"],
      textures["stone"],
      textures["stone"],
      textures["stone"],
      textures["black_arrow"],
      textures["black_arrow"],
      textures["black_arrow"],
      textures["black_arrow"],
      textures["black_arrow"],
    ],
  });
  const actionAnimation = await Animation.create({
    identifier: "action",
    textures: [textures["action_1"], textures["action_2"]],
  });

  animations["blackArrowAnimation"] = blackArrowAnimation;
  return animations;
}
async function buildSprites(textures) {
  await Sprite.create({
    identifier: "floors",
    src: "/drawable/tiles/base/floors.png",
    textures: [
      textures["stone"],
      textures["grass"],
      textures["wood"],
      textures["black_arrow"],
    ],
  });

  await Sprite.create({
    identifier: "lobby_objects",
    src: "/drawable/object/base/lobbyObjects.png",
    textures: [
      textures["building"],
      textures["tree"],
      textures["tree2"],
      textures["stair"],
      textures["house"],
    ],
  });

  await Sprite.create({
    identifier: "action",
    src: "drawable/ui/animated/action.png",
    textures: [textures["action_1"], textures["action_2"]],
  });
}
async function buildTiles(textures) {
  let tiles = {};
  tiles["initial_lobby"] = await BaseTile.create({
    type: "grass",
    x: 17,
    y: 22,
    texture: textures["grass"],
  });
  tiles["steg_1"] = await BaseTile.create({
    type: "wood",
    x: 17,
    y: 19,
    texture: textures["wood"],
  });
  tiles["steg_2"] = await BaseTile.create({
    type: "wood",
    x: 17,
    y: 20,
    texture: textures["wood"],
  });
  tiles["steg_3"] = await BaseTile.create({
    type: "wood",
    x: 17,
    y: 21,
    texture: textures["wood"],
  });
  tiles["steg_4"] = await BaseTile.create({
    type: "wood",
    x: 17,
    y: 22,
    texture: textures["wood"],
  });

  return tiles;
}
async function buildAnimatedTiles(animations) {
  let animatedTiles = {};

  const animatedTile1 = await AnimatedTile.create({
    type: "lobby_wegweiser",
    x: 17,
    y: 15,
    animation: animations["blackArrowAnimation"],
  });
  const animatedTile2 = await AnimatedTile.create({
    type: "lobby_wegweiser",
    x: 18,
    y: 15,
    animation: animations["blackArrowAnimation"],
  });
  const animatedTile3 = await AnimatedTile.create({
    type: "lobby_wegweiser",
    x: 19,
    y: 15,
    animation: animations["blackArrowAnimation"],
  });

  animatedTiles["black_arrow1"] = animatedTile1;
  animatedTiles["black_arrow2"] = animatedTile2;
  animatedTiles["black_arrow3"] = animatedTile3;
  return animatedTiles;
}
async function buildCommonObjects(textures) {
  let commonObjects = {};

  const buildingObject = await CommonObject.create({
    x: 4,
    y: 0,
    texture: textures["building"],
  });

  const treeObject = await CommonObject.create({
    x: 26,
    y: 17,
    texture: textures["tree"],
  });
  const tree2Object = await CommonObject.create({
    x: 24,
    y: 34,
    texture: textures["tree2"],
  });
  const houseObject = await CommonObject.create({
    x: 6,
    y: 34,
    texture: textures["house"],
  });

  commonObjects["buildingObject"] = buildingObject;
  commonObjects["treeObject"] = treeObject;
  commonObjects["tree2Object"] = tree2Object;
  commonObjects["houseObject"] = houseObject;
  return commonObjects;
}
async function buildInteractiveObjects(animations, contents) {
  let interactiveObjects = {};

  const testContent = await Content.create({
    html: '<head><script type="text/javascript">alert("test");</script></head><h1 style="color: red;">Test-Content</h1><button id="test">Hallo Huehnchends</button>',
  });
  const testObject = await InteractiveObject.create({
    x: 0,
    y: 12,
    animation: animations["blackArrowAnimation"],
    content: testContent,
  });

  interactiveObjects["test"] = testObject;
  return interactiveObjects;
}
async function buildFrame(tile_type, tile_object) {
  let frameTiles = [];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 40; y++) {
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
    for (let y = 0; y < 20; y++) {
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
    for (let y = 0; y < 45; y++) {
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
    for (let y = 40; y < 45; y++) {
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
  let animations = await buildAnimations(textures);
  await buildSprites(textures);
  let frameTiles = await buildFrame("stone", textures["stone"]);
  let tiles = await buildTiles(textures);
  let animatedTiles = await buildAnimatedTiles(animations);
  let commonObjects = await buildCommonObjects(textures);
  let interactiveObjects = await buildInteractiveObjects(animations);
  await buildMichelAssets()

  /** NPCS **/
  let michel = await buildNPCMichel(await buildLobbyCommandChain())

  /** LOBBY **/
  const lobbyExit1 = await ExitObject.create({
    x: 16,
    y: 14,
    texture: textures["stair"],
    next_room: undefined,
  });
  const lobbyExit2 = await ExitObject.create({
    x: 17,
    y: 14,
    texture: textures["stair"],
    next_room: undefined,
  });
  const lobbyExit3 = await ExitObject.create({
    x: 18,
    y: 14,
    texture: textures["stair"],
    next_room: undefined,
  });
  const lobbyExit4 = await ExitObject.create({
    x: 19,
    y: 14,
    texture: textures["stair"],
    next_room: undefined,
  });
  const lobbyExit5 = await ExitObject.create({
    x: 20,
    y: 14,
    texture: textures["stair"],
    next_room: undefined,
  });

  frameTiles.push(tiles["steg_1"]);
  frameTiles.push(tiles["steg_2"]);
  frameTiles.push(tiles["steg_3"]);
  frameTiles.push(tiles["steg_4"]);
  frameTiles.push(animatedTiles["black_arrow1"]);
  frameTiles.push(animatedTiles["black_arrow2"]);
  frameTiles.push(animatedTiles["black_arrow3"]);
  const lobbyRoom = await ContentRoom.create({
    width: 35,
    height: 45,
    base_texture: textures["grass"],
    initial_position: tiles["initial_lobby"],
    music: "/assets/music/lobby.mp3",
    tiles: frameTiles,
    exits: [lobbyExit1, lobbyExit2, lobbyExit3, lobbyExit4, lobbyExit5],
    objects: [
      commonObjects["buildingObject"],
      commonObjects["treeObject"],
      commonObjects["tree2Object"],
      commonObjects["houseObject"],
      interactiveObjects["test"],
    ],
    npcs: [michel],
  });

  /** CR1 **/

  const virtualWorld = await VirtualWorld.create({
    tile_size: 32,
    initial_room: lobbyRoom,
  });
  const metaSpace = MetaSpace.create({
    world: virtualWorld._id,
  });
}
