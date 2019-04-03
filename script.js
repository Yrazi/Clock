

const secHand = document.querySelector(".secHand");
const mnHand = document.querySelector(".minHand");
const hrHand = document.querySelector(".hourHand");


  function setAnalogue() {
    const nT = new Date();
    const seconds = nT.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = nT.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    mnHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = nT.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hrHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
setInterval(setAnalogue, 1000);  




  

// const now = new Date() 
// document.getElementById("dateTime").innerHTML = 
// (("0"+now.getDate()).slice(-2)) +"."+ (("0"+(now.getMonth()+1)).slice(-2)) +"."+ (now.getFullYear()) 
// +" "+ (("0"+hour).slice(-2)) +":"+ (("0"+mins).slice(-2)) +":"+ (("0"+seconds).slice(-2));