# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  # Initialization code goes here
  console.log "hello from coffeescript in nitrox coffee"
  $('[data-toggle="tooltip"]').tooltip()

  $('#calcBtn2').on 'click', (event) =>
      console.log "calcButton2 pressed"
      alertVariable = ""
      doCalc=true
      oxyconc=document.getElementById('oxyconc').value
      depth1=document.getElementById('depth').value
      if oxyconc<20
        doCalc=false
        alertVariable = alertVariable + "Your Concentration cannot be below 20! "
      if oxyconc>50
        doCalc=false
        alertVariable = alertVariable + "Your Concentration cannot be above 50! "
      if depth1<1 || depth1>50
        doCalc=false
        alertVariable=alertVariable+"Depth must be between 1 and 50 metres"
      if alertVariable != "" 
        alert alertVariable
      if doCalc
        mod = 1.4/(oxyconc/100) * 10.toFixed
        document.getElementById("mod1").innerHTML = mod



