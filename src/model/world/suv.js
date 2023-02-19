import VirtualWorld from "../VirtualWorld.js";
import Texture from "../Texture.js";
import Tile from "../Tile.js";
import Sprite from "../Sprite.js";
import VirtualRoom from "../VirtualRoom.js";
import MetaSpace from "../MetaSpace.js";
import CommonObject from "../CommonObject.js";
import InteractiveObject from "../InteractiveObject.js";
import Content from "../Content.js";
import BaseTile from "../BaseTile.js";
import AnimatedTile from "../AnimatedTile.js";
import ContentCommand from "../ContentCommand.js";
import GotoCommand from "../GotoCommand.js";
import NPC from "../NPC.js";
import ExitObject from "../ExitObject.js";

export async function buildWorld() {
    const texture = await Texture.create({
        type: "test",
        width: 100,
        height: 100,
        x: 0,
        y: 0,
    });
    const commonObjectTexture = await Texture.create({
        type: "object",
        width: 100,
        height: 100,
        x: 1,
        y: 2
    })
    const sprite = await Sprite.create({
        src: "/atlas.png",
        textures: [texture],
    });
    const tile = await Tile.create({
        type: "grass",
        x: 0,
        y: 0,
    });
    const baseTile = await BaseTile.create({
        type: "grass",
        x: 3,
        y: 1,
        texture: texture
    })
    const animatedTile = await AnimatedTile.create({
        type: "grass",
        x: 1,
        y: 1,
        textures: [texture, commonObjectTexture]
    })
    const commonObject = await CommonObject.create({
        x: 10,
        y: 5,
        texture: commonObjectTexture
    })

    const exitRoom = await VirtualRoom.create({
        width: 10,
        height: 10,
        base_texture: texture,
        initial_position: tile,
    })
    const content = await Content.create({
        html: '<h1>Sandy</h1>'
    })
    const interactiveObject = await InteractiveObject.create({
        x: 40,
        y: 20,
        content: content,
        textures: [texture, commonObjectTexture]
    })

    const contentCommand = await ContentCommand.create({
        type: "content",
        content: content
    })
    const gotoCommand = await GotoCommand.create({
        type: "goto",
        x: 1,
        y: 1,
        with_user: false,
    })
    const npc = await NPC.create({
        name: 'Leon',
        x: 1,
        y: 1,
        textures: [texture, commonObjectTexture],
        chain: [contentCommand, gotoCommand]
    })
    const exitObject = await ExitObject.create({
        type: 'grass',
        x: 4,
        y: 1,
        texture: commonObjectTexture,
        next_room: exitRoom
    })

    const virtualRoom = await VirtualRoom.create({
        width: 10,
        height: 10,
        base_texture: texture,
        initial_position: tile,
        objects: [commonObject, interactiveObject],
        tiles: [baseTile, animatedTile],
        npcs: [npc],
        exits: [exitObject, exitObject]
    });
    const virtualWorld = await VirtualWorld.create({
        max_players: 10,
        tile_size: 16,
        initial_room: virtualRoom,
    });
    const metaSpace = MetaSpace.create({
        world: virtualWorld._id
    })
}
