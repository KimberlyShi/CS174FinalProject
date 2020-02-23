import {tiny, defs} from './common.js';

                                                  // Pull these names into this module's scope for convenience:
const { vec3, vec4, color, Mat4, Light, Shape, Material, Shader, Texture, Scene } = tiny;
const { Triangle, Square, Tetrahedron, Windmill, Cube, Subdivision_Sphere } = defs;

export class Jukebox_Base extends Scene
{                                          // **Transforms_Sandbox_Base** is a Scene that can be added to any display canvas.
                                           // This particular scene is broken up into two pieces for easier understanding.
                                           // The piece here is the base class, which sets up the machinery to draw a simple 
                                           // scene demonstrating a few concepts.  A subclass of it, Transforms_Sandbox,
                                           // exposes only the display() method, which actually places and draws the shapes,
                                           // isolating that code so it can be experimented with on its own.
  constructor()
    {                  // constructor(): Scenes begin by populating initial values like the Shapes and Materials they'll need.
      super();

      // Load the model file:
      //this.shapes = { "jukebox": new Shape_From_File( "assets/jukebox.obj" ) };

    }
}


export class Play_Jukebox extends Jukebox_Base
{                                                    // **Transforms_Sandbox** is a Scene object that can be added to any display canvas.
                                                     // This particular scene is broken up into two pieces for easier understanding.
                                                     // See the other piece, Transforms_Sandbox_Base, if you need to see the setup code.
                                                     // The piece here exposes only the display() method, which actually places and draws 
                                                     // the shapes.  We isolate that code so it can be experimented with on its own.
                                                     // This gives you a very small code sandbox for editing a simple scene, and for
                                                     // experimenting with matrix transformations.
  /*display( context, program_state )
    {                                                 // display():  Called once per frame of animation.  For each shape that you want to
                                                     // appear onscreen, place a .draw() call for it inside.  Each time, pass in a
                                                     // different matrix value to control where the shape appears.

                                                     // Variables that are in scope for you to use:
                                                     // this.shapes.box:   A vertex array object defining a 2x2x2 cube.
                                                     // this.shapes.ball:  A vertex array object defining a 2x2x2 spherical surface.
                                                     // this.materials.metal:    Selects a shader and draws with a shiny surface.
                                                     // this.materials.plastic:  Selects a shader and draws a more matte surface.
                                                     // this.lights:  A pre-made collection of Light objects.
                                                     // this.hover:  A boolean variable that changes when the user presses a button.
                                                     // program_state:  Information the shader needs for drawing.  Pass to draw().
                                                     // context:  Wraps the WebGL rendering context shown onscreen.  Pass to draw().                                                       

                                                // Call the setup code that we left inside the base class:
      super.display( context, program_state );


      //Start coding down here!!!!
      
                                                  // From here on down it's just some example shapes drawn for you -- freely 
                                                  // replace them with your own!  Notice the usage of the Mat4 functions 
                                                  // translation(), scale(), and rotation() to generate matrices, and the 
                                                  // function times(), which generates products of matrices.

      const blue = color( 0,0,1,1 ), yellow = color( 1,1,0,1 );

                                    // Variable model_transform will be a local matrix value that helps us position shapes.
                                    // It starts over as the identity every single frame - coordinate axes at the origin.
      let model_transform = Mat4.identity();
                                                     // Draw a hierarchy of objects that appear connected together.  The first shape
                                                     // will be the "parent" or "root" of the hierarchy.  The matrices of the 
                                                     // "child" shapes will use transformations that are calculated as relative
                                                     // values, based on the parent shape's matrix.  Moving the root node should
                                                     // therefore move the whole hierarchy.  To perform this, we'll need a temporary
                                                     // matrix variable that we incrementally adjust (by multiplying in new matrix
                                                     // terms, in between drawing shapes).  We'll draw the parent shape first and
                                                     // then incrementally adjust the matrix it used to draw child shapes.

                                                     // Position the root shape.  For this example, we'll use a box 
                                                     // shape, and place it at the coordinate origin 0,0,0:


      model_transform = model_transform.times( Mat4.translation( 0,0,0 ) );
      this.shapes.jukebox.draw( context, program_state, model_transform);

      model_transform = model_transform.times( Mat4.translation( 0,0,0 ) );
                                                                                              // Draw the top box:
      this.shapes.box.draw( context, program_state, model_transform, this.materials.plastic.override( yellow ) );
      
                                                     // Tweak our coordinate system downward 2 units for the next shape.
      model_transform = model_transform.times( Mat4.translation( 0, -2, 0 ) );
                                                                           // Draw the ball, a child of the hierarchy root.
                                                                           // The ball will have its own children as well.
      this.shapes.ball.draw( context, program_state, model_transform, this.materials.metal.override( blue ) );
                                                                      
                                                                      // Prepare to draw another box object 2 levels deep 
                                                                      // within our hierarchy.
                                                                      // Find how much time has passed in seconds; we can use
                                                                      // time as an input when calculating new transforms:
      const t = this.t = program_state.animation_time/1000;

                                                      // Spin our current coordinate frame as a function of time.  Only do
                                                      // this movement if the button on the page has not been toggled off.
      if( !this.hover )
        model_transform = model_transform.times( Mat4.rotation( t,   0,1,0 ) )

                                                      // Perform three transforms in a row.
                                                      // Rotate the coordinate frame counter-clockwise by 1 radian,
                                                      // Scale it longer on its local Y axis,
                                                      // and lastly translate down that scaled Y axis by 1.5 units.
                                                      // That translation is enough for the box and ball volume to miss
                                                      // one another (new box radius = 2, ball radius = 1, coordinate
                                                      // frame axis is currently doubled in size).
      model_transform   = model_transform.times( Mat4.rotation( 1,     0,0,1 ) )
                                         .times( Mat4.scale      ( 1,   2, 1 ) )
                                         .times( Mat4.translation( 0,-1.5, 0 ) );
                                                                                    // Draw the bottom (child) box:
      this.shapes.box.draw( context, program_state, model_transform, this.materials.plastic.override( yellow ) );

                              // Note that our coordinate system stored in model_transform still has non-uniform scaling
                              // due to our scale() call.  This could have undesired effects for subsequent transforms;
                              // rotations will behave like shears.  To avoid this it may have been better to do the
                              // scale() last and then immediately unscale after the draw.  Or better yet, don't store
                              // the scaled matrix back in model_transform at all -- but instead in just a temporary
                              // expression that we pass into draw(), or store under a different name.
							 
    } */
}