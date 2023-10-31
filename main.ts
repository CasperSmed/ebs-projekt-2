namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    spørgsmål = true
    game.showLongText("Virker det?", DialogLayout.Bottom)
    story.showPlayerChoices("Ja", "Nej")
    if (story.checkLastAnswer("Nej")) {
        info.changeLifeBy(-1)
    } else if (story.checkLastAnswer("Ja")) {
        info.changeScoreBy(100)
    } else {
    	
    }
    spørgsmål = false
    pause(1000)
})
info.onScore(100, function () {
    game.setGameOverEffect(true, effects.confetti)
})
info.onLifeZero(function () {
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.setGameOverMessage(true, "GAME OVER!")
})
let spørgsmål = false
let Spiller = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Wizard = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
scene.cameraFollowSprite(Spiller)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Spiller, sprites.swamp.swampTile3)
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
