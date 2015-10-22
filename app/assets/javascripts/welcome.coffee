# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  # Initialization code goes here
  console.log "hello from coffeescript in welcome (air) coffee"

#  $('[data-toggle="tooltip"]').tooltip()
  
# // tooltips are the little labels that pop up when you hover over a button 
#$(document).ready(function(){
#  $('[data-toggle="tooltip"]').tooltip(); 
#});

  calcBtn.addEventListener "click", (event) =>
    console.log "calcButton pressed welcome coffee air"


#      // Define in advance what happends when a different tank size is 
#      // selected.
#        function calcReserve(){
#          tank=document.getElementById('sel2').value;
#          reserve = 100*((tank - bConsumption) / tank).toFixed(2);
#          document.getElementById("reserve").innerHTML = reserve;
#        };