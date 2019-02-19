var numberOptions = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var wins=0;
var losses=0;
var imageCrystal=$('src','.crystal-images');
var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var counter=0;
console.log(imageCrystal);
console.log(numberOptions);
$("#computerGuess").text(targetNumber);

$("#userScore").text(counter);

imageCrystal.attr("data-crystalvalue", numberOptions);

$(".crystal-images").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log(crystalValue);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      $("#userScore").append(counter);
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
console.log(counter);
  });

