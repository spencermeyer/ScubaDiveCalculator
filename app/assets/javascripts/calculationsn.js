// This is the JavaScript to do the calcualtions for NITROX etc.

    $(document).ready(function() {
    //do jQuery stuff when DOM is ready
    console.log("hello from nitrox.js doc ready");

    // tooltips are the little labels that pop up when you hover over a button    
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip(); 
    });

    document.getElementById("calcBtn2").addEventListener("click", function(){
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
      // Now do the calculations
      if(doCalc){
        var ppo2 = 0.2*(1+depth1/10);
        var mod = 10*1.2/(oxyconc/100);
        document.getElementById("mod1").innerHTML = mod.toFixed(2);
        document.getElementById("ppo2").innerHTML = ppo2.toFixed(2);
      };

    });
// below is the end of the doc ready function
});
