import {tiny, defs} from './scenes/common.js';
import {Shape_From_File} from './scenes/obj-file-demo.js';
                                                  // Pull these names into this module's scope for convenience:
const { Vector, Vector3, vec, vec3, vec4, color, Matrix, Mat4, Light, Shape, Material, Shader, Texture, Scene,
        Canvas_Widget, Code_Widget, Text_Widget } = tiny;

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

var music_play=0;
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

const jukebox_color = color(127/255, 124/255, 127/255, 250/255); // change alpha from 255 to 250 for pick color
const ketchup_color = color(255/255, 0/255, 0/255, 251/255);
const mustard_color = color(255/255, 255/255, 0/255, 255/255);
const coke_color = color(0/255,0/255, 0/255, 252/255);
const cup_color = color(190/255, 223/255, 221/255);
const diamond_color = color(10/255,80/255, 70/255, 200/255);
// const smile_color = color(0/255,0/255, 0/255, 253/255);

window.jukebox_color = jukebox_color;
window.ketchup_color = ketchup_color;
window.mustard_color = mustard_color;
window.coke_color = coke_color;
window.cup_color = cup_color;
window.diamond_color = diamond_color;
// window.smile_color = smile_color;

var collision_occured = false;
var mustard_angle = 0;
var mustard_mov = 0;
var kup_mov = 0;
    
const Minimal_Webgl_Demo = defs.Minimal_Webgl_Demo;

// ******************** End extra step

// (Can define Main_Scene's class here)

const Additional_Scenes = [];
export { Main_Scene, Additional_Scenes, Canvas_Widget, Code_Widget, Text_Widget, defs, music_play }

