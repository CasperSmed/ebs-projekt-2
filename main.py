@namespace
class SpriteKind:
    NPC = SpriteKind.create()
    Færdig = SpriteKind.create()
    NPC2 = SpriteKind.create()

def on_on_overlap(sprite2, otherSprite2):
    global spørgsmål
    spørgsmål = True
    game.show_long_text("Virker det stadig?", DialogLayout.BOTTOM)
    story.show_player_choices("Ja", "Nej")
    if story.check_last_answer("Nej"):
        info.change_life_by(-1)
    elif story.check_last_answer("Ja"):
        info.change_score_by(100)
        Wizard2.say_text("Gå videre")
        Wizard2.set_kind(SpriteKind.Færdig)
    else:
        pass
    spørgsmål = False
    pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC2, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global spørgsmål
    spørgsmål = True
    game.show_long_text("Virker det?", DialogLayout.BOTTOM)
    story.show_player_choices("Ja", "Nej")
    if story.check_last_answer("Nej"):
        info.change_life_by(-1)
    elif story.check_last_answer("Ja"):
        info.change_score_by(100)
        Wizard.say_text("Du kan nu gå videre")
        Wizard.set_kind(SpriteKind.Færdig)
    else:
        pass
    spørgsmål = False
    pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap2)

def on_life_zero():
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
    music.play(music.melody_playable(music.wawawawaa),
        music.PlaybackMode.UNTIL_DONE)
info.on_life_zero(on_life_zero)

def on_on_score():
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
info.on_score(200, on_on_score)

spørgsmål = False
Wizard2: Sprite = None
Wizard: Sprite = None
Spiller = sprites.create(img("""
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
    """),
    SpriteKind.player)
Wizard = sprites.create(img("""
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
    """),
    SpriteKind.NPC)
Wizard2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 . . . . . . . . . 
            . . . . . 3 3 3 . . . . . . . . 
            . . . . . 3 3 3 . . . . . . . . 
            . . . . . . 3 . . . . . . . . . 
            . . . . 3 3 3 3 3 . . . . . . . 
            . . . . . . 3 . . . . . . . . . 
            . . . . . 3 . 3 . . . . . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.NPC2)
scene.camera_follow_sprite(Spiller)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(Wizard2, sprites.swamp.swamp_tile13)
tiles.place_on_random_tile(Spiller, sprites.swamp.swamp_tile3)
info.set_score(0)
info.set_life(3)
spørgsmål = False

def on_forever():
    if spørgsmål == False:
        controller.move_sprite(Spiller)
    elif spørgsmål == True:
        controller.move_sprite(Spiller, 0, 0)
    else:
        pass
forever(on_forever)
