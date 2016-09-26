// AM: Consider what this game would look like if you wrapped everything in an object (not necessarily using classes). Would help keep the global namespace a little bit cleaner!
//Global variables
var selectedBox;
var active = false; //active denotes that a weight has been picked up.
var dropCount = 0;  //Global variable to keep track of successful drops.

//Functions to play the game of Tower of Hanoi
function pickBox(column) {
  active = true;
  // AM: Along the lines of commented-out code, I would also remove any debugging console.log statements from the final submission.
  console.log("hello")
  selectedBox = column.children().eq(0);
  // AM: Cool!
  selectedBox.effect("shake",{times:4},"slow"); //This is to test effect on selected box.
  // AM: I think it would be very helpful if when a weight is selected it also changes color. That way you know what is selected just in case you miss the wiggle.
  // AM: On a related note, it would also be helpful if each column was highlighted when the user hovers over it. That way they know they are about to drop the selected weight in a valid place on the page.
  console.log(selectedBox);
};

function moveBox(box,dest) {
  box.effect( "bounce",{times:4},"fast");   //This is to test shake effect.
  dest.prepend(box);
  console.log(selectedBox);
  dropCount++;
  $("p").html("DROPS: " + dropCount);  //Displays successful drops in p element of HTML.
  //if (parseInt($("#stack3").find('*').attr('data-weight')) === 100) {    //We need to retrieve all of the descendant elements to determine if user is a winner.  However, this isn't working.

  console.log(dropCount);
};

//function to determine if selected weight is eligible to be dropped onto a stack.
function checkBox(box,dest) {
  var boxWeight;
  var destWeight;
  // AM: I like this system. Nice and concise.
  boxWeight = parseInt(box.attr('data-weight'));
  destWeight = parseInt(dest.children().eq(0).attr('data-weight')) || 0;  //This line of code sets destWeight to the first weight on top of the stack, or 0 if the stack is empty.
  console.log(boxWeight)
  console.log(destWeight)
  if (destWeight === 0) {
    return true;
  }
  else if (boxWeight < destWeight) {
    return true;
  }
  else {
    // AM: Should replace this with a more useful error phrase (i.e., "This weight is too big for this column!")
    alert("SOMETHING WENT REALLY WRONG HERE!  PLEASE TRY AGAIN.");
    return false;
  }
  console.log(selectedBox);
};

$(".column").on('click',function(){
  if (active === true) {
    if (checkBox(selectedBox, $(this)) === true) {
      moveBox(selectedBox, $(this));
      active = false;
    }
    else {
      active = false; //test
      return false;
    }
  }
  else if (active === false){
    pickBox($(this));
    active = true;
  }
  if ($("#stack3").children('.box').length === 4) {
    setTimeout(function() {
      alert("YOU WIN!!!");
    }, 1000);
  }
  else {
    console.log("You're still playing?");
  }
});
// AM: Nice, all under 70 lines of code!