class Main_Scene extends Scene
{                           // **Obj_File_Demo** show how to load a single 3D model from an OBJ file.
                            // Detailed model files can be used in place of simpler primitive-based
                            // shapes to add complexity to a scene.  Simpler primitives in your scene
                            // can just be thought of as placeholders until you find a model file
                            // that fits well.  This demo shows the jukebox model twice, with one
                            // jukebox showing off the Fake_Bump_Map effect while the other has a
                            // regular texture and Phong lighting.
    constructor() { 
        super();
        // Load the model file:
        this.shapes = {
            jukebox: new Shape_From_File( "assets/jukebox2.obj" ),
            table: new Shape_From_File("assets/table.obj"),
            ketchup: new Shape_From_File( "assets/kb.obj" ),
            mustard: new Shape_From_File( "assets/kb.obj"),
            booth: new Shape_From_File("assets/booth2.obj"),
            stool: new Shape_From_File("assets/stool.obj"),
            bar: new Shape_From_File("assets/bar_withoutdrinks.obj")  ,  
            planeFloor: new defs.Square(), //used floor
            plane: new defs.Square(),
            menu: new Shape_From_File("assets/menu.obj"),
            coke: new defs.Square(),
            // openSign: new defs.Square(),
            openSign: new Shape_From_File("assets/door.obj"),
            // smiley: new defs.Square(),
            cokeClue: new defs.Square(),
            diamond: new Shape_From_File("assets/diamond.obj"),
            boothTable: new Shape_From_File("assets/squareTable.obj"),
            tallCup: new Shape_From_File("assets/kcup.obj"),
            mustardSpill: new defs.Square(),
            note: new defs.Square(),
            light: new Shape_From_File("assets/light.obj"),
            bulb: new Shape_From_File("assets/bulb.obj"),
            carDeco: new defs.Square(),
            smoothie: new Shape_From_File("assets/drink.obj")
        };
        
        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = 10
        this.camera_angle = Math.PI/2
        this.cameraReset=-1
        // Don't create any DOM elements to control this scene:
        //this.widget_options = { make_controls: false };
        this.materials =
            {
                jukebox: new Material( new defs.Textured_Phong( 1 ), { color: jukebox_color, ambient: 0.5, specularity: 0,
                    texture: new Texture( "assets/jukebox_map.png" )}),
                table: new Material( new defs.Textured_Phong( 1 ), {color: color(1, 0, 0, 1)}), //color of table rn is temp red

                //KIMBERLY: adjust colors later
                floor: new Material (new defs.Phong_Shader(), {ambient: 1, diffusivity: 1, specularity: 0.5,
                    color: color(0.78, 0.8, 0.6, 1)}),
                // floorTile: new Material (new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                //     texture: new Texture("assets/moreChecker_1.png")}),
                floorTile: new Material (new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: color(1/255, 1/255, 1/255, 255/255),
                    texture: new Texture("assets/moreChecker_1.png")}),
                floorBumpMap: new Material (new defs.Textured_Phong(1), {ambient: 0.6, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/floorBumpMap.png")}),
                mustard: new Material( new defs.Textured_Phong( 1 ),  { color: mustard_color,
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) }),
                ketchup: new Material( new defs.Textured_Phong( 1 ),  { color: ketchup_color,
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) }),
                bar: new Material(new defs.Textured_Phong(1), {color: color(0, 0, 0, 1), ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/bar_map.png")}),
                backWall: new Material( new defs.Textured_Phong( 1 ), { ambient: 0.92, diffusivity: 1, specularity: .5, color: color( 0, 0, 0.1, 1 ) }),
                leftWall: new Material( new defs.Textured_Phong( 1 ), { ambient: 1, diffusivity: 1, specularity: .5, color: color( 0, 0, 0.1, 1 ) }),
                rightWall: new Material( new defs.Textured_Phong( 1 ), { ambient: 1, diffusivity: 1, specularity: .5, color: color( 0, 0, 0.1, 1 ) }),
                ceiling: new Material( new defs.Textured_Phong( 1 ), { ambient: .9, color: color( 0,0,0.2, 1 ) }),
                frontWall: new Material( new defs.Textured_Phong( 1 ), { ambient: 0.92, diffusivity: 1, specularity: .5, color: color( 0, 0, 0.1, 1 ) }),

                menuFront: new Material( new defs.Textured_Phong(1), {ambient: 0.5, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/menufront2.png")}),
                menuBack: new Material( new defs.Textured_Phong(1), {ambient: 0.5, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/menuback2.png")}),
                stool: new Material( new defs.Textured_Phong( 1 ), { color: jukebox_color, ambient: 1, diffusivity: 1, specularity: 1, 
                    texture: new Texture( "assets/stool_map.png" )}),
                booth: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 0.6, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/booth2_map.png")}),
                coke: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/coke_1.png")}),
                // openSign: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                //                 //     texture: new Texture("assets/open_door.png")}),
                openSign: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/door_map.png")}),
                // smiley: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                //     texture: new Texture("assets/smiley_1.png")}),
                // smiley: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                //     texture: new Texture("assets/smiley_1.png")}),
                // smiley: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                //     texture: new Texture("assets/smiley_1.png")}),
                smoothie: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/drink1_map.png")}),
                smoothie2: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/drink2_map.png")}),
                cokeClue: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/cokeClue_1.png")}),
                tallTable: new Material( new defs.Textured_Phong( 1 ), {ambient: 1, diffusivity: 1, specularity: 1,
                    texture: new Texture("assets/pink.png")}),
                tallCup: new Material( new defs.Textured_Phong( 1 ),  { ambient: 0.5, diffusivity: 1, specularity: 0.5, color: cup_color,
                    texture: new Texture("assets/pink.png")}),
                boothTable: new Material( new defs.Textured_Phong( 1 ),  { ambient: 0.5, diffusivity: 1, specularity: 0.5, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/pink.png")}),
                mustardSpill: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/mustardspill_2.png")}),
                light: new Material( new defs.Textured_Phong( 1 ),  { ambient: 1, diffusivity: 1, specularity: 0, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/light_map.png")}),
                bulb: new Material( new defs.Textured_Phong( 1 ),  { ambient: 1, diffusivity: 1, specularity: 1, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/bulb_map.png")}),
                diamond: new Material( new defs.Phong_Shader(), {ambient: 1, diffusivity: 1, specularity: 1, color: diamond_color, 
                    texture: new Texture("assets/diamond_map.png")}),
                note: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/note.png")}),
                carDeco: new Material( new defs.Textured_Phong(1), {ambient: 1, diffusivity: 1, specularity: 1, color: coke_color,
                    texture: new Texture("assets/carDeco_1.png")}),
            };
    }

    setCamera1() {
        this.camera_x = 0
        this.camera_y = -60
        this.camera_z = 10
        this.camera_angle = Math.PI
        this.cameraReset=1
    }
    
    setCamera2() {
        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = -120
        this.camera_angle = Math.PI/2
        this.cameraReset=2
    }

    setCamera3() {
        this.camera_x = -50
        this.camera_y = -70
        this.camera_z = -200
        this.camera_angle = Math.PI/4
        this.cameraReset=3
    }

    setCamera4() {
        this.camera_x = 0
        this.camera_y = -10
        this.camera_z = -150
        this.camera_angle = -Math.PI/4
        this.cameraReset=4
    }
        
    setCamera5() {
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -150
        this.camera_angle = 0
        this.cameraReset=5
    }
    
    setCamera6() {
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -150
        this.camera_angle = 3*Math.PI/4
        this.cameraReset=6
    }
    setCamera7() {
        this.camera_x = 0
        this.camera_y = -70
        this.camera_z = -150
        this.camera_angle = 0
        this.cameraReset=7
    }
    
    make_control_panel()
      { 

         this.key_triggered_button("Camera 1: Bar", ["1"], this.setCamera1);
         this.key_triggered_button("Camera 2: Bar Stand", ["2"], this.setCamera2);
         this.key_triggered_button("Camera 3: Right Corner", ["3"], this.setCamera3);
         this.new_line();
         this.key_triggered_button("Camera 4: Booths/Jukebox", ["4"], this.setCamera4);
         this.key_triggered_button("Camera 5: Posters", ["5"], this.setCamera5);
         this.key_triggered_button("Camera 6: Bottom Corner", ["6"], this.setCamera6);
         this.new_line();
         this.key_triggered_button("Rotate Camera", ["r"], this.setCamera7);
      }

    display( context, program_state ) { 
        const t = program_state.animation_time/1000;

        //camera movement
        if (!context.scratchpad.controls) {
            this.children.push(context.scratchpad.controls = new defs.Movement_Controls());
            // Locate the camera here (inverted matrix).
            // program_state.set_camera(Mat4.translation(0, -100,-320 ));   //overview of room view without front wall
            // program_state.set_camera(Mat4.translation(40, -8,-80 )); //Original camera coord
            program_state.set_camera(Mat4.translation(0, -70,-150 )); //DO THIS ONE for POV
            // program_state.set_camera(Mat4.translation(0, -100,-500 )); //Current overview of front wall
            // program_state.set_camera(Mat4.translation(-50, -70,10 ).times(Mat4.rotation(Math.PI/2, 0, 1,0))); //view mustard POV
        }
        
        if (this.cameraReset>=0) {
            program_state.set_camera(Mat4.translation(this.camera_x, this.camera_y,this.camera_z ).times(Mat4.rotation(this.camera_angle, 0, 1,0))); //view mustard POV
			if ( this.cameraReset ==7) 
				this.camera_angle += 0.003
			else
            this.cameraReset = -1
        }
        program_state.projection_transform = Mat4.perspective( Math.PI/4, context.width/context.height, 1, 500 );
        // A spinning light to show off the bump map:
        program_state.lights = [ new Light(
            Mat4.rotation( t/300,   1,0,0 ).times( vec4( 3,2,10,1 ) ),
            color( 1,.7,.7,1 ), 100000 ) ];

        //JUKEBOX
        // let model_transform = Mat4.translation(-90, 42, -57).times(Mat4.rotation(-Math.PI/2, 0, 1,0));
        let model_transform = Mat4.translation(-60, 42, -170).times(Mat4.rotation(-Math.PI/2, 0, 1,0));
        model_transform = model_transform.times(Mat4.scale(20, 20, 20));
        this.shapes.jukebox.draw( context, program_state, model_transform, this.materials.jukebox );

        //KETCHUP + MUSTARD

        var distance_cup = 10; // define the initial distance between cups
        if(window.ketchup_move == 1) {
            if (collision_occured) {
               //kup_mov = max_move
               var max_angle = 1.6;
               mustard_angle += 0.04;
               if (mustard_angle < max_angle) {
                   if (mustard_mov==0) mustard_mov = 0.8 // add initial jump right after collision.
                   mustard_mov += 0.004;
               } else {
                   mustard_angle = max_angle
               }
              
           } else {
               kup_mov += 0.1;
           }
        } else {    // reset it to original position
            kup_mov = 0
            mustard_angle = 0
            mustard_mov = 0
            collision_occured = false
        }
        
        //diamond
        let diamondTransform = Mat4.identity();
        diamondTransform = diamondTransform.times(Mat4.translation(120,40,50)).times(Mat4.scale(2, 2, 2));
        this.shapes.diamond.draw(context, program_state, diamondTransform, this.materials.diamond);

        //note
        let noteTransform = Mat4.identity();
        noteTransform = noteTransform.times(Mat4.translation(0,50,-70));
        noteTransform = noteTransform.times(Mat4.scale(90, 90, 90));
        if(window.diamond_click == 1)
        {
            console.log("diamond = " + window.diamond_click);
            this.shapes.note.draw(context, program_state, noteTransform, this.materials.note);

        }

        let transformTable =  Mat4.translation( -10, 7, -15 ).times(Mat4.rotation(-Math.PI/12,   0,1,0 ));
        transformTable = transformTable.times(Mat4.scale(15, 15, 15));
        this.shapes.table.draw(context, program_state, transformTable, this.materials.table);
        
        //model_transform1 is ketchup
        const model_transform1 = Mat4.translation( 140, 38, kup_mov-20 )
                .times(Mat4.scale(1.0,1.0,1.0))
                //.times(Mat4.rotation(Math.PI/2, 1, 0, 0))
                

        //model_transform2 is mustard
        const model_transform2 = Mat4.translation( 140, 38, distance_cup-20+mustard_mov)
                        .times(Mat4.translation(0, -5.8, 0))
                        .times(Mat4.rotation(mustard_angle, 1, 0, 0))
                        .times(Mat4.translation(0, 5.8, 0))

        var pos1 = model_transform1.times( vec4( 0,0,0,1 ) ); // get the coordinate of ketchup
        var pos2 = model_transform2.times( vec4( 0,0,0,1 ) ); // get the coordinate of mustard
        var dist = (pos1[0]-pos2[0])**2 + (pos1[1]-pos2[1])**2 + (pos1[2]-pos2[2])**2; // get the square of distance
        var min_dist = 3 // minimum distance between cups, when distance is smaller than this, collision occurs
        if (dist <= min_dist**2) collision_occured = true;
        //console.log("dist = " + Math.sqrt(dist))
        //console.log("pos1 = " + pos1)
        //console.log("pos2 = " + pos2)
        var dist = Math.sqrt( (pos1[0]-pos2[0])**2 + (pos1[1]-pos2[1])**2 + (pos1[2]-pos2[2])**2 );
        
        this.shapes.ketchup.draw( context, program_state, model_transform1, this.materials.ketchup );
        this.shapes.mustard.draw( context, program_state, model_transform2, this.materials.mustard );
        var transformMustard = Mat4.identity();
        transformMustard = transformMustard.times(Mat4.translation(116, 31, 31));
        transformMustard = transformMustard.times(Mat4.rotation(-Math.PI/2, 0, 1, 0));
        transformMustard = transformMustard.times(Mat4.rotation(-Math.PI/2, 1, 0, 0));
        transformMustard = transformMustard.times(Mat4.scale(35, 35, 35));
        if(mustard_angle == max_angle){
            this.shapes.mustardSpill.draw(context, program_state, transformMustard, this.materials.mustardSpill);
            if (window.mustard_spill==0) window.mustard_spill = 1;
        }
        //console.log("window.mustard_spill ***" + window.mustard_spill)
        if(window.mustard_spill == 1)
        {
            window.mustard_spill = 2
            mustard_spill_timer = 1
            audio.src = "assets/sound/mustardsplat.wav";
            audio.loop = false;
            if (audio.paused) audio.play();
        }

        if (mustard_spill_timer>0) mustard_spill_timer += 1;
        //console.log("play !!!!" + mustard_spill_timer)
        //console.log("window.mustard_spill !!!!" + window.mustard_spill)
        if (mustard_spill_timer>100) {
            mustard_spill_timer = 0;
            audio.pause();
        }
        
        if (window.music_play==1) {
            window.music_play = 2
            audio.src = sounds[window.music_index];
            audio.loop = false;
            audio.play();
        } else if (window.music_play==0 && window.mustard_spill==0) {
            audio.pause();
        }

        //BOOTH TABLE
        //var transformBoothTable = Mat4.identity();
        //transformBoothTable = transformBoothTable.times(Mat4.translation(-170, 8.3, 75));
        //transformBoothTable = transformBoothTable.times(Mat4.scale(9, 9, 9));
        //this.shapes.boothTable.draw(context, program_state, transformBoothTable, this.materials.boothTable);

        //BOOTH
        //shift factor changes how far apart the same facing chair will be
        const boothShiftFactor = 90;
        const boothDifferenceFactor = 60;
        const boothScaleFactor = Mat4.scale(45, 45, 45);
        const boothTableScaleFactor = Mat4.scale(13, 16, 13);
        for (let i = -2 ; i < 3 ; i++ ){
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
            transformLight = transformLight.times(Mat4.rotation(Math.PI/4, 0, 1, 0));
            transformLight = transformLight.times(Mat4.scale(2.5,2.5, 2.5));
            this.shapes.light.draw(context, program_state, transformLight.times(boothTableScaleFactor), this.materials.light);

            var transformBulb = Mat4.identity();
            transformBulb = transformBulb.times(Mat4.translation(-155, 80, 45 - i * boothShiftFactor));
            transformBulb = transformBulb.times(Mat4.scale(0.4,0.4, 0.4));
            this.shapes.bulb.draw(context, program_state, transformBulb.times(boothTableScaleFactor), this.materials.bulb);

            var transformSmoothie2 = Mat4.identity();
            transformSmoothie2 = transformSmoothie2.times(Mat4.translation(-10, 0, 0));
            var transformSmoothie = Mat4.identity();
            transformSmoothie = transformSmoothie.times(Mat4.translation(-125, 50, 40 - i * boothShiftFactor));
            transformSmoothie = transformSmoothie.times(Mat4.scale(0.075,0.075, 0.075));
            transformSmoothie = transformSmoothie.times(boothScaleFactor);
            this.shapes.smoothie.draw(context, program_state, transformSmoothie, this.materials.smoothie);
            this.shapes.smoothie.draw(context, program_state, Mat4.translation(-4, 0, 8).times(transformSmoothie), this.materials.smoothie2);
        }

        // TALL TABLE
        let tallTableTransform = Mat4.identity();
        tallTableTransform = tallTableTransform.times(Mat4.translation(141, 30, 12));
        tallTableTransform = tallTableTransform.times(Mat4.scale(1, 2, 15));
        // tallTableTransform = tallTableTransform.times(Mat4.rotation(Math.PI/2, 0, 0, 1));
        tallTableTransform = tallTableTransform.times(Mat4.rotation(Math.PI/2, 0, 0, 1));
        tallTableTransform = tallTableTransform.times(Mat4.scale(10, 10, 10));
        this.shapes.menu.draw(context, program_state, tallTableTransform, this.materials.tallTable);



        //STOOLS
        let stoolShiftFactor = 30;
        let stoolTransform = Mat4.translation(123, 14, 80 + stoolShiftFactor);
        for (let i = 0; i < 5; i++ ) {
            stoolTransform = stoolTransform.times(Mat4.translation(0, 0, -stoolShiftFactor));
            stoolTransform = stoolTransform.times(Mat4.scale(10, 10, 10));
            this.shapes.stool.draw(context, program_state, stoolTransform, this.materials.stool);
            stoolTransform = stoolTransform.times(Mat4.scale(0.1, 0.1, 0.1));
        }

        //BAR
        var barTransform = Mat4.identity();
        barTransform = barTransform.times(Mat4.translation(40, 22, 200))
                                   .times(Mat4.rotation(-Math.PI/2, 0, 1, 0))
                                   .times(Mat4.scale(25, 35, 45));
        this.shapes.bar.draw(context, program_state, barTransform, this.materials.bar);

        //MENUr4
        var model_transform_menu_front = Mat4.identity();
        const menuAngle = Math.PI;
        // const upwardShift = Mat4.translation(-9, 12, -18);
        // model_transform = model_transform.times(upwardShift).times(changeRotationCorner);
        // model_transform = model_transform.times(Mat4.rotation(-(mustard_angle/2) + (mustard_angle/2*Math.sin(6*Math.PI*t)) , Vec.of(0, 0, 1)));
        //     this.currentAngle = 6 * Math.PI * t;

        // model_transform = model_transform.times(extendLength).times(resetRotationCorner);

        model_transform_menu_front = model_transform_menu_front.times(Mat4.translation(-9, 12, -18));
        model_transform_menu_front = model_transform_menu_front.times(Mat4.rotation(Math.PI/2, 0, 1, 0));
        model_transform_menu_front = model_transform_menu_front.times(Mat4.rotation(-Math.PI/2, 0, 0, 1));
        var model_transform_menu_back = model_transform_menu_front;
        model_transform_menu_back = model_transform_menu_back.times(Mat4.translation(0.05, 0, 0));
        model_transform_menu_back = model_transform_menu_back.times(Mat4.scale(4, 4, 4));
        this.shapes.menu.draw(context, program_state, model_transform_menu_back, this.materials.menuBack);
        model_transform_menu_front = model_transform_menu_front.times(Mat4.translation(0, 0, -2.2));
        model_transform_menu_front = model_transform_menu_front.times(Mat4.rotation(-(menuAngle/2) + (menuAngle/2*Math.sin(Math.PI*t)) , 0, 1, 0));
        model_transform_menu_front = model_transform_menu_front.times(Mat4.translation(0, 0, 2.2));
        model_transform_menu_front = model_transform_menu_front.times(Mat4.scale(4, 4, 4));
        this.shapes.menu.draw( context, program_state, model_transform_menu_front, this.materials.menuFront);

        const transformCoke =
            // Mat4.translation(-20, 50, -99)
            Mat4.translation(-20, 50, -199)
                .times(Mat4.scale(35, 35, 35));
        var myMaterial;
        if(window.change_coke == 0) {
            myMaterial = this.materials.coke;
        }
        else if(window.change_coke == 1) {
            // myMaterial = this.materials.smiley;
            myMaterial = this.materials.cokeClue;
        }

        this.shapes.coke.draw(context, program_state, transformCoke, myMaterial);

        var transformOpenSign = Mat4.identity();
        transformOpenSign = transformOpenSign.times(Mat4.translation(150, 50, -199));
        transformOpenSign = transformOpenSign.times(Mat4.rotation(Math.PI/2, 0, 1, 0));
        // transformOpenSign = transformOpenSign.times(Mat4.scale(50, 50, 50));
        transformOpenSign = transformOpenSign.times(Mat4.scale(30, 30, 30));
        this.shapes.openSign.draw(context, program_state, transformOpenSign, this.materials.openSign);


        //CAR DECO
        // var transformCarDeco = Mat4.identity();
        // transformCarDeco = transformCarDeco.times(Mat4.translation(80, 50, -199));
        // transformCarDeco = transformCarDeco.times(Mat4.rotation(Math.PI/2, 0, 1, 0));
        // transformOpenSign = transformOpenSign.times(Mat4.scale(50, 50, 50));
        // transformCarDeco = transformCarDeco.times(Mat4.scale(30, 30, 30));
        // this.shapes.note.draw(context, program_state, transformCarDeco, this.materials.note);
        //TALL CUP
        var transformTallCup = Mat4.identity();
        transformTallCup = transformTallCup.times(Mat4.translation(0,3,0));
        transformTallCup = transformTallCup.times(Mat4.rotation(Math.PI, 0, 1, 0));
        this.shapes.tallCup.draw(context, program_state, transformTallCup, this.materials.tallCup);
        

        //TODO: NEED TO FIX TransformFloor is placed here to cover the image wrapping issue for now
        //NOTE: order matters for the floor and back wall transformations cuz of png
        //so plz don't change it thanks! -kim
        let transformFloor = Mat4.identity();
        transformFloor = transformFloor.times(Mat4.rotation(Math.PI/2, 1, 0, 0));
        // transformFloor = transformFloor.times(Mat4.scale(150, 200, 0));
        transformFloor = transformFloor.times(Mat4.scale(200, 300, 0));
        this.shapes.plane.draw(context, program_state, transformFloor, this.materials.floorBumpMap);


        //Place flooring and walls
        let transformBackWall = Mat4.identity();
        transformBackWall = transformBackWall.times(Mat4.translation(0,80,-200));
        // transformBackWall = transformBackWall.times(Mat4.scale(150,80,0));
        transformBackWall = transformBackWall.times(Mat4.scale(200,80,0));
        this.shapes.plane.draw(context, program_state, transformBackWall, this.materials.backWall);

        let transformLeftWall = Mat4.identity();
        // transformLeftWall = transformLeftWall.times(Mat4.translation(-150,80,0));
        transformLeftWall = transformLeftWall.times(Mat4.translation(-200,80,0));
        transformLeftWall = transformLeftWall.times(Mat4.rotation(Math.PI/2, 0,1,0));
        // transformLeftWall = transformLeftWall.times(Mat4.scale(200,80,0));
        transformLeftWall = transformLeftWall.times(Mat4.scale(300,80,0));
        this.shapes.plane.draw(context, program_state, transformLeftWall, this.materials.leftWall);

        let transformRightWall = Mat4.identity();
        // transformRightWall = transformRightWall.times(Mat4.translation(150,80,0));
        transformRightWall = transformRightWall.times(Mat4.translation(200,80,0));
        transformRightWall = transformRightWall.times(Mat4.rotation(Math.PI/2, 0,1,0));
        // transformRightWall = transformRightWall.times(Mat4.scale(200,80,0));
        transformRightWall = transformRightWall.times(Mat4.scale(300,80,0));
        this.shapes.plane.draw(context, program_state, transformRightWall, this.materials.rightWall);

        let transformCeiling = Mat4.identity();
        transformCeiling = transformCeiling.times(Mat4.translation(0,160,0));
        transformCeiling = transformCeiling.times(Mat4.rotation(Math.PI/2, 1, 0, 0));
        // transformCeiling = transformCeiling.times(Mat4.scale(150, 200, 0));
        transformCeiling = transformCeiling.times(Mat4.scale(200, 300, 0));
        this.shapes.plane.draw(context, program_state, transformCeiling, this.materials.ceiling);

        let transformFrontWall = Mat4.identity();
        // transformFrontWall = transformFrontWall.times(Mat4.translation(0,80,200));
        // transformFrontWall = transformFrontWall.times(Mat4.scale(150,80,0));
        transformFrontWall = transformFrontWall.times(Mat4.translation(0,80,300));
        transformFrontWall = transformFrontWall.times(Mat4.scale(200,80,0));
        this.shapes.plane.draw(context, program_state, transformFrontWall, this.materials.frontWall);

        let transformChecks = Mat4.identity();
        transformChecks = transformChecks.times(Mat4.translation(0, 1,0));
        transformChecks = transformChecks.times(Mat4.rotation(Math.PI/2, 1, 0, 0));

        // transformChecks = transformChecks.times(Mat4.scale(150, 200, 0));
        transformChecks = transformChecks.times(Mat4.scale(200, 300, 0));
        this.shapes.planeFloor.draw(context, program_state, transformChecks, this.materials.floorTile);



    }
}