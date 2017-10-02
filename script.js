/*

I used this jQuery resource for dynamically creating a div with an ID and Class.
From: https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery

var $div = $("<div>", {id: "foo", "class": "a"});
$div.click(function(){  });
$("#box").append($div);


I'm using this to create a for loop to dynamically generate a specific number of these divs.
https://stackoverflow.com/questions/16262462/generate-a-set-number-of-divs-with-a-certain-class

Use a for loop:

$(document).ready(function() {
  var nrOfDivs = 12 // for example
  for (i=0;i<nrOfDivs;i++) {
    $('#divToAppendTo').append('<div class="music_visualizer_bar"></div>');
  };

});
Just change the nrOfDivs to the amount of divs you need :)

*/

$(document).ready(function() {
  var $div = $("<div>", {"class": "divGrids"});
  $div.click(function(){ /* ... */ });
  $("#main-container").append($div);

var numberOfDivs = 15
for (i=0;i<numberOfDivs;i++) {
  $('#main-container').append('<div class="divGrids"></div>');
};

$('#main-container').on('mouseenter', '.divGrids', function() {
  $(this).addClass('hoverOn');
});

$('#main-container').on('mouseleave', '.divGrids', function() {
  $(this).removeClass('hoverOn');
});




});
