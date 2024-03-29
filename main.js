const inputDate = document.querySelector("#input-date");
const inputLucky = document.querySelector("#input-lucky");
const formDate = document.querySelector("#form");
const resultDiv = document.querySelector("#result");

const icon = document.querySelector(".fa");
const privacyDiv = document.querySelector(".privacy");
const happyAnimationsDiv = document.querySelector(".happy-animation");
const sadAnimationsDiv = document.querySelector(".sad-animation");

icon.addEventListener("click", () => {
  privacyDiv.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let sum = 0,
    rem = 0;

  let date = inputDate.value.split("-").join("");
  while (date !== 0) {
    rem = date % 10;
    sum += rem;
    date = Math.floor(date / 10);
  }

  if (sum % inputLucky.value === 0) {
    resultDiv.style.display = "block";

    happyAnimationsDiv.style.display = "block";
    sadAnimationsDiv.style.display = "none";

    resultDiv.innerText = "Yay! Your birthdate is lucky. 😍";
    resultDiv.style.backgroundColor = "#88fd97";
  } else {
    resultDiv.style.display = "block";

    happyAnimationsDiv.style.display = "none";
    sadAnimationsDiv.style.display = "block";

    resultDiv.innerText = "OOPS! Your birthdate is unlucky. 😓";
    resultDiv.style.backgroundColor = "#ff2c2c";
    resultDiv.style.color = "#000000";
  }
});
