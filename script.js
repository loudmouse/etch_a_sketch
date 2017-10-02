window.onload = function() {
  var $div = $("<div>", {id: "foo", "class": "a"});
  $div.click(function(){ /* ... */ });
  $("#main-container").append($div);
}

  /*
  var $div = $("<div>", {id: "foo", "class": "a"});
  $div.click(function(){  });
  $("#box").append($div);
  */
