// Get a target number between 19 - 120
var targetNumber = Math.floor((Math.random()*101)+19);

// Get a variable to keep the count.
var count = 0;

// Get a variable to keep track of the wins and the losses.
var wins = 0;
var losses = 0;

// Create an array of images. 
var imageOptions = ["../week-4-game/assets/images/ruby.jpg", 
					"../week-4-game/assets/images/redruby.jpg", 
					"../week-4-game/assets/images/redball.jpg", 
					"../week-4-game/assets/images/download.jpg"];

// For loop images in the array and assign class, value, and display images. 
for (var i = 0; i < imageOptions.length; i++) {
	var imageChoice = $("<img>");
	imageChoice.addClass("crystalOptions");
	imageChoice.attr("src", imageOptions[i]);
	imageChoice.attr("data-crystalValue", Math.floor(Math.random()*12)+1);
	$("#choices").append(imageChoice);
}
// Create a function that gives the images functionality when clicked. 
$(document).on("click", ".crystalOptions", function() {
	// Take the value of .this and put it into count.
	var imageValue = ($(this).data("crystalValue", "data-crystalValue"));
	console.log(imageValue);
	//Create if/else statements 

});
// When target number reached game restarts. 
