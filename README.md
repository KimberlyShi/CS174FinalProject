# Night in the Diner - CS 174 Final Project

Kimberly Shi, Maggie Huang, Albert Han, Katherine Chong

<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/beginSceen_readme.png" width="750">
<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/rules_readme.png" width="750">

## Setup ##

Windows: Run host.bat and open localhost:8000 on Google Chrome. \
Mac: Run host.command and open localhost:8000 on Google Chrome.

## Story ##

You just woke up in an empty diner. It's quiet, you're alone, and the door won't budge. You've tried breaking the door and the windows, but nothing has worked. However, you notice that there are sublte hints around the diner. Navigate through the hints one by one, and escape the diner!

<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/readme1.png" width="750">
<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/readme2.png" width="750">
<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/readme3.png" width="750">
<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/readme4.png" width="750">

## Objective ##

Your goal is to go through the entire room, navigating from one clue to the next, until you reach the final clue and be able to exit. Each clue will give you a hint to the next one, with the first clue being given to you. There are a total of 9 clues.
<details>
  <summary>Solution: Spoiler warning</summary>
  
  *  Clue 1: The given clue is "Take a seat!" Examine the stools in front of the tall table. The leftmost stool has a small piece of paper underneath it. Clicking the stool will move the stool, and clicking the note will reveal the next clue. 
  *  Clue 2: The note underneath the stools says "Time to order! Let's see what's offered here...". Each table on a booth has a menu standing up on it. However, only one menu (the second from the Jukebox) will open when you click it. Clicking this particular menu will get you to the next clue.
  *  Clue 3: The menu reads "While waiting for your food, why don't you check out some of the art?" Observe the four circular posters between the jukebox and the glass door. Clicking on the mimosa (Original Orange), coffee (Dreamy Cafe Latte), and martini (After Dark) posters will not lead to anything, but clicking the Coke poster will change the poster. This new poster will contain your next clue.
  *  Clue 4: The clue on the new coke poster reads "Your food has arrived! Would you like some sauce on the side?" Rotating right back to the tall table allows you to take note of the two ketchup and two mustard bottles. Clicking the left three bottles will yield no result, but clicking the leftmost bottle, or the red bottle closest to the door, will make it collide into the mustard bottle, splitting some mustard onto the table to reveal your next clue.
  *  Clue 5: The spilled mustard reads "Oops! Looks like you need to clean up your mess!" Move the camera right and notice the two napkin boxes. Clicking the rightmost napkin box (the one closer to the bar) will make it turn around, revealing the next clue.
  *  Clue 6: The clue behind the napkin box reads "Getting a bit thirsty...". Rotating right to the bar, you will be able to see five green bottles on the shelf and one bottle on the bar. Clicking the five bottles will make them shatter into various formations, but clicking on the bottle on the table will make the orange ball fall and break the bottle on the bar. 
  *  Clue 7: Clicking on the glass bottles on the shelf will reveal different shard patterns. Finally, clicking on the bottle on the bar and the subsequent broken shards will reveal a diamond, and clicking the diamond will reveal a message "You sure are clumsy... But at least you found your diamond. Dance to a bit of music to celebrate! Keep clickin 'til you find your jam". If you turn back around and click on the jukebox, music will begin to play. Keep listening to get the next clue!
  *  Clue 8: The third song in the playlist will eventually say "walk out the door." Click the handle of the door, and you're free! The screen will fade to the final screen. Refresh to replay the entire game!
  
</details>

## Controls ##

* space: up
* w : forward
* a : left
* s : back
* d : right
* z : down
* , : rotate left 
* . : rotate right

