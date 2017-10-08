/*
DONE: function to make the grid
DONE: append the box element into the existing container element
DONE: add the css stylling to the new elements
DONE: use hover event to change css when covering over one of the boxes
DONE: function to clear the container
DONE: prompt for user to enter a number
DONE: create new grid with dimensions from users response

optional:
Form with radial buttons to allow for selectiing drawing styles:
funciton for normal black
function to generate random RGB value for background of hovered box
function to generate the gradient effect
*/


$(document).ready(function() {
  makeGrid(16);
  makeBlack();
});

function makeGrid(gridSize) {
  for (var x = 0; x < gridSize; x++) {
    for (var y = 0; y < gridSize; y++) {
      $(".container").append("<div class='square'></div>");
    };
  };
};

function makeBlack(){
  $(".square").mouseover(function() {
    $(this).addClass("hover-square");
  });
};

function makeRGB(){
  $(".square").mouseover(function() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
      var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        $(this).css('background-color', randomColor)
  });
};


function makeGradient() {
  $('.square').css('background-color', 'black');
  $('.square').css('border-radius', 1);
  $('.square').on('mouseover', function() {
    var currentOpacity = $(this).css("opacity");
    console.log(currentOpacity);
    if(currentOpacity === 0)
      return currentOpacity
    else
      currentOpacity -= 0.10
    $(this).css("opacity", currentOpacity);
  });
};


function promptBoxBlack(){
var gridSize = prompt("Enter a number between 2 and 100.", "64");
$('.square').remove();
makeGrid(gridSize);
$('.square').width((560/gridSize)-1);
$('.square').height((560/gridSize)-1);
makeBlack();
};

function promptBoxRGB(){
var gridSize = prompt("Enter a number between 2 and 100.", "64");
$('.square').remove();
makeGrid(gridSize);
$('.square').width((560/gridSize)-1);
$('.square').height((560/gridSize)-1);
makeRGB();
};

function promptBoxGradient(){
var gridSize = prompt("Enter a number between 2 and 100.", "64");
$('.square').remove();
makeGrid(gridSize);
$('.square').width((560/gridSize)-1);
$('.square').height((560/gridSize)-1);
makeGradient();
};
