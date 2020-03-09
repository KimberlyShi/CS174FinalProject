import {tiny, defs} from './scenes/common.js';
import {Shape_From_File} from './scenes/obj-file-demo.js';
// Pull these names into this module's scope for convenience:
const {
    Vector, Vector3, vec, vec3, vec4, color, Matrix, Mat4, Light, Shape, Material, Shader, Texture, Scene,
    Canvas_Widget, Code_Widget, Text_Widget
} = tiny;

// Now we have loaded everything in the files tiny-graphics.js, tiny-graphics-widgets.js, and common.js.
// This yielded "tiny", an object wrapping the stuff in the first two files, and "defs" for wrapping all the rest.

// ******************** Extra step only for when executing on a local machine:
//                      Load any more files in your directory and copy them into "defs."
//                      (On the web, a server should instead just pack all these as well
//                      as common.js into one file for you, such as "dependencies.js")

var sounds = [
    "assets/sound/circles.mp3",
    "assets/sound/heyjude.mp3",
    "assets/sound/iwillsurvive.mp3",
    "assets/sound/mygirl.mp3",
    "assets/sound/neverbeentospain.mp3",
    "assets/sound/partyintheusa.mp3",
    "assets/sound/spanishflea.mp3",
    "assets/sound/sundaybest.mp3"
];

var audio = document.createElement('audio');

var music_play = 0;
window.music_play = music_play;
var ketchup_move = 0;
window.ketchup_move = ketchup_move;
var change_coke = 0;
window.change_coke = change_coke;
var music_index = -1;
window.music_index = music_index;
var mustard_spill = 0;
window.mustard_spill = mustard_spill;
var mustard_spill_timer = 0
var diamond_click = 0;
window.diamond_click = 0;
var napkin_click = 0;
window.napkin_click = napkin_click;
var door_click = 0;
window.door_click = 0;
var note_click = 0;
window.note_click = note_click;
var start_click = 0;
window.start_click = start_click;
var rules_click = 0;
window.rules_click = rules_click;
var menu_click = 0;
window.menu_click = menu_click;
var stool_click = 0;
window.stool_click = stool_click;
var chairpaper_click = 0;
window.chairpaper_click = chairpaper_click;
var takeASeat_click = 0;
window.takeASeat_click = takeASeat_click;
window.ball_click = 0;
var menuTimer = 0;
var stoolTimer = 0;
var cokeTimer = 0;
var ketchupTimer = 0;

var bottle1_click = 0;
window.bottle1_click = bottle1_click;
var bottle2_click = 0;
window.bottle2_click = bottle2_click;
var bottle3_click = 0;
window.bottle3_click = bottle3_click;
var bottle4_click = 0;
window.bottle4_click = bottle4_click;
var bottle5_click = 0;
window.bottle5_click = bottle5_click;


//NUMS: 200, 212, 221, 241, 245,246, 249, 250, 251, 252, 254, 255,
const jukebox_color =       color(127 / 255, 124 / 255, 127 / 255, 250 / 255); // change alpha from 255 to 250 for pick color
const ketchup_color =       color(255 / 255, 0 / 255, 0 / 255, 251 / 255);
const mustard_color =       color(255 / 255, 255 / 255, 0 / 255, 255 / 255);
const coke_color =          color(2 / 255, 2 / 255, 2 / 255, 252 / 255);
const cup_color =           color(190 / 255, 223 / 255, 221 / 255);
// const diamond_color = color(10/255,80/255, 70/255, 200/255);
const napkin_color = color(20/255, 40/255, 60/255, 248/255);
const diamond_color = color(227/255, 255/255, 254/255, 201/255);
const door_color = color(1/255, 1/255, 1/255, 253/255);
const note_color = color(2/255, 2/255, 2/255, 249/255);
const start_color = color(2/255, 3/255, 2/255, 245/255);
const rules_color = color(3/255, 4/255, 3/255, 246/255);
const collison_bottle_color = color(3/255, 4/255, 5/255, 232/255);
const other_bottle_color = color(3/255, 4/255, 5/255, 255/255);
const menu_color = color(4/255, 3/255, 2/255, 241/255);
const stool_color = color(126/255, 125/255, 126/255, 247/255);
const chairpaper_color = color(0/255, 0/255, 0/255, 244/255);
const menu_color_special = color(3/255, 3/255, 2/255, 237/255);
const other_ketchup_color = color(255 / 255, 0 / 255, 0 / 255, 255 / 255);
const takeASeat_color = color(4/255, 7/255, 2/255, 254/255);
const ball_color = color(255 / 255, 50 / 255, 0/ 255, 232/255);

//201, 221, 232, 237, 241, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 154, 255, 255, 255 (three)
//the other ball 232 is plus 5 range so can't do 226, 227, 229, 230, 231, 232, 233, 234, 235, 236, 237
// const bottle1_color = color(37/255, 130/255, 27/255, 222/255);
// const bottle2_color = color(30/255, 105/255, 19/255, 224/255);
// const bottle3_color = color(35/255, 115/255, 22/255, 226/255);
// const bottle4_color = color(32/255, 125/255, 24/255, 228/255);
// const bottle5_color = color(34/255, 118/255, 26/255, 243/255);
const bottle1_color = color(37/255, 130/255, 27/255, 242/255);
const bottle2_color = color(30/255, 105/255, 19/255, 239/255);
const bottle3_color = color(37/255, 115/255, 22/255, 243/255);
const bottle4_color = color(32/255, 125/255, 24/255, 225/255);
const bottle5_color = color(34/255, 118/255, 29/255, 223/255);

window.jukebox_color = jukebox_color;
window.ketchup_color = ketchup_color;
window.mustard_color = mustard_color;
window.coke_color = coke_color;
window.cup_color = cup_color;
window.diamond_color = diamond_color;
window.napkin_color = napkin_color;
window.door_color = door_color;
window.note_color = note_color;
window.start_color = start_color;
window.rules_color = rules_color;
window.collison_bottle_color = collison_bottle_color;
window.other_bottle_color = other_bottle_color;
window.menu_color = menu_color;
window.menu_color_special = menu_color_special;
window.stool_color = stool_color;
window.chairpaper_color = chairpaper_color;
window.takeASeat_color = takeASeat_color;
window.ball_color = ball_color;
window.bottle_break = 0;

window.bottle1_color = bottle1_color;
window.bottle2_color = bottle2_color;
window.bottle3_color = bottle3_color;
window.bottle4_color = bottle4_color;
window.bottle5_color = bottle5_color;


var collision_occured = false;
var mustard_angle = 0;
var mustard_mov = 0;
var kup_mov = 0;
var stool_move = 0
var ball_t = 1.0


const Minimal_Webgl_Demo = defs.Minimal_Webgl_Demo;

// ******************** End extra step

// (Can define Main_Scene's class here)

const Additional_Scenes = [];
export {Main_Scene, Additional_Scenes, Canvas_Widget, Code_Widget, Text_Widget, defs, music_play}

