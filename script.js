const API_URL = "https://api.adviceslip.com/advice";
const button = document.getElementById("btn");
const adviceNum = document.getElementById("adviceNum");
const adviceTxt = document.getElementById("adviceTxt");
let advice;
/*
1) request to api for advice data & convert to json
2) pull necessary data from advice json
3) update ui w advice data
*/

function updateUI(advice) {
  adviceNum.textContent = advice.id;
  adviceTxt.textContent = advice.advice;
}

async function getAdvice() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    updateUI(data.slip);
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", getAdvice);
