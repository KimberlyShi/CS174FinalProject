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
  *  Clue 7: The broken shards will reveal a diamond, and clicking the diamond will reveal a message "You sure are clumsy... But at least you found your diamond. Dance to a bit of music to celebrate! Keep clickin 'til you find your jam". If you turn back around and click on the jukebox, music will begin to play. Keep listening to get the next clue!
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

## Gameplay ##[![Diner Gameplay](https://res.cloudinary.com/marcomontalbano/image/upload/v1583827074/video_to_markdown/images/youtube--HbC0wbkUt9s-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=HbC0wbkUt9s&feature=youtu.be "Diner Gameplay")

## Advanced Features ##
1. Mouse Clicking: Clicking on objects will cause them to change behavior or position and reveal the next clue.
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
