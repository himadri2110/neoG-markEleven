let checkBtn = document.querySelector("#check-btn");
let inputDate = document.querySelector("#input-date");
let inputLucky = document.querySelector("#input-lucky");
let resultDiv = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  let sum = 0,
    rem = 0;

  if (inputDate.value === "") {
    resultDiv.innerText = "Please enter your birthdate";
    resultDiv.style.color = "#ff2c2c";
    resultDiv.style.backgroundColor = 'initial';
  } else if (inputLucky.value === "") {
    resultDiv.innerText = "Please enter your lucky number";
    resultDiv.style.color = "#ff2c2c";
    resultDiv.style.backgroundColor = 'initial';
  } else {
    let date = inputDate.value.split('-').join('');
    while (date !== 0) {
      rem = date % 10;
      sum += rem;
      date = Math.floor(date / 10);
    }
    console.log(date, sum);

    if (sum % inputLucky.value === 0) {
      resultDiv.innerText = "Yay! Your birthdate is lucky. 😍";
      resultDiv.style.backgroundColor = "#88fd97";
    } else {
      resultDiv.innerText = "OOPS! Your birthdate is unlucky. 😓";
      resultDiv.style.backgroundColor = "#ff2c2c";
      resultDiv.style.color = "#000000";
    }
  }
});
