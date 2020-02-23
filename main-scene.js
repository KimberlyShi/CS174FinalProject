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
        this.shapes = { "jukebox": new Shape_From_File( "assets/jukebox.obj" ) };

        // Don't create any DOM elements to control this scene:
        //this.widget_options = { make_controls: false };

        this.jukebox = new Material( new defs.Textured_Phong( 1 ),  { color: color( 0.5,0.5,0.5,1 ),
            ambient: 1, diffusivity: 1, specularity: 1, texture: new Texture( "assets/pink.png" ) });
        // Bump mapped:
    }

    display( context, program_state ) { 
        const t = program_state.animation_time;

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

        const model_transform =
            Mat4.translation( 0, 1, 0 )
                .times(Mat4.rotation(-Math.PI/4,   0,1,0 ));
  //      console.log(music_play)
        this.shapes.jukebox.draw( context, program_state, model_transform, this.jukebox );

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
 
    }
}

