$( document ).ready( function(){

var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var wins=0;
var losses=0;
var counter=0;
var num1= Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num2=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num3= Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num4= Math.floor(Math.random() * (12 - 1 + 1)) + 1;

$("#computerGuess").text(targetNumber);
$("#userScore").text(counter);
$("#win").text("Wins " + wins);
$("#loss").text("Losses " + losses);

function reset(){
  counter=0;
  num1= Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  num2=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  num3= Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  num4= Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#computerGuess").text(targetNumber);
  $("#userScore").text(counter);
}
function winner(){
  wins++;
  alert("Congrats, you won!!");
  reset();
  $("#win").text("Wins " + wins);
}
function looser(){
  losses++;
  alert("You lost, sorry...");
  reset();
  $("#loss").text("Losses " + losses);
}
$("#one").on("click", function() {
  counter=counter + num1;
  $("#userScore").text(counter);
  
    if (counter === targetNumber) {
      
      winner();
    }

    else if (counter >= targetNumber) {
    
      looser();
    }
  

  });
  $("#two").on("click", function() {
    counter=counter + num2;
    $("#userScore").text(counter);
      if (counter === targetNumber) {
        
        winner();
      }
  
      else if (counter >= targetNumber) {
      
        looser();
      }
    
  
    });
    $("#three").on("click", function() {
      counter=counter + num3;
      $("#userScore").text(counter);
        if (counter === targetNumber) {
          
          winner();
        }
    
        else if (counter >= targetNumber) {
        
          looser();
        }
      
      });
      $("#four").on("click", function() {
        counter=counter + num4;
        $("#userScore").text(counter);
          if (counter === targetNumber) {
            
            winner();
          }
      
          else if (counter >= targetNumber) {
          
            looser();
          }
        
      
        });
});
