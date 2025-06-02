// click function to generate a body part
$(".body-btn").on( "click", function() {
  generateBody();
} );

// click function to generate a bg
$(".bg-btn").on( "click", function() {
  generateBg();
} );

// this is our list (called an array in js) of elements that we want to randomly choose from and create
var bodyParts = [
  '<img class="random body" src="1.ico"></img>',
  '<img class="random body" src="2.ico"></img>',
  '<img class="random body" src="3.ico"></img>',
  '<img class="random body" src="4.ico"></img>'
];

// this variable is what we will be using to create a unique identifier for each created element
var bodyNum = 0;

function generateBody() {

  // this randomly selects an element from the array of bodyParts above and assigns it to the bodyResult variable
  var bodyResult = bodyParts[Math.floor(Math.random() * bodyParts.length)];

  // here we need to create a uniqueId for each element created so we don't end up randomly positioning each element every time we add a new one
  var uniqueId =  "body" + bodyNum++;

  // this function is what will clone the selected bodyResult
  $(bodyResult).clone().addClass(uniqueId).appendTo(".body-zone");

  // determines the scope of where it will be positioned
  var maxLeft = $(window).width() - $('.' + uniqueId).width();
  var maxTop = $(window).height() - $('.' + uniqueId).height();

  // assigns random value to top and left
  var leftPos = Math.floor(Math.random() * (maxLeft + 1));
  var topPos = Math.floor(Math.random() * (maxTop));

  // applies the random top and left to the element using the uniqueId
  $('.' + uniqueId).css({
    top: topPos,
    left: leftPos
  });

  // make elements draggable
  $( ".body" ).draggable({
    stack: '.body'
  });

  // delete on double click
  // this needs to be nested in our generator function, as it won't recognize the new elements that we create
  $( ".random" ).on( "dblclick", function() {
    $(this).hide();
  } );

}

// --------------------------
// now we just repeat this for each new button we want to add, this time for backgrounds

// here we need to go through each line and update some of the function names to be more specific to backgrounds

// we create a new array of backgrounds, named bgParts instead of bodyParts
var bgParts = [
  '<img class="random bg" src="bg1.jpg"></img>',
  '<img class="random bg" src="bg2.jpg"></img>',
  '<img class="random bg" src="bg3.jpg"></img>',
  '<img class="random bg" src="bg4.gif"></img>'
];

// a new variable for bg unique ids
var bgNum = 0;

// our bg generator function
function generateBg() {
  var bgResult = bgParts[Math.floor(Math.random() * bgParts.length)];

  var uniqueId =  "bg" + bgNum++;

  // here we make sure to append to the bg-zone element, so it will appear behind our body parts
  $(bgResult).clone().addClass(uniqueId).appendTo(".bg-zone");

  var maxLeft = $(window).width() - $('.' + uniqueId).width();
  var maxTop = $(window).height() - $('.' + uniqueId).height();

  var leftPos = Math.floor(Math.random() * (maxLeft + 1));
  var topPos = Math.floor(Math.random() * (maxTop));

  $('.' + uniqueId).css({
    top: topPos,
    left: leftPos
  });

  $( ".bg" ).draggable({
    stack: '.bg'
  });

  $( ".random" ).on( "dblclick", function() {
    $(this).hide();
  } );

}