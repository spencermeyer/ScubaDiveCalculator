// This is the JavaScript to do the calcualtions for DECO etc.

$(document).ready(function() {
//do jQuery stuff when DOM is ready
console.log("hello from deco.js doc ready");

    // tooltips are the little labels that pop up when you hover over a button    
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip(); 
    });

    document.getElementById("calcBtn3").addEventListener("click", function(){
      var alertVariable = "";
      console.log("nitroc calcs in progress");
      var doCalc=true;
      oxyconc=document.getElementById('oxyconc').value;
      depth1=document.getElementById('depth').value;
      // Validation section
      if (oxyconc < 20){
        alertVariable = alertVariable + "Your Concentration cannot be below 20! ";
        doCalc=false;
      } else if(oxyconc > 50) {
        alertVariable = alertVariable + "Your Concentration cannot be above 50%";
        doCalc=false;
      }
      if (depth1<1 || depth1>50) {
        alertVariable=alertVariable+"Depth must be between 1 and 50 metres";
        doCalc=false;
      }
      if (alertVariable !== ""){
        console.log(alertVariable);
        alert(alertVariable);
      }
    })
})






