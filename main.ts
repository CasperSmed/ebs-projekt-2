namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Færdig = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite2, otherSprite2) {
    spørgsmål = true
    game.showLongText("Virker det stadig?", DialogLayout.Bottom)
    story.showPlayerChoices("Ja", "Nej")
    if (story.checkLastAnswer("Nej")) {
        info.changeLifeBy(-1)
        Wizard2.sayText("Wrong. But proceed")
        Wizard2.setKind(SpriteKind.Færdig)
    } else if (story.checkLastAnswer("Ja")) {
        info.changeScoreBy(100)
        Wizard2.sayText("Correct. Proceed")
        Wizard2.setKind(SpriteKind.Færdig)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    spørgsmål = true
    game.showLongText("Virker det?", DialogLayout.Bottom)
    story.showPlayerChoices("Ja", "Nej")
    if (story.checkLastAnswer("Nej")) {
        info.changeLifeBy(-1)
        Wizard.sayText("Wrong. But proceed.")
        Wizard.setKind(SpriteKind.Færdig)
    } else if (story.checkLastAnswer("Ja")) {
        info.changeScoreBy(100)
        Wizard.sayText("Correct. Proceed")
        Wizard.setKind(SpriteKind.Færdig)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    spørgsmål = true
    game.showLongText("Spørgsmål5", DialogLayout.Bottom)
    story.showPlayerChoices("svarmulighedKorrekt", "svarmulighedForkert")
    if (story.checkLastAnswer("svarmulighedForkert")) {
        info.changeLifeBy(-1)
        Wizard5.sayText("Wrong. But proceed")
        Wizard5.setKind(SpriteKind.Færdig)
    } else if (story.checkLastAnswer("svarmulighedKorrekt")) {
        info.changeScoreBy(100)
        Wizard5.sayText("Correct. Proceed")
        Wizard5.setKind(SpriteKind.Færdig)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    skiftLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    spørgsmål = true
    game.showLongText("Spørgsmål3", DialogLayout.Bottom)
    story.showPlayerChoices("svarmulighedKorrekt", "svarmulighedForkert")
    if (story.checkLastAnswer("svarmulighedForkert")) {
        info.changeLifeBy(-1)
        Wizard3.sayText("Wrong. But proceed.")
        Wizard3.setKind(SpriteKind.Færdig)
    } else if (story.checkLastAnswer("svarmulighedKorrekt")) {
        info.changeScoreBy(100)
        Wizard3.sayText("Correct. Proceed")
        Wizard3.setKind(SpriteKind.Færdig)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    spørgsmål = true
    game.showLongText("Spørgsmål4", DialogLayout.Bottom)
    story.showPlayerChoices("svarmulighedKorrekt", "svarmulighedForkert")
    if (story.checkLastAnswer("svarmulighedForkert")) {
        info.changeLifeBy(-1)
        Wizard4.sayText("Wrong. But proceed")
        Wizard4.setKind(SpriteKind.Færdig)
    } else if (story.checkLastAnswer("svarmulighedKorrekt")) {
        info.changeScoreBy(100)
        Wizard4.sayText("Correct. Proceed")
        Wizard4.setKind(SpriteKind.Færdig)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function skiftLevel () {
    tiles.setCurrentTilemap(tilemap`level3`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Færdig)
    tiles.placeOnRandomTile(Spiller, sprites.castle.tileDarkGrass2)
}
let spørgsmål = false
let Wizard5: Sprite = null
let Wizard4: Sprite = null
let Wizard3: Sprite = null
let Wizard2: Sprite = null
let Wizard: Sprite = null
let Spiller: Sprite = null
Spiller = sprites.create(img`
    ..............................
    .....22.......................
    ....2222......................
    ...224422.....................
    ...244442.....................
    ...244442.....................
    ...224442.....................
    ....24542.....................
    ....24542...55555.............
    ....2252....5dd55.............
    .....252....5dd55.............
    ......e.....d9d9d.............
    ......e.....ddddd.............
    ......e.....ddffd.............
    ......e.....ddddd.............
    ......ddd....777..............
    ......e.77777777..............
    ......dd77777777..............
    ......e......777..............
    .............777..............
    .............777..............
    .............888..............
    .............888..............
    .............888..............
    .............888..............
    .............888..............
    .............888..............
    .............881..............
    ...........1f1f1..............
    ..........111111..............
    `, SpriteKind.Player)
Wizard = sprites.create(assets.image`Wizard`, SpriteKind.NPC)
Wizard2 = sprites.create(assets.image`Wizard`, SpriteKind.NPC2)
Wizard3 = sprites.create(assets.image`Wizard`, SpriteKind.NPC3)
Wizard4 = sprites.create(assets.image`Wizard`, SpriteKind.NPC4)
Wizard5 = sprites.create(assets.image`Wizard`, SpriteKind.NPC5)
scene.cameraFollowSprite(Spiller)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Spiller, sprites.dungeon.stairLarge)
tiles.placeOnRandomTile(Wizard, sprites.dungeon.floorDark5)
tiles.placeOnRandomTile(Wizard2, sprites.dungeon.floorDarkDiamond)
tiles.placeOnRandomTile(Wizard3, sprites.dungeon.floorDark3)
tiles.placeOnRandomTile(Wizard4, sprites.dungeon.floorMixed)
tiles.placeOnRandomTile(Wizard5, sprites.dungeon.collectibleInsignia)
info.setScore(0)
info.setLife(3)
spørgsmål = false
forever(function () {
    if (spørgsmål == false) {
        controller.moveSprite(Spiller)
    } else if (spørgsmål == true) {
        controller.moveSprite(Spiller, 0, 0)
    } else {
    	
    }
})
