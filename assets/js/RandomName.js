// Create array to store Names
var namesArray = [];

// When user hits enter
$("#nameInput").keypress(function (event){
  if (event.which === 13) {   //checks if 'enter' was pressed
    // Extract string from #nameInput
    var name = $(this).val();
    // Add name to array
    namesArray.push(name);
    // Display name in #listArea
    $("#listArea").append("<li>"+ name +"</li>");
    // Clear input field
    $("#nameInput").val("");
  };
});

// Hover over name to reveal delete button
$("#listArea").on("mouseenter", "li", function(){
  $(this).append("<i class='deleteBtn fa fa-trash-o' aria-hidden='true'></i>");
});

$("#listArea").on("mouseleave", "li", function(){
  $(".deleteBtn").remove();
});

// Delete button
$("#listArea").on("click", ".deleteBtn", function(event){
  // Save name to be deleted into variable
  var nameToRemove = $(this).parent().text();
  // Remove name from array
  namesArray.splice($.inArray(nameToRemove, namesArray),1);

  // Remove name from page
  $(this).parent().slideUp(250, function(){
    $(this).remove();
  });

  event.stopPropagation();
});

// Pick Random Name button
$("#randomBtn").on("click", function(){
  // Checks to see if anything is in array
  if (namesArray.length === 0){
    alert("I need some names to pick from. Please add some to the list.");
  // If there is only one item in the array
  } else if (namesArray.length === 1) {
    alert("It's not very random if there's only one name in the list, please add some more.");
  } else {
    // Save random number as a variable - make sure not to go higher than length of array
    var random = Math.floor(Math.random() * namesArray.length);
    // Display winning name on page
    $("#winnerArea").text(namesArray[random]);
    // Change Button text
    $("#randomBtn").text("Pick Again");
  };
})

// Clear All button
$("#clearAllBtn").on("click", function(){
  // Clear listArea
  $("#listArea").html("");
  // Clear winnerArea
  $("#winnerArea").html("");
  // Clear array
  namesArray = [];
  // Change #randomBtn back to original text
  $("#randomBtn").text("Pick Random Names");
});
