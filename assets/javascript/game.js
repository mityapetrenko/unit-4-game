$( document ).ready( function(){
//Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12]
var wins=0;
var losses=0;
var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var counter=0;

$("#computerGuess").text(targetNumber);
$("#userScore").text(counter);
$("#winlose").text("Wins " + wins);
$("#winlose").text("Losses " + losses);
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal=$("<img>");
    imageCrystal.addClass("crystal-image");
imageCrystal.attr("data-crystalvalue", numberOptions[i]);
console.log(imageCrystal);
}

$(".crystal-images").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log(counter);
    console.log(crystalValue)
    if (counter === targetNumber) {
      
      wins++; counter=0; score=0;
    }

    else if (counter >= targetNumber) {
    
      losses--; counter=0;
    }
  

  });
});