## Gameplay ##
[![Diner Gameplay](https://res.cloudinary.com/marcomontalbano/image/upload/v1583827473/video_to_markdown/images/youtube--0LPZJqLZg6s-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/gxgYFVLbjtc "Diner Gameplay")

## Advanced Features ##
1. Mouse Clicking: Clicking on objects will cause them to change behavior or position and reveal the next clue based on the color of the pixel the mouse clicks on.
2. Blender Objects: Almost all of the objects in this project were created by us on Blender. UV unwrapping was utilized for texture mapping for simple objects where each face was given a solid color (jukebox, stool, booth, etc.) while more complex objects that had hints on the textures were designed with Adobe Illustrator, such as the posters.
3. Collision Detection (see spoilers below)
4. Physics Based Animation (see spoilers below)
<details> 
  <summary>SPOILERS: Advanced Feaures</summary>
  (3) Collision Detection was utilized in the collision between the ketchup bottle and the mustard bottle. <br/>
  (4) Physics Based Animation: Physics was required to calculate the trajectory of the ball after it fell from the shelf, hit the bottle, and bounced before falling onto the ground. Physics was also utilized in calculating the path that the mustard bottle fell in.
</details>

## Design Process ##
<img src="https://github.com/KimberlyShi/CS174FinalProject/blob/master/assets/readmeDesign.png" width="750">

## Contributions ##
Maggie: I implemented our project's advanced features, including mouse picking by color, collision detection, and the physics-based trajectory of the orange for one of our clues. The mouse picking was used for every interactive feature on our game (each clue), and was based on the color of the pixel clicked on by the mouse. When this color corresponds to a color of an object, that object will perform a certain task. I also implemented some of the clues, including Clue 1(stool), Clue 4 (ketchup and mustard, which included the collision detection), Clue 5 (the napkin box), Clue 6 and 7 (the shattering of the bottle and clicking on the diamond, which included physics), and Clue 8 (the jukebox). With the jukebox, I also loaded music files so it would play a different song every time you clicked on it, and I added a sound effect for the mustard and ketchup clue. I also set up the camera angles that corresponded to the buttons below the game, and changed the camera angle for 4 of the clues so when you click on an object related to a clue, the camera location will change.

Albert: I was responsible for creating the majority of the object and mtl files on Blender, despite not having any knowledge with Blender prior to this project. I also spent a majority of the early stages of the project figuring out how to export the object files correctly so that they would show up correctly in the final scene. I was also responsible for creating the texture mapping images for almost all of the objects in the room. Earlier in the project, I used Blender's Smart UV Unwrapping feature and Texture paint to color the objects (ex: Jukebox, Bar, Booth), but later in the project I used Adobe Illustrator to create simple texture map images and then arranged the object's faces to the respective color on Blender (ex: sundae, shelf, door). Towards the later stages of the project, I used Illustrator to design all of the posters (except two of the circular posters), windows, and home/rules/ending screens of the game. I also helped place several objects into the room, such as the booths and the menus, and implemented Clue 2 (Menu). Lastly, I did all of the voice recordings in the demo video.


Kimberly: I set up the initial environment of the escape room by building the hierarchy using class inheritance that connects each scene element such as camera control to mouse movement, adding features of userbility such that the user has complete control over the scene. I built the dimensions and layout of the room with the initial camera pan. I used UV image wrapping over the objects so that each object would be able to render and display the texture map images. Additionally, I set up the gaming infrastructure such that each subsequent clue is only accessible upon completing the previous clue. Subsequently, I did object placements using matrix transformations according to each clues' functionality. The different scenes from transitioning from the beginning screen to the end screen are implemented with color mouse clicking and adjusted the transition for the end scene to eventually fade from a void to our end scene. I changed the camera angles for the other 4 clues so that when you click on an object related to the clue, the camera shifts. I filmed parts of the video and edited all the sound and video recordings of the presentation video. I designed some of the 2D designs, such as the coke and martini poster. I implemented Clue 3 (poster) using color mouse clicking as well as parts of Clue 6 and 7 where the glass bottles would be shattered in randomized patterns.

Katherine: In the beginning of the project, I communicated with the rest of the team to determine the overall aesthetic and object placement of the project. I produced a retro color scheme and initial birds-eye view floor plan, though we ended up making a lot of changes for the final product. I learned how to use Blender in order to create object and mtl files. In addition, I used blender's Smart UV unwrapping to create texture maps of the objects and the Shader Editor to map colors and complex images created on Clip Studio Paint onto the objects I created. I helped place and move several objects into their places in our final scene.


## Sources ##
Coke image: https://www.cleanpng.com/png-neon-sign-portable-network-graphics-logo-light-emi-7334176/ \
Diamond object: https://www.turbosquid.com/3d-models/free-perfect-model/675252 \
Cat object: https://www.turbosquid.com/3d-models/low-polycatanimal-model-1340490 \
Crumbled piece of paper: https://www.hiclipart.com/free-transparent-background-png-clipart-nxisw/download
