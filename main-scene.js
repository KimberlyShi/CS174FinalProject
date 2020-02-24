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
 "assets/circles.mp3",
 "assets/heyjude.mp3",
 "assets/mygirl.mp3",
 "assets/neverbeentospain.mp3",
 "assets/partyintheusa.mp3",
 "assets/spanishflea.mp3",
 "assets/sundaybest.mp3"
];

var audio = document.createElement('audio');

var music_play=0;
window.music_play = music_play;

var count = 0;
var angle = 0;
var mov2 = 0
	
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
        // this.shapes = { "jukebox": new Shape_From_File( "assets/jukebox.obj" ) };
        // this.shapes = { "jukebox": new Shape_From_File( "assets/jukebox.obj" ) };
        this.shapes = {
            jukebox: new Shape_From_File( "assets/jukebox.obj" ),
            plane: new defs.Square(), //used floor
            ketchup: new Shape_From_File( "assets/cylinder.obj" ),
            mustard: new Shape_From_File( "assets/cylinder.obj"),
        };
        // Don't create any DOM elements to control this scene:
        //this.widget_options = { make_controls: false };
        this.materials =
            {
                jukebox: new Material( new defs.Textured_Phong( 1 ), { color: color( 0.5,0.5,0.5,1 ), ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" )}),
                //KIMBERLY: adjust colors later
                floor: new Material (new defs.Phong_Shader(), {ambient: 1, diffusivity: 1, specularity: 0.5,
                    color: color(239/255,222/255, 205/255, 1)}),
                floorTile: new Material (new defs.Textured_Phong(1), {ambient: 0.5, diffusivity: 0.5, specularity: 1, color: color(0, 0, 0, 1),
                    texture: new Texture("assets/checkered_floor.png")}),
                //KIMBERLY: change floorBumpMap coloring
                floorBumpMap: new Material (new defs.Textured_Phong(1), {ambient: 0.6, diffusivity: 1, specularity: 0.5, color: color(232/255, 184/255, 135/255, 1),
                    texture: new Texture("assets/floorBumpMap.png")}),
                mustard: new Material( new defs.Textured_Phong( 1 ),  { color: color( 1.0,1.0,0.0,1 ),
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) }),
                ketchup: new Material( new defs.Textured_Phong( 1 ),  { color: color( 1.0,0.0,0.0,1 ),
                    ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) }),

            };
        // this.jukebox = new Material( new defs.Textured_Phong( 1 ),  { color: color( 0.5,0.5,0.5,1 ),
        //     ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) });
        // Bump mapped:
    }

    display( context, program_state ) { 
        const t = program_state.animation_time/1000;

        //camera movement
        if (!context.scratchpad.controls) {
            this.children.push(context.scratchpad.controls = new defs.Movement_Controls());
            program_state.set_camera(Mat4.translation(0, 0, -5));    // Locate the camera here (inverted matrix).
        }
		
        program_state.projection_transform = Mat4.perspective( Math.PI/4, context.width/context.height, 1, 500 );
        // A spinning light to show off the bump map:
        program_state.lights = [ new Light(
            Mat4.rotation( t/300,   1,0,0 ).times( vec4( 3,2,10,1 ) ),
            color( 1,.7,.7,1 ), 100000 ) ];
        var mov = 0.005*count + 1;
        var max_move = 1.86;

		if (mov > max_move) {
            mov = max_move
            angle += 0.01
			mov2 += 0.01
        }

		console.log(mov)
		count += 1.0;

        // const model_transform = Mat4.translation( 0, 3, 0 ).times(Mat4.rotation(-Math.PI/4,   0,1,0 ));
        let model_transform =
            Mat4.translation( 0, 1.4, 0 ).times(Mat4.rotation(-Math.PI/4,   0,1,0 ));
        model_transform = model_transform.times(Mat4.scale(0.5,0.5,0.5));
        this.shapes.jukebox.draw( context, program_state, model_transform, this.materials.jukebox );
        // let trJukebox = Mat4.identity();
        // trJukebox = trJukebox.times( Mat4. translation([0,3,0]));
        // trJukebox = trJukebox.times( Mat4.rotation(-Math.PI/4, 0,1,0));
        // this.shapes.jukebox.draw( context, program_state, trJukebox, this.materials.jukebox );

        const model_transform1 =
            Mat4.translation( mov, 0.45, 0 )
                .times(Mat4.rotation(0,0,1,0 ))
                .times(Mat4.scale(0.05,0.2,0.1,1.0 ))
                .times(Mat4.rotation(Math.PI/2,1,0,0));

        const model_transform2 =
            Mat4.translation( 2, 0.45, 0 )
                .times(Mat4.rotation(0,0,1,0 ))
                .times(Mat4.scale(0.05,0.2,0.1,1.0 ))
                .times(Mat4.translation(mov2,0,0 ))
                .times(Mat4.rotation(Math.PI/2,1,0,0));


        var v1 = model_transform1.times( vec4( 1,1,1,1 ) );
        var v2 = model_transform2.times( vec4( 1,1,1,1 ) );

        var dist = Math.sqrt( (v1[0]-v2[0])**2 + (v1[1]-v2[1])**2 + (v1[2]-v2[2])**2 );

        //if(dist>2) collision
        //console.log("####");
        console.log(dist);

  //      console.log(music_play)


        this.shapes.ketchup.draw( context, program_state, model_transform1, this.materials.ketchup );
		
		this.shapes.mustard.draw( context, program_state, model_transform2.times(Mat4.rotation(angle,0,0,1 ) ), this.materials.mustard );
        //console.log("qqq")
        //console.log(window.music_play)
		if (window.music_play==1) {
		     window.music_play = 2
			 audio.src = sounds[Math.floor(Math.random() * sounds.length)];
             audio.loop = false;
             audio.play(); 
		} else if (window.music_play==0) {
			 audio.pause();
		}

		let transformFloor = Mat4.identity();
		transformFloor = transformFloor.times(Mat4.rotation(Math.PI/2, 1, 0, 0));
		transformFloor = transformFloor.times(Mat4.scale(100, 100, 0));
		transformFloor = transformFloor.times(Mat4.translation(0,-0.5,0));

        //draw the floor
        //KIMBERLY: will need to change
        this.shapes.plane.draw(context, program_state, transformFloor, this.materials.floor);
    }
}

