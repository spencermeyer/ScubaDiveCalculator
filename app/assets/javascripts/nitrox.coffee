# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  # Initialization code goes here
  console.log "hello from coffeescript in nitrox coffee"

  $('#calcBtn2').on 'click', (event) =>
      console.log "calcButton2 pressed"
      alertVariable = ""
      doCalc=true
      oxyconc=document.getElementById('oxyconc').value
      depth1=document.getElementById('depth').value
      if doCalc
        mod = 1.4/(oxyconc/100) * 10.toFixed
        document.getElementById("mod1").innerHTML = mod