class Main_Scene extends Scene {                           // **Obj_File_Demo** show how to load a single 3D model from an OBJ file.
                                                           // Detailed model files can be used in place of simpler primitive-based
                                                           // shapes to add complexity to a scene.  Simpler primitives in your scene
                                                           // can just be thought of as placeholders until you find a model file
                                                           // that fits well.  This demo shows the jukebox model twice, with one
                                                           // jukebox showing off the Fake_Bump_Map effect while the other has a
                                                           // regular texture and Phong lighting.
    constructor() {
        super();


        //CLUE Variables
        this.clue1 = 0;
        this.clue2 = 0;
        this.clue3 = 0;
        this.clue4 = 0;
        this.clue5 = 0;
        this.clue6 = 0;
        this.clue7 = 0;
        this.clue8 = 0;
        this.vc = [0,1,0]



        this.fading = 0;
        this.startFade = 255 / 255;
        this.instructFade = 0;
        // Load the model file:
        this.shapes = {
            bar: new Shape_From_File("assets/bar_withoutdrinks.obj"),
            beginScreen: new defs.Square(),
            booth: new Shape_From_File("assets/booth2.obj"),
            boothTable: new Shape_From_File("assets/squareTable2.obj"),
            // other_bottle: new Shape_From_File("assets/bottle.obj"),
            //random bottle shards
            bottle1: new Shape_From_File("assets/bottle.obj"),
            bottle2: new Shape_From_File("assets/bottle.obj"),
            bottle3: new Shape_From_File("assets/bottle.obj"),
            bottle4: new Shape_From_File("assets/bottle.obj"),
            bottle5: new Shape_From_File("assets/bottle.obj"),


            collision_bottle: new Shape_From_File("assets/bottle.obj"),
            bulb: new Shape_From_File("assets/bulb.obj"),
            carDeco: new defs.Square(),
            coke: new defs.Square(),
            cokeClue: new defs.Square(),
            afterDark: new defs.Square(),
            diamond: new Shape_From_File("assets/diamond.obj"),
            endScene: new defs.Square(),
            fadeToBlack: new defs.Square(),
            instructions: new defs.Square(),
            takeASeat: new defs.Square(),
            jukebox: new Shape_From_File("assets/jukebox2.obj"),
            ketchup: new Shape_From_File("assets/kb.obj"),
            light: new Shape_From_File("assets/light.obj"),
            menu: new Shape_From_File("assets/menu.obj"),
            mustard: new Shape_From_File("assets/kb.obj"),
            mustardSpill: new defs.Square(),
            napkin: new Shape_From_File("assets/napkin.obj"),
            note: new defs.Square(),
            openSign: new Shape_From_File("assets/door.obj"),
            plane: new defs.Square(),
            planeFloor: new defs.Square(), //used floor
            shards: new Shape_From_File("assets/shards.obj"),

            //random shards
            shards2: new Shape_From_File("assets/shards2.obj"),
            shards3: new Shape_From_File("assets/shards3.obj"),
            shards4: new Shape_From_File("assets/shards4.obj"),
            shards5: new Shape_From_File("assets/shards5.obj"),


            smoothie: new Shape_From_File("assets/drink.obj"),
            stool: new Shape_From_File("assets/stool.obj"),
            stoolclue: new Shape_From_File("assets/stoolclue.obj"),
            tallCup: new Shape_From_File("assets/kcup.obj"),
            talltable: new Shape_From_File("assets/talltable.obj"),
            window: new Shape_From_File("assets/window.obj"),
            chairpaper: new defs.Square(),
            cat: new Shape_From_File("assets/cat.obj"),
            shelf: new Shape_From_File("assets/shelf.obj"),
            circleposter: new Shape_From_File("assets/circleposter.obj"),
            poster: new Shape_From_File("assets/poster.obj"),
            otherKetchup: new Shape_From_File("assets/kb.obj"),
            smallBottle: new Shape_From_File("assets/smallBottle.obj"),
            ball: new Shape_From_File("assets/ball.obj"),
            plate: new Shape_From_File("assets/plate.obj"),
        };

        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = 10
        this.camera_angle = Math.PI / 2
        this.cameraReset = -1
        // Don't create any DOM elements to control this scene:
        //this.widget_options = { make_controls: false };
        this.materials =
            {
                jukebox: new Material(new defs.Textured_Phong(1), {
                    color: jukebox_color, ambient: 0.5, specularity: 0,
                    texture: new Texture("assets/jukebox_map.png")
                }),
                floor: new Material(new defs.Phong_Shader(), {
                    ambient: 1, diffusivity: 1, specularity: 0.5,
                    color: color(0.78, 0.8, 0.6, 1)
                }),
                floorTile: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: color(1 / 255, 1 / 255, 1 / 255, 255 / 255),
                    texture: new Texture("assets/moreChecker_1.png")
                }),
                floorBumpMap: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.6, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/floorBumpMap.png")
                }),
                mustard: new Material(new defs.Textured_Phong(1), {
                    color: mustard_color,
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture("assets/pink.png")
                }),
                ketchup: new Material(new defs.Textured_Phong(1), {
                    color: ketchup_color,
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture("assets/pink.png")
                }),
                bar: new Material(new defs.Textured_Phong(1), {
                    color: color(0, 0, 0, 1), ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/bar_map.png")
                }),
                backWall: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92,
                    diffusivity: 1,
                    specularity: .5,
                    color: color(0, 0, 0.1, 1)
                }),
                leftWall: new Material(new defs.Textured_Phong(1), {
                    ambient: 1,
                    diffusivity: 1,
                    specularity: .5,
                    color: color(0, 0, 0.1, 1)
                }),
                rightWall: new Material(new defs.Textured_Phong(1), {
                    ambient: 1,
                    diffusivity: 1,
                    specularity: .5,
                    color: color(0, 0, 0.1, 1)
                }),
                ceiling: new Material(new defs.Textured_Phong(1), {ambient: .9, color: color(0, 0, 0.2, 1)}),
                frontWall: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92,
                    diffusivity: 1,
                    specularity: .5,
                    color: color(0, 0, 0.1, 1)
                }),
                menuFront: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.1, specularity: 0.5, color: menu_color,
                    texture: new Texture("assets/menufront2.png")
                }),
                menuFrontSpecial: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.1, specularity: 0.5, color: menu_color_special,
                    texture: new Texture("assets/menufront2.png")
                }),
                menuBack: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.1, specularity: 0.5, color: menu_color,
                    texture: new Texture("assets/menuback2.png")
                }),
                menuBackEmpty: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.1, specularity: 0.5, color: menu_color,
                    texture: new Texture("assets/menuback_empty.png")
                }),
                stool: new Material(new defs.Textured_Phong(1), {
                    color: jukebox_color, ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/stool_map.png")
                }),
                booth: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.6, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/booth2_map.png")
                }),
                coke: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/coke_3.png")
                }),
                afterDark: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: color(0,0,0,1),
                    texture: new Texture("assets/afterDark_3.png")
                }),
                openSign: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: door_color,
                    texture: new Texture("assets/door_map.png")
                }),
                smoothie: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/drink1_map.png")
                }),
                smoothie2: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/drink2_map.png")
                }),
                cokeClue: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/cokeClue_3.png")
                }),
                talltable: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/talltable_map.png")
                }),
                tallCup: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.5, diffusivity: 1, specularity: 0.5, color: cup_color,
                    texture: new Texture("assets/pink.png")
                }),
                boothTable: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 0.6, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/rectTableColored.png")
                }),
                mustardSpill: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/mustardspill_2.png")
                }),
                light: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 0, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/light_map.png")
                }),
                bulb: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/bulb_map.png")
                }),
                diamond: new Material(new defs.Phong_Shader(), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: diamond_color,
                    texture: new Texture("assets/diamond_map.png")
                }),

                note: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 0.6, color: note_color,
                    texture: new Texture("assets/note.png")
                }),
                endScene: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: door_color,
                    texture: new Texture("assets/finish_rect_notext.png")
                }),
                napkin: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 0, color: napkin_color,
                    texture: new Texture("assets/napkin_map.png")
                }),
                fadeToBlack: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92, diffusivity: 1, specularity: .5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/black_1.png")
                }),
                beginScreen: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92, diffusivity: 1, specularity: .5, color: start_color,
                    texture: new Texture("assets/beginsceen_rect_nobutton.png")
                }),
                instructions: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92, diffusivity: 1, specularity: .5, color: rules_color,
                    texture: new Texture("assets/rules_rect_nobutton.png")
                }),
                takeASeat: new Material(new defs.Textured_Phong(1), {
                    ambient: 0.92, diffusivity: 1, specularity: .5, color: takeASeat_color,
                    texture: new Texture("assets/hint1_rect.png")
                }),

                shards: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: rules_color,
                    texture: new Texture("assets/shards_map.png")
                }),

                // shards2: new Material(new defs.Textured_Phong(1), {
                //     ambient: 1, diffusivity: 1, specularity: 1, color: rules_color,
                //     texture: new Texture("assets/shards_map.png")
                // }),
                // shards3: new Material(new defs.Textured_Phong(1), {
                //     ambient: 1, diffusivity: 1, specularity: 1, color: rules_color,
                //     texture: new Texture("assets/shards_map.png")
                // }),
                // shards4: new Material(new defs.Textured_Phong(1), {
                //     ambient: 1, diffusivity: 1, specularity: 1, color: rules_color,
                //     texture: new Texture("assets/shards_map.png")
                // }),
                // shards5: new Material(new defs.Textured_Phong(1), {
                //     ambient: 1, diffusivity: 1, specularity: 1, color: rules_color,
                //     texture: new Texture("assets/shards_map.png")
                // }),


                collison_bottle: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: collison_bottle_color,
                    texture: new Texture("assets/shards_map.png")
                }),
                // other_bottle: new Material(new defs.Textured_Phong(1), {
                //     ambient: 1, diffusivity: 1, specularity: 1, color: other_bottle_color,
                //     texture: new Texture("assets/shards_map.png")
                // }),

                bottle1: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: bottle1_color,
                    texture: new Texture("assets/shards_map.png")
                }),
                bottle2: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: bottle2_color,
                    texture: new Texture("assets/shards_map.png")
                }),
                bottle3: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: bottle3_color,
                    texture: new Texture("assets/shards_map.png")
                }),
                bottle4: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: bottle4_color,
                    texture: new Texture("assets/shards_map.png")
                }),
                bottle5: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1, color: bottle5_color,
                    texture: new Texture("assets/shards_map.png")
                }),


                stoolclue: new Material(new defs.Textured_Phong(1), {
                    color: stool_color, ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/stool_map.png")
                }),

                window: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map.png")
                }),
                window1: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map_1.png")
                }),
                window2: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map_2.png")
                }),
                window3: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map_3.png")
                }),
                window4: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map_4.png")
                }),
                window5: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/window_map_5.png")
                }),
                cat: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/door_map.png")
                }),
                chairpaper: new Material( new defs.Textured_Phong( 1 ), {
                    color: chairpaper_color, ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/stoolClue.png" )
                }),
                shelf: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/shelf_map.png" )
                }),
                coffeePoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/coffee_poster.png" )
                }),
                mimosaPoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 0.2,
                    texture: new Texture( "assets/mimosa_poster.png" )
                }),  
                burgerPoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/burger_poster.png" )
                }),  
                milkshakePoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/milkshape_poster.png" )
                }),  
                beachPoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/beach_poster.png" )
                }),  
                ingredientsPoster: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/ingredients_poster.png" )
                }),  
                otherKetchup: new Material(new defs.Textured_Phong(1), {
                    color: other_ketchup_color, ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/pink.png")
                }),
                bottleStrawberry: new Material( new defs.Textured_Phong( 1 ), {
                    ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture( "assets/BottleColor.png" ),
                }),
                ball: new Material(new defs.Textured_Phong(1), {
				    ambient: 1, diffusivity: 1.0, specularity: 1.0, color: ball_color,
                    //texture: new Texture("assets/ball_map.png")
                }),
                plate: new Material(new defs.Textured_Phong(1), {
                    ambient: 1, diffusivity: 1.0, specularity: 1.0,
                    texture: new Texture("assets/plateColored.png"),
                }),
            };
        this.transformJukebox =  Mat4.translation(-50, 42, -170).times(Mat4.rotation(-Math.PI / 2, 0, 1, 0));
        this.transformJukebox = this.transformJukebox.times(Mat4.scale(25, 25, 25));
        this.transformCoffee = Mat4.identity();
        this.transformCoffee = this.transformCoffee.times(Mat4.translation(100, 90, 280));
        this.transformCoffee = this.transformCoffee.times(Mat4.scale(23, 23, 23));
        this.transformCoffee = this.transformCoffee.times(Mat4.rotation(Math.PI, 0, 1, 0));
        this.transformMimosa = Mat4.identity();
        this.transformMimosa = this.transformMimosa.times(Mat4.translation(-150, 35, 0));
        this.transformMimosa = this.transformMimosa.times(this.transformCoffee);
        this.transformCat = Mat4.identity();
        this.transformCat = this.transformCat.times(Mat4.translation(0, 131, 283));
        this.transformCat = this.transformCat.times(Mat4.scale(6, 6, 6));
        this.transformCat = this.transformCat.times(Mat4.rotation(7 * Math.PI/6, 0, 1, 0));
        this.barTransform = Mat4.identity();
        this.barTransform = this.barTransform.times(Mat4.translation(40, 27, 200))
        this.barTransform = this.barTransform.times(Mat4.rotation(-Math.PI / 2, 0, 1, 0))
        this.barTransform = this.barTransform.times(Mat4.scale(40, 40, 45));
        this.transformFloor = Mat4.identity();
        this.transformFloor = this.transformFloor.times(Mat4.rotation(Math.PI / 2, 1, 0, 0));
        this.transformFloor = this.transformFloor.times(Mat4.scale(200, 300, 0));
        this.transformBackWall = Mat4.identity();
        this.transformBackWall = this.transformBackWall.times(Mat4.translation(0, 80, -200));
        this.transformBackWall = this.transformBackWall.times(Mat4.scale(200, 80, 0));
        this.transformLeftWall = Mat4.identity();
        this.transformLeftWall = this.transformLeftWall.times(Mat4.translation(-200, 80, 0));
        this.transformLeftWall = this.transformLeftWall.times(Mat4.rotation(Math.PI / 2, 0, 1, 0));
        this.transformLeftWall = this.transformLeftWall.times(Mat4.scale(300, 80, 0));
        this.transformRightWall = Mat4.identity();
        this.transformRightWall = this.transformRightWall.times(Mat4.translation(200, 80, 0));
        this.transformRightWall = this.transformRightWall.times(Mat4.rotation(Math.PI / 2, 0, 1, 0));
        this.transformRightWall = this.transformRightWall.times(Mat4.scale(300, 80, 0));
        this.transformCeiling = Mat4.identity();
        this.transformCeiling = this.transformCeiling.times(Mat4.translation(0, 160, 0));
        this.transformCeiling = this.transformCeiling.times(Mat4.rotation(Math.PI / 2, 1, 0, 0));
        this.transformCeiling = this.transformCeiling.times(Mat4.scale(200, 300, 0));
        this.transformFrontWall = Mat4.identity();
        this.transformFrontWall = this.transformFrontWall.times(Mat4.translation(0, 80, 300));
        this.transformFrontWall = this.transformFrontWall.times(Mat4.scale(200, 80, 0));
        this.transformChecks = Mat4.identity();
        this.transformChecks = this.transformChecks.times(Mat4.translation(0, 1, 0));
        this.transformChecks = this.transformChecks.times(Mat4.rotation(Math.PI / 2, 1, 0, 0));
        this.transformChecks = this.transformChecks.times(Mat4.scale(200, 300, 0));
        this.transformDoor = Mat4.identity();
        this.transformDoor = this.transformDoor.times(Mat4.translation(140, 60, -199));
        this.transformDoor = this.transformDoor.times(Mat4.rotation(Math.PI / 2, 0, 1, 0));
        this.transformDoor = this.transformDoor.times(Mat4.scale(30, 30, 30));
        this.transformationSmallBottle = Mat4.identity();
        this.transformationSmallBottle = this.transformationSmallBottle.times(Mat4.translation(20, 139, 285));
        this.transformationSmallBottle = this.transformationSmallBottle.times(Mat4.scale(4.3, 4.3, 4.3));
        this.transformationSmallBottle = this.transformationSmallBottle.times(Mat4.rotation(Math.PI/2, 0, 1, 0));
        this.transformMartini = Mat4.identity();
        this.transformMartini = this.transformMartini.times(Mat4.translation(65, 90, -198));
        this.transformMartini = this.transformMartini.times(Mat4.scale(35, 35, 35));
        this.transformPoster2Helper = Mat4.rotation(Math.PI/2, 0, 1, 0).times(Mat4.rotation(Math.PI, 0, 0, 1));
        this.transformCoke = Mat4.translation(10, 105, -199).times(Mat4.scale(22, 22, 22));
        this.transformMimosa = Mat4.translation(10, 50, -199).times(Mat4.scale(22, 22, 22));
        this.transformCoffee = Mat4.translation(68, 85, -199).times(Mat4.scale(22, 22, 22));
        this.transformAfterDark = Mat4.translation(68, 30, -199).times(Mat4.scale(22, 22, 22));
    }

    setCamera1() { //Camera 1: Bar
        this.camera_x = 0
        this.camera_y = -60
        this.camera_z = -10
        this.camera_angle = Math.PI
        this.cameraReset = 1
		this.vc = [0,1,0]
    }

    setCamera2() { //"Camera 2: Bar Stand"
        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = -120
        this.camera_angle = Math.PI / 2
        this.cameraReset = 2
		this.vc = [0,1,0]
    }

    setCamera3() { //"Camera 3: Right Corner",
        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = -149 //changed
        this.camera_angle = Math.PI / 4
        this.cameraReset = 3
		this.vc = [0,1,0]
    }

    setCamera4() { //"Camera 4: Booths/Jukebox"
        this.camera_x = 0
        this.camera_y = -10
        this.camera_z = -149 //changed
        this.camera_angle = -Math.PI / 4
        this.cameraReset = 4
		this.vc = [0,1,0]
    }

    setCamera5() { //"Camera 5: Posters"
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -149 //changed
        this.camera_angle = 0
        this.cameraReset = 5
		this.vc = [0,1,0]
    }

    setCamera6() { //"Camera 6: Bottom Corner"
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -149 //changed
        this.camera_angle = 3 * Math.PI / 4
        this.cameraReset = 6
		this.vc = [0,1,0]
    }

    setCamera7() { //"Rotate Camera"
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -149 //changed
        this.camera_angle = 0
        this.cameraReset = 7
		this.vc = [0,1,0]
    }

    setCamera8() { //"Clue 1"
        this.camera_x = 90
        this.camera_y = -50
        this.camera_z = -20 
        this.camera_angle = Math.PI/2
        this.cameraReset = 8
		this.vc = [0,1,0]
    }

    setCamera9() { //"Clue 2"
        this.camera_x = -50
        this.camera_y = -50
        this.camera_z = 70
        this.camera_angle = -Math.PI/2
        this.cameraReset = 9
		this.vc = [0,1,0]
    }

    setCamera10() { //"Clue 3"
        this.camera_x = 0
        this.camera_y = -60
        this.camera_z = 30
        this.camera_angle = 0
        this.cameraReset = 10
		this.vc = [0,1,0]
    }

    setCamera11() { //"Clue 4"
    this.camera_x = 5
    this.camera_y = -50
    this.camera_z = 140
    this.camera_angle = Math.PI/2.5
    this.cameraReset = 10
    this.vc = [0,1,0]
    }

    make_control_panel() {

        this.key_triggered_button("Camera 1: Bar", ["1"], this.setCamera1);
        this.key_triggered_button("Camera 2: Bar Stand", ["2"], this.setCamera2);
        this.key_triggered_button("Camera 3: Right Corner", ["3"], this.setCamera3);
        this.new_line();
        this.key_triggered_button("Camera 4: Booths/Jukebox", ["4"], this.setCamera4);
        this.key_triggered_button("Camera 5: Posters", ["5"], this.setCamera5);
        this.key_triggered_button("Camera 6: Bottom Corner", ["6"], this.setCamera6);
        this.new_line();
        this.key_triggered_button("Rotate Camera", ["r"], this.setCamera7);
        this.key_triggered_button("Clue 1", ["b"], this.setCamera8);
        this.key_triggered_button("Clue 2", ["c"], this.setCamera9);
        this.key_triggered_button("Clue 3", ["e"], this.setCamera10);
        this.new_line();
        this.key_triggered_button("Clue 4", ["f"], this.setCamera11);


    }

    display(context, program_state) {
        const t = program_state.animation_time / 1000;

        //camera movement
        if (!context.scratchpad.controls) {
            this.children.push(context.scratchpad.controls = new defs.Movement_Controls());
            // Locate the camera here (inverted matrix).
            // program_state.set_camera(Mat4.translation(0, -100,-320 ));   //overview of room view without front wall
            // program_state.set_camera(Mat4.translation(40, -8,-80 )); //Original camera coord
            program_state.set_camera(Mat4.translation(0, -70, -150)); //DO THIS ONE for POV
            // program_state.set_camera(Mat4.translation(0, -100,-500 )); //Current overview of front wall
            // program_state.set_camera(Mat4.translation(-50, -70,10 ).times(Mat4.rotation(Math.PI/2, 0, 1,0))); //view mustard POV
        }

        if (this.cameraReset >= 0) {
            program_state.set_camera(Mat4.translation(this.camera_x, this.camera_y, this.camera_z).times(Mat4.rotation(this.camera_angle, this.vc[0], this.vc[1], this.vc[2]))); //view mustard POV
            if (this.cameraReset == 7)
                this.camera_angle += 0.003
            else
                this.cameraReset = -1
        }
        program_state.projection_transform = Mat4.perspective(Math.PI / 4, context.width / context.height, 1, 500);
        // A spinning light to show off the bump map:
        program_state.lights = [new Light(
            Mat4.rotation(t / 300, 1, 0, 0).times(vec4(3, 2, 10, 1)),
            color(1, .7, .7, 1), 100000)];

        //begin screen
        let transformBeginScreen = Mat4.identity();
        transformBeginScreen = transformBeginScreen.times(Mat4.translation(0, 71, 40));
        transformBeginScreen = transformBeginScreen.times(Mat4.scale(82, 80, 80));

        if (window.start_click == 0) {

            // this.startFade = this.startFade + 1/255;
            this.shapes.beginScreen.draw(context, program_state, transformBeginScreen, this.materials.beginScreen);
            this.setCamera5();

            //this.fading = this.fading + 0.5/255;
            //             this.shapes.endScene.draw(context, program_state, transformEndScene, this.materials.endScene.override(color(0,0,0,this.fading)));
        }
        if (window.rules_click == 1) {
            window.start_click = 1;
            this.startFade = this.startFade - 1 / 255;
            this.shapes.instructions.draw(context, program_state, transformBeginScreen, this.materials.instructions);
            this.setCamera5();

            //set first clue
            this.clue1 = 1;
            this.takeASeat_click = 1;
        }

        if(window.takeASeat_click == 1) {
            window.rules_click = 2;
            // let transformWords = Mat4.identity();
            // transformWords = transformWords.times(Mat4.translation(-15, 85, 60));
            // transformWords = transformWords.times(Mat4.scale(30, 30, 30));
            // this.shapes.takeASeat.draw(context, program_state, transformWords, this.materials.takeASeat);
            this.shapes.takeASeat.draw(context, program_state, transformBeginScreen, this.materials.takeASeat);
            this.setCamera5();
        }


        //TODO: TEMPORARY => set everything to true so all clues will be displayed

        this.clue1 = 1;
        this.clue2 = 1;
        this.clue3 = 1;
        this.clue4 = 1;
        this.clue5 = 1;
        this.clue6 = 1;
        this.clue7 = 1;
        this.clue8 = 1;
        //TODO: get rid of the above section after all clues are complete so that all clues are initialized to 0


        //CLUES!!
        //TODO: Clue #1: Chair

        // this.clue1 = 0; //testing
        let stoolShiftFactor = 30;
        var max_stool_dist = 2.8;
        if(this.clue1 == 1) {
            //place chair code
            //STOOLS
            // let stoolShiftFactor = 30;
            // var max_stool_dist = 2.8;
            let stoolTransform = Mat4.translation(123, 14, 80 + stoolShiftFactor);
            let stoolClueTransform = Mat4.translation(125, 18, 36 - stoolShiftFactor * 4);
            stoolClueTransform = stoolClueTransform.times(Mat4.scale(12, 13, 12));
            if (window.stool_click == 1) {
                //console.log("stool_click")
                if (stool_move < max_stool_dist)
                    stool_move += 0.1;
                console.log("stool_click", stool_move)
                stoolClueTransform = stoolClueTransform.times(Mat4.translation(0, 0, -stool_move));
                stoolTimer += 1;
                if(stoolTimer < 100)
                    this.setCamera8();
            } else {
                stool_move = 0;
                stoolTimer = 0;
            }

            this.shapes.stoolclue.draw(context, program_state, stoolClueTransform, this.materials.stoolclue);
            //set next clue
            this.clue2 = 1;
        }
        else {
            //still want to draw the chair
                let i = -1;
                var transformStool = Mat4.identity();
                transformStool = transformStool.times(Mat4.translation(120, 20, -80 + (stoolShiftFactor * (i+1) )));
                transformStool = transformStool.times(Mat4.scale(12,12,12));
                this.shapes.stool.draw(context, program_state, transformStool, this.materials.stool);
        }

        for (let i = 0; i < 6; i++) {
            var transformStool = Mat4.identity();
            transformStool = transformStool.times(Mat4.translation(120, 20, -80 + (stoolShiftFactor * (i+1) )));
            transformStool = transformStool.times(Mat4.scale(12,12,12));
            this.shapes.stool.draw(context, program_state, transformStool, this.materials.stool);
        }

        //TODO: Clue #2: Menu
        // this.clue2 = 0; //testing
        if(this.clue2 == 1) {
            //MENU

            var transformClueMenuTop = Mat4.identity();
            // const menuAngle = Math.PI;
            if (window.menu_click == 0) {
                transformClueMenuTop = transformClueMenuTop.times(Mat4.translation(-129 + 0.75, 45, -55));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.rotation(-Math.PI/6, 0, 1, 0));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.scale(1/12., 1/12., 1/12.))
                transformClueMenuTop = transformClueMenuTop.times(Mat4.translation(135, -45, 130));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.translation(-135, 45, -50));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.scale(12, 12 ,12));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.scale(12, 12 ,12));
                menuTimer = 0;
            }
            if (window.menu_click == 1) {
                transformClueMenuTop = transformClueMenuTop.times(Mat4.translation(-135, 45, 53 - 90));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.scale(12, 12 ,12));
                transformClueMenuTop = transformClueMenuTop.times(Mat4.rotation(Math.PI, 0, 1, 0));
                menuTimer += 1;
                if(menuTimer < 100)
                    this.setCamera9();
             
            }
            // this.shapes.menu.draw( context, program_state, transformClueMenuTop, this.materials.menuFront.override(color(menu_color_special)));
            this.shapes.menu.draw( context, program_state, transformClueMenuTop, this.materials.menuFrontSpecial);


            //Set next clue
            this.clue3 = 1;
        }
        else
        {
            //draw the unopened menu

            //should be position 1
            const i = 1;
            const boothShiftFactor = 90;
            var transformMenuBottom = Mat4.identity();
            transformMenuBottom = transformMenuBottom.times(Mat4.translation(0, 1, 0));
            transformMenuBottom = transformMenuBottom.times(Mat4.translation(-135, 44, 40 - i * boothShiftFactor));
            transformMenuBottom = transformMenuBottom.times(Mat4.scale(12, 12 ,12));
            this.shapes.menu.draw(context, program_state, transformMenuBottom, this.materials.menuBackEmpty);
            transformMenuBottom = transformMenuBottom.times(Mat4.scale(12, 12 ,12));

            var transformMenuTop = Mat4.identity();
            transformMenuTop = transformMenuTop.times(Mat4.translation(0, 1, 0));
            transformMenuTop = transformMenuTop.times(Mat4.translation(-129 + 0.75, 44, 35 - i * boothShiftFactor));
            transformMenuTop = transformMenuTop.times(Mat4.rotation(-Math.PI/6, 0, 1, 0));
            transformMenuTop = transformMenuTop.times(Mat4.scale(1/12., 1/12., 1/12.))
            transformMenuTop = transformMenuTop.times(Mat4.translation(135, -44, 40 + i * boothShiftFactor));
            transformMenuTop = transformMenuTop.times(transformMenuBottom);
            // if (i != 1)
            this.shapes.menu.draw(context, program_state, transformMenuTop, this.materials.menuFront);
        }

        //TODO: Clue #3: Coke Poster
        var myMaterial;
        
        if(this.clue3 == 1) {
            if (window.change_coke == 0) {
                myMaterial = this.materials.coke;
            } else if (window.change_coke == 1) {
                // myMaterial = this.materials.smiley;
                myMaterial = this.materials.cokeClue;

                //set the next clue once the clue is revealed
                this.clue4 = 0;
                cokeTimer += 1;
                if(cokeTimer < 100)
                    this.setCamera10();
            }
            this.shapes.coke.draw(context, program_state, this.transformCoke, myMaterial);
    
            // this.shapes.circleposter.draw(context, program_state, this.transformCoke, myMaterial);
        }
        else {
            myMaterial = this.materials.coke;
            cokeTimer = 0;
        }
        this.shapes.circleposter.draw(context, program_state, this.transformCoke, myMaterial);


        //TODO: Clue #4: Mustard and Ketchup
        this.clue4 = 1; //TODO: get rid of this (just for testing)

        var otherKetchupTransform = Mat4.identity();
        otherKetchupTransform = otherKetchupTransform.times(Mat4.translation(180, 51, -20 + 50));
        otherKetchupTransform = otherKetchupTransform.times(Mat4.scale(2, 2, 2));
        //model_transform2 is mustard
        var otherMustard = Mat4.identity();
        otherMustard = otherMustard.times(Mat4.translation(180, 51 , 10 - 20 +50));
        otherMustard = otherMustard.times(Mat4.translation(0, -5.8, 0));
        //otherMustard = otherMustard.times(Mat4.rotation(mustard_angle, 1, 0, 0));
        otherMustard = otherMustard.times(Mat4.translation(0, 5.8, 0));
        otherMustard = otherMustard.times(Mat4.scale(2,2,2));

        this.shapes.otherKetchup.draw(context, program_state, otherKetchupTransform, this.materials.otherKetchup);
        this.shapes.mustard.draw(context, program_state, otherMustard, this.materials.mustard);


        if(this.clue4 == 1) {
        //KETCHUP + MUSTARD
        var distance_cup = 10; // define the initial distance between cups
        if (window.ketchup_move == 1) {
            if (collision_occured) {
                //kup_mov = max_move
                var max_angle = 1.6;
                mustard_angle += 0.04;
                if (mustard_angle < max_angle) {
                    // if (mustard_mov == 0) mustard_mov = 0.8 // add initial jump right after collision.
                    if (mustard_mov == 0) mustard_mov = 4.2 // add initial jump right after collision.
                    mustard_mov += 0.04;
                } else {
                    mustard_angle = max_angle
                }

            } else {
                kup_mov += 0.1;
            }

            //Once collide, will reveal the next clue
            this.clue5 = 1;

        } else {    // reset it to original position
            kup_mov = 0;
            mustard_angle = 0;
            mustard_mov = 0;
            collision_occured = false;
        }

            const model_transform1 = Mat4.translation(180, 51, kup_mov - 20 - 90)
                .times(Mat4.scale(2, 2, 2))
            //model_transform2 is mustard
            const model_transform2 = Mat4.translation(180, 51 , distance_cup - 20 + mustard_mov - 90)
                .times(Mat4.translation(0, -10.8, 0))
                .times(Mat4.rotation(mustard_angle, 1, 0, 0))
                .times(Mat4.translation(0, 10.8, 0))
                .times(Mat4.scale(2,2,2))

        var pos1 = model_transform1.times(vec4(0, 0, 0, 1)); // get the coordinate of ketchup
        var pos2 = model_transform2.times(vec4(0, 0, 0, 1)); // get the coordinate of mustard
        var dist = (pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2 + (pos1[2] - pos2[2]) ** 2; // get the square of distance
        var min_dist = 3 // minimum distance between cups, when distance is smaller than this, collision occurs
        if (dist <= min_dist ** 2) collision_occured = true;
        var dist = Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2 + (pos1[2] - pos2[2]) ** 2);
        this.shapes.ketchup.draw(context, program_state, model_transform1, this.materials.ketchup);
        this.shapes.mustard.draw(context, program_state, model_transform2, this.materials.mustard);
        var transformMustard = Mat4.identity();
        transformMustard = transformMustard.times(Mat4.translation(153, 38, -34));
        transformMustard = transformMustard.times(Mat4.rotation(-Math.PI / 2, 0, 1, 0));
        transformMustard = transformMustard.times(Mat4.rotation(-Math.PI / 2, 1, 0, 0));
        transformMustard = transformMustard.times(Mat4.scale(35, 35, 35));


            if (mustard_angle == max_angle) {
                this.shapes.mustardSpill.draw(context, program_state, transformMustard, this.materials.mustardSpill);
                if (window.mustard_spill == 0) window.mustard_spill = 1;
            }
            if (window.mustard_spill == 1) {
                window.mustard_spill = 2;
                mustard_spill_timer = 1;
                audio.src = "assets/sound/mustardsplat.wav";
                audio.loop = false;
                if (audio.paused) audio.play();
                ketchupTimer += 1;
                if(ketchupTimer < 100)
                    this.setCamera11();
            }

            if (mustard_spill_timer > 0) mustard_spill_timer += 1;
            if (mustard_spill_timer > 1000) {
                mustard_spill_timer = 0;
                audio.pause();
            }

            if (window.music_play == 1) {
                window.music_play = 2
                audio.src = sounds[window.music_index];
                audio.loop = false;
                audio.play();
            } else if (window.music_play == 0 && window.mustard_spill == 0) {
                audio.pause();
                ketchupTimer = 0;
            }
        }
        else {
            var distance_cup = 10;
            mustard_mov = 0;
            kup_mov = 0;
            mustard_angle = 0;
            const model_transform1 = Mat4.translation(180, 51, kup_mov - 20 - 90)
                .times(Mat4.scale(2, 2, 2))
            //model_transform2 is mustard
            const model_transform2 = Mat4.translation(180, 51 , distance_cup - 20 + mustard_mov - 90)
                .times(Mat4.translation(0, -5.8, 0))
                .times(Mat4.rotation(mustard_angle, 1, 0, 0))
                .times(Mat4.translation(0, 5.8, 0))
                .times(Mat4.scale(2,2,2))


            this.shapes.ketchup.draw(context, program_state, model_transform1, this.materials.ketchup);
            this.shapes.mustard.draw(context, program_state, model_transform2, this.materials.mustard);
        }

        //TODO: Clue #5: Napkin Box
        //NAPKIN BOX

        this.clue5 = 1;
        if(this.clue5 == 1) {
            let napkinTransform = Mat4.identity();
            napkinTransform = napkinTransform.times(Mat4.translation(185, 44, 20)).times(Mat4.scale(6, 6, 6));

            if (window.napkin_click == 1) {
                console.log("napkin = " + window.napkin_click);
                napkinTransform = napkinTransform.times(Mat4.rotation(Math.PI, 0, 1, 0));
            }
            this.shapes.napkin.draw(context, program_state, napkinTransform, this.materials.napkin);

            //set the next clue
            this.clue6 = 1;

        }
        else { //clue napkin box when not used
            let napkinTransform = Mat4.identity();
            napkinTransform = napkinTransform.times(Mat4.translation(185, 44, 20)).times(Mat4.scale(6, 6, 6));
            this.shapes.napkin.draw(context, program_state, napkinTransform, this.materials.napkin);
        }

        //all the other napkin boxes that dont do anything
        let napkinTransform = Mat4.identity();
        napkinTransform = napkinTransform.times(Mat4.translation(185, 44, -120)).times(Mat4.scale(6, 6, 6));
        this.shapes.napkin.draw(context, program_state, napkinTransform, this.materials.napkin);

        //TODO: Clue #6: Glass Bottle + Shards and Show diamond
        //BOTTLE
        var bottle_trans = [45, 55, 160]

        // this.clue6 = 0;
        var transformBottle = Mat4.identity();
        transformBottle = transformBottle.times(Mat4.translation(bottle_trans[0], bottle_trans[1], bottle_trans[2]));
        transformBottle = transformBottle.times(Mat4.scale(5, 5, 5));
        //DIAMOND
        let diamondTransform = Mat4.identity();
        diamondTransform = diamondTransform.times(Mat4.translation(45, 50, 150)).times(Mat4.scale(2, 2, 2));
        //SHARDS
        var transformShards = Mat4.identity();
        transformShards = transformShards.times(Mat4.translation(45, 52, 160));
        transformShards = transformShards.times(Mat4.scale(10, 10, 10));

        if(this.clue6 == 1) {
            // var transformBottle = Mat4.identity();
            // transformBottle = transformBottle.times(Mat4.translation(45, 55, 160));
            // transformBottle = transformBottle.times(Mat4.scale(5, 5, 5));
            if (window.bottle_break == 0) {
                this.shapes.collision_bottle.draw(context, program_state, transformBottle, this.materials.collison_bottle);

            }

            if (window.bottle_break == 1) {
                this.shapes.shards.draw(context, program_state, transformShards, this.materials.shards);
                this.shapes.diamond.draw(context, program_state, diamondTransform, this.materials.diamond);
            }

            //set the next clue
            this.clue7 = 1;
        }
        else {
            //just draw the bottle unshattered
            //none of the bottles should shatter
            this.shapes.collision_bottle.draw(context, program_state, transformBottle, this.materials.collison_bottle);
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        // add for ball to hit bottle
		
		var ball_vec = [20, 73, 120] // initial distance from ball to bottle
		if (window.ball_click==1) {
			ball_t += -0.03
			if (ball_t<=0.15) {  // hit the bottle
				window.bottle_break = 1 // bottle is broken
			}  
			if (ball_t<=0) {   // start to bounce
				window.ball_click = 2 // start to bounce back
				ball_t = 0;
			}
			ball_vec = ball_vec.map(function(x) { return x * ball_t; }) // ball_t is scale factor
		} else if (window.ball_click==2) {
			 //Projectile Motion equation: x = v.t.cos(theta), y = v.t.sin(theta) - 0.5*g*t**2
			 ball_t += 0.1

			 var theta = Math.PI/3.5 // initial angle
			 var v = 20.0 // speed
			 var g = 5.0 // acceleration
			 var a = 0.5*g 
			 var b = -v*Math.sin(theta)
			 var c = -bottle_trans[1] + 5  // maximum movement to reach floor
			 var tmax = ( v*Math.sin(theta)+Math.sqrt(b*b+100*g) ) / g  // maximum time to reach floor
			 
			 ball_t = Math.min(tmax,ball_t)
			 var mov_x = v*ball_t*Math.cos(theta)
			 var mov_y = v*ball_t*Math.sin(theta) - 0.5*g*ball_t*ball_t
			 //console.log("ttt="+tmax)
             //ball_vec = [-0.1*mov_x, mov_y, ball_vec[2]+mov_x]	
             ball_vec = [0.1*mov_x, mov_y, -0.1*mov_x]			 
		} else {
			ball_t = 1.0 // restore to original value
			window.bottle_break = 0
		}
		
		
		var transformBall = Mat4.identity();
		transformBall = transformBall.times(Mat4.translation(ball_vec[0], ball_vec[1], ball_vec[2]));
		transformBall = transformBall.times(Mat4.translation(bottle_trans[0], bottle_trans[1], bottle_trans[2])); // bottle location
        transformBall = transformBall.times(Mat4.scale(2, 2, 2));
        this.shapes.ball.draw(context, program_state, transformBall, this.materials.ball);
		//this.shapes.ball.draw(context, program_state, this.transformCat, this.materials.ball);
		
		
		////////////////////////////////////////////////////////////////////////////////////////////


        //TODO: Clue #7: Diamond + Note
        //NOTE
        let noteTransform = Mat4.identity();
        noteTransform = noteTransform.times(Mat4.translation(0, 50, -70));
        noteTransform = noteTransform.times(Mat4.scale(90, 90, 90));

        // this.clue7 = 0; //testing
        if(this.clue7 == 1) {
            if (window.diamond_click == 1) {
                console.log("diamond = " + window.diamond_click);
                this.shapes.note.draw(context, program_state, noteTransform, this.materials.note);
                this.setCamera5();
            }
            if (window.note_click == 1) {
                window.diamond_click = 0;
            }

            //set the next clue
            this.clue8 = 1;
        }
        // else {
            //no note should be drawn
            //just the diamond still from clue6 so shouldn't need to draw anything
        // }

        //TODO: Clue #8: Jukebox
        //JUKEBOX
        // this.clue8 = 0; //testing
        this.shapes.jukebox.draw(context, program_state, this.transformJukebox, this.materials.jukebox);
        if(this.clue8 == 0) {
            window.music_play = 0; //prevent music from ever playing
        }


        //TODO: Furniture Placement

        //POSTERS
        //Martini

        this.shapes.circleposter.draw(context, program_state, this.transformAfterDark, this.materials.afterDark);
        this.shapes.circleposter.draw(context, program_state, this.transformCoffee, this.materials.coffeePoster);
        this.shapes.circleposter.draw(context, program_state, this.transformMimosa, this.materials.mimosaPoster);

        //BOOTH
        //shift factor changes how far apart the same facing chair will be
        const boothShiftFactor = 90;
        const boothDifferenceFactor = 60;
        const boothScaleFactor = Mat4.scale(45, 45, 45);
        const boothTableScaleFactor = Mat4.scale(13, 16, 13);
        for (let i = -2; i < 3; i++) {
            //draw the two booth chairs.
            //front facing booth
            var boothTransform = Mat4.identity();
            boothTransform = boothTransform.times(Mat4.translation(-155, 25, 75 - i * boothShiftFactor));
            this.shapes.booth.draw(context, program_state, boothTransform.times(boothScaleFactor), this.materials.booth);
            //back facing booth
            boothTransform = Mat4.identity();
            boothTransform = boothTransform.times(Mat4.translation(-155, 25, 75 - boothDifferenceFactor - i * boothShiftFactor));
            boothTransform = boothTransform.times(Mat4.rotation(Math.PI, 0, 1, 0));
            this.shapes.booth.draw(context, program_state, boothTransform.times(boothScaleFactor), this.materials.booth);

            //draw the booth table between the two tables
            var transformBoothTable = Mat4.identity();
            transformBoothTable = transformBoothTable.times(Mat4.translation(-155, 11, 45 - i * boothShiftFactor));
            this.shapes.boothTable.draw(context, program_state, transformBoothTable.times(boothTableScaleFactor), this.materials.boothTable);

            var transformLight = Mat4.identity();
            transformLight = transformLight.times(Mat4.translation(-155, 110, 45 - i * boothShiftFactor));
            transformLight = transformLight.times(Mat4.rotation(Math.PI / 4, 0, 1, 0));
            transformLight = transformLight.times(Mat4.scale(2.5, 2.5, 2.5));
            this.shapes.light.draw(context, program_state, transformLight.times(boothTableScaleFactor), this.materials.light);

            var transformBulb = Mat4.identity();
            transformBulb = transformBulb.times(Mat4.translation(-155, 80, 45 - i * boothShiftFactor));
            transformBulb = transformBulb.times(Mat4.scale(0.4, 0.4, 0.4));
            this.shapes.bulb.draw(context, program_state, transformBulb.times(boothTableScaleFactor), this.materials.bulb);

            var transformSmoothie2 = Mat4.identity();
            transformSmoothie2 = transformSmoothie2.times(Mat4.translation(-10, 0, 0));
            var transformSmoothie = Mat4.identity();
            transformSmoothie = transformSmoothie.times(Mat4.translation(-175, 47.5, 40 - i * boothShiftFactor));
            transformSmoothie = transformSmoothie.times(Mat4.scale(0.075, 0.075, 0.075));
            transformSmoothie = transformSmoothie.times(boothScaleFactor);
            this.shapes.smoothie.draw(context, program_state, transformSmoothie, this.materials.smoothie);
            this.shapes.smoothie.draw(context, program_state, Mat4.translation(-4, 0, 8).times(transformSmoothie), this.materials.smoothie2);

            var transformMenuBottom = Mat4.identity();
            transformMenuBottom = transformMenuBottom.times(Mat4.translation(0, 1, 0));
            transformMenuBottom = transformMenuBottom.times(Mat4.translation(-135, 44, 40 - i * boothShiftFactor));
            transformMenuBottom = transformMenuBottom.times(Mat4.scale(12, 12 ,12));
            if (i == 1) {
                this.shapes.menu.draw(context, program_state, transformMenuBottom, this.materials.menuBack);
            } else {
                this.shapes.menu.draw(context, program_state, transformMenuBottom, this.materials.menuBackEmpty);
            }
            transformMenuBottom = transformMenuBottom.times(Mat4.scale(12, 12 ,12));

            var transformMenuTop = Mat4.identity();
            transformMenuTop = transformMenuTop.times(Mat4.translation(0, 1, 0));
            transformMenuTop = transformMenuTop.times(Mat4.translation(-129 + 0.75, 44, 35 - i * boothShiftFactor));
            transformMenuTop = transformMenuTop.times(Mat4.rotation(-Math.PI/6, 0, 1, 0));
            transformMenuTop = transformMenuTop.times(Mat4.scale(1/12., 1/12., 1/12.))
            transformMenuTop = transformMenuTop.times(Mat4.translation(135, -44, 40 + i * boothShiftFactor));
            transformMenuTop = transformMenuTop.times(transformMenuBottom);
            if (i != 1)
                this.shapes.menu.draw(context, program_state, transformMenuTop, this.materials.menuFront);

            var transformWindow = Mat4.identity();
            transformWindow = transformWindow.times(Mat4.translation(-200, 70, 45 - i * boothShiftFactor));
            transformWindow = transformWindow.times(Mat4.rotation(Math.PI, 0, 1, 0));
            transformWindow = transformWindow.times(Mat4.rotation(-Math.PI / 2, 1, 0, 0));
            transformWindow = transformWindow.times(boothScaleFactor);

            var transformWindow2 = Mat4.identity();
            transformWindow2 = transformWindow2.times(Mat4.translation(200, 70, 45 - i * boothShiftFactor));
            transformWindow2 = transformWindow2.times(Mat4.rotation(-Math.PI / 2, 1, 0, 0));
            transformWindow2 = transformWindow2.times(boothScaleFactor);

            var transformPoster = Mat4.identity();
            transformPoster = transformPoster.times(Mat4.translation(201, 70, 45 - i * boothShiftFactor));
            transformPoster = transformPoster.times(Mat4.rotation(-Math.PI/2, 0, 1, 0));
            transformPoster = transformPoster.times(Mat4.rotation(Math.PI, 0, 0, 1));
            transformPoster = transformPoster.times(boothScaleFactor);

            var transformPoster2 = Mat4.identity();
            transformPoster2 = transformPoster2.times(Mat4.translation(-198, 70, 45 - i * boothShiftFactor));
            // transformPoster2 = transformPoster2.times(Mat4.rotation(Math.PI/2, 0, 1, 0));
            // transformPoster2 = transformPoster2.times(Mat4.rotation(Math.PI, 0, 0, 1));
            // transformPoster2 = transformPoster2.times(boothScaleFactor);
            transformPoster2 = transformPoster2.times(this.transformPoster2Helper).times(boothScaleFactor);

            switch (i) {
                case -2:
                    this.shapes.window.draw(context, program_state, transformWindow, this.materials.window1);
                    this.shapes.window.draw(context, program_state, transformWindow2, this.materials.window2);                    
                    break;
                case -1:
                    this.shapes.poster.draw(context, program_state, transformPoster2, this.materials.milkshakePoster);
                    this.shapes.poster.draw(context, program_state, transformPoster, this.materials.burgerPoster);
                    break;
                case 0:
                    this.shapes.window.draw(context, program_state, transformWindow, this.materials.window3);
                    this.shapes.window.draw(context, program_state, transformWindow2, this.materials.window4);
                    break;
                case 1:
                    this.shapes.poster.draw(context, program_state, transformPoster2, this.materials.ingredientsPoster);
                    this.shapes.poster.draw(context, program_state, transformPoster, this.materials.beachPoster);
                    break;
                case 2:
                    this.shapes.window.draw(context, program_state, transformWindow, this.materials.window5);
                    this.shapes.window.draw(context, program_state, transformWindow2, this.materials.window2);
                    break;
                default:
                    this.shapes.window.draw(context, program_state, transformWindow, this.materials.window);
                    this.shapes.window.draw(context, program_state, transformWindow2, this.materials.window);
            }
        }

        // TALL TABLE
        let tallTableTransform = Mat4.identity();
        tallTableTransform = tallTableTransform.times(Mat4.translation(183, 20, 0));
        tallTableTransform = tallTableTransform.times(Mat4.rotation(-Math.PI / 2, 0, 0, 1));
        tallTableTransform = tallTableTransform.times(Mat4.rotation(Math.PI / 2, 0, 0, 1));
        tallTableTransform = tallTableTransform.times(Mat4.scale(50, 50, 110));
        this.shapes.talltable.draw(context, program_state, tallTableTransform, this.materials.talltable);

        //PAPER UNDER STOOL
        let paperTransform = Mat4.identity();
        paperTransform = paperTransform.times(Mat4.translation(125,2,-87));
        paperTransform = paperTransform.times(Mat4.scale(5, 5, 5));
        paperTransform = paperTransform.times(Mat4.rotation(-Math.PI/2, 1, 0, 0));
        if(window.chairpaper_click == 1)
        {
            // paperTransform = paperTransform.times(Mat4.translation(120,5,-40));
            // paperTransform = paperTransform.times(Mat4.scale(15, 15, 15));
            // paperTransform = paperTransform.times(Mat4.rotation(-Math.PI/2, 1, 0, 0));
            paperTransform = Mat4.identity();
            paperTransform = paperTransform.times(Mat4.translation(0, 70, 0));
            paperTransform = paperTransform.times(Mat4.scale(60,60,60));
            this.setCamera5();
        }
  
        this.shapes.chairpaper.draw(context, program_state, paperTransform, this.materials.chairpaper);

        //BAR
        this.shapes.bar.draw(context, program_state, this.barTransform, this.materials.bar);

        //DOOR
        this.shapes.openSign.draw(context, program_state, this.transformDoor, this.materials.openSign);

        // BACK WALL SHELVES
        var transformShelf = Mat4.identity();
        transformShelf = transformShelf.times(Mat4.translation(35,120, 290));
        transformShelf = transformShelf.times(Mat4.scale(40, 20, 40));
        transformShelf = transformShelf.times(Mat4.rotation(Math.PI, 0, 1, 0));
        this.shapes.shelf.draw(context, program_state, transformShelf, this.materials.shelf);

        transformShelf = Mat4.identity();
        transformShelf = transformShelf.times(Mat4.translation(5, 85, 290));
        transformShelf = transformShelf.times(Mat4.scale(40, 20, 40));
        transformShelf = transformShelf.times(Mat4.rotation(Math.PI, 0, 1, 0));
        this.shapes.shelf.draw(context, program_state, transformShelf, this.materials.shelf);

        // var transformShelfBottle = transformShelf.times(Mat4.translation(0.75, 0.90, 0));
        // this.shapes.other_bottle.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.other_bottle);
        //
        // transformShelfBottle = transformShelf.times(Mat4.translation(0, 0.90, 0));
        // this.shapes.other_bottle.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.other_bottle);
        //
        // transformShelfBottle = transformShelf.times(Mat4.translation(-0.75, 0.90, 0));
        // this.shapes.other_bottle.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.other_bottle);

        var transformShelfBottle = transformShelf.times(Mat4.translation(0.75, 0.90, 0));
        if(window.bottle1_click == 1) {

            console.log("inside bottleclick");
            // this.shapes.shards.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.shards);
            this.shapes.shards2.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)).times(Mat4.translation(0, -1.5,0)), this.materials.shards);
        }
        else {

            this.shapes.bottle1.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.bottle1);
        }

        transformShelfBottle = transformShelf.times(Mat4.translation(0, 0.90, 0));
        if(window.bottle2_click == 1) {
            this.shapes.shards3.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)).times(Mat4.translation(0, -1.5,0)), this.materials.shards);
        }
        else {
            this.shapes.bottle2.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.bottle2);
        }

        transformShelfBottle = transformShelf.times(Mat4.translation(-0.75, 0.90, 0));
        if(window.bottle3_click == 1) {
            this.shapes.shards4.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)).times(Mat4.translation(0, -1.5,0)), this.materials.shards);
        }
        else {
            this.shapes.bottle3.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.bottle3);
        }
        transformShelf = Mat4.identity();
        transformShelf = transformShelf.times(Mat4.translation(70, 50, 290));
        transformShelf = transformShelf.times(Mat4.scale(40, 20, 40));
        transformShelf = transformShelf.times(Mat4.rotation(Math.PI, 0, 1, 0));
        this.shapes.shelf.draw(context, program_state, transformShelf, this.materials.shelf);

        transformShelfBottle = transformShelf.times(Mat4.translation(0, 0.90, 0));
        if(window.bottle4_click == 1) {
            this.shapes.shards5.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)).times(Mat4.translation(0, -1.5,0)), this.materials.shards);
        }
        else {
            this.shapes.bottle4.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.bottle4);
        }
        transformShelfBottle = transformShelf.times(Mat4.translation(0.75, 0.90, 0));
        if(window.bottle5_click == 1) {
            this.shapes.shards.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)).times(Mat4.translation(0, -1.5,0)), this.materials.shards);
        }
        else {
            this.shapes.bottle5.draw(context, program_state, transformShelfBottle.times(Mat4.scale(0.2, 0.4, 0.2)), this.materials.bottle5);
        }


        this.shapes.cat.draw(context, program_state, this.transformCat, this.materials.cat);
        this.shapes.smallBottle.draw(context, program_state, this.transformationSmallBottle, this.materials.bottleStrawberry);


        //TODO: Floor Placement
        //NOTE: order matters for the floor and back wall transformations bc of image wrapping
        this.shapes.plane.draw(context, program_state, this.transformFloor, this.materials.floorBumpMap);


        //Place flooring and walls
        this.shapes.plane.draw(context, program_state, this.transformBackWall, this.materials.backWall);
        this.shapes.plane.draw(context, program_state, this.transformLeftWall, this.materials.leftWall);
        this.shapes.plane.draw(context, program_state, this.transformRightWall, this.materials.rightWall);
        this.shapes.plane.draw(context, program_state, this.transformCeiling, this.materials.ceiling);
        this.shapes.plane.draw(context, program_state, this.transformFrontWall, this.materials.frontWall);
        this.shapes.planeFloor.draw(context, program_state, this.transformChecks, this.materials.floorTile);


        //TODO: END SCREEN
        var transformEndScene = Mat4.identity();
        transformEndScene = transformEndScene.times(Mat4.translation(0, 70, 30));
        transformEndScene = transformEndScene.times(Mat4.scale(100, 100, 100));

        var transformBlack = Mat4.identity();
        transformBlack = transformBlack.times(Mat4.translation(0, 70, 10));
        transformBlack = transformBlack.times(Mat4.scale(120, 80, 80));

        if (window.door_click == 1) {
            // opacity
            this.fading = this.fading + 0.5 / 255;
            this.shapes.endScene.draw(context, program_state, transformEndScene, this.materials.endScene.override(color(0, 0, 0, this.fading)));
            this.shapes.fadeToBlack.draw(context, program_state, transformBlack, this.materials.fadeToBlack.override(color(0, 0, 0, this.fading)));
            this.setCamera5();
        }
    }
}