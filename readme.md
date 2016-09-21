A readme.md file, including
Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
At least 5 user stories.

//My project 1 game is Tower of Hanoi.  I decided to take the game one step further and create a weight lifting themed version of Tower of
Hanoi entitled "Power Tower of Hanoi".  Since the game's setup involved three stacks with disc of varying weights from small to large on one
stack, I decided to create a theme where the disc represented 10lb, 20lb, 30lb and 40lb weights.  

The technologies that I've incorporated into this game are HTML, CSS, Javascript, JQuery, and jquery-ui.  In the HTML, I inserted a meta tag that would allow users to play this game on a mobile device.  I also linked to a Google Font style sheet in my HTML.  The CSS is straight forward with the exception of a div that I've never used before, the triangle.  This was the perfect div to use because it symbolized a weight rack.  For the background, I grabbed the University of South Carolina Gamecocks Weight Room image.  I both a Jquery library and a Jquery UI library to my HTML file.  The Jquery UI library came in handy when I utilized the functions of selecting and dropping a weight in the game.

My approach was to break this game down move by move.  The object of the game is to move the disc from the left most stack to the right most stack.  After extensive research on drag and drop, I decided to incorporate a 2 click method instead.  The first click selects the desired weight that the user would like to move, and the second click corresponds to the rack in which the user would like to drop the weight.

Instructions:  Click either the red base or top weight of the weight in which you'd like to move.  Next, click on the desired destination stack for which you'd like to drop the weight on.  If the selected weight in hand is less than the desired weight, or if the selected weight in hand is dropped upon and empty stack, the user will receive a drop.  Drop count would increase accordingly.  However, if the selected weight is greater than the top weight on the desired rack, the drop would be denied.

I wrote a jquery object to determine if stack 3 was a winner.  I figured by giving each weight a data weight, with 4 weights, a winning stack would be stack 3 with a total weight of 100.  This piece of code is still being tested.  I did not incorporate a reset button.  This is still being coded.  I would like to add functionality to where a user can increase the total unumber of weights in play.  My desire was to create an effective and stylish game that worked.

User stories
1.  As a user, I should be able to click on the weight rack of the weight in which I'd like to move and click on the desired rack in which I'd like to drop the weight on.
2.  As a user, I should be able to see how many successful drops that I've completed during the game.
3.  As a user, I should be denied if I attempted to drop a larger weight on top of a smaller weight.
4.  As a user, I should receive a message notifying me that I attempted an illegal drop.
5.  As a user, I should have an indication of if I've selected a weight (i.e. a weight is in hand).
6.  As a user, I should have notification that I've effectively released, or dropped a weight.
7.  As a user I should be able to reset the game.  (In progress)
8. As a user, I should be able to received an alert if I've won. (Alert in progress)
