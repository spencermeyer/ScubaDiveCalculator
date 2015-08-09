// This is the JavaScript to do the calcualtions etc.
$(document).ready(function() {
    //do jQuery stuff when DOM is ready
    
    document.getElementById("calcBtn").addEventListener("click", function(){
      var alertVariable = "";
      var doCalc=true;
      sac1=document.getElementById('sac').value;
      depth1=document.getElementById('depth').value;
      duration1=document.getElementById('duration').value;
      // Validation section
      if (sac1 < 12){
        alertVariable = alertVariable + "Your SAC cannot be below 12! ";
        doCalc=false;
      } else if(sac1 > 50) {
        alertVariable = alertVariable + "That Standard Air Consumption is too big";
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
        sConsumption = sac1 * duration1 *(1+depth1*0.1);
        bConsumption = sConsumption/232;
        pPress = 0.2 * (1+(depth1*0.1));
        document.getElementById("consumption1").innerHTML = sConsumption;
        document.getElementById("consumption2").innerHTML = bConsumption;
        document.getElementById("ppress").innerHTML = pPress;
      };

    });
});
