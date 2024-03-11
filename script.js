let firstNumber = 0,
  secondNumber = 0,
  result = 0,
  operatorSelection = 0,
  questionNumber = 0;
let startTime = 0,
  endTime = 0;
let correct = 0,
  wrong = 0;
let operator = "\u0000";
let optionOne = 0,
  optionTwo = 0,
  optionThree = 0,
  optionFour = 0;
function mechanics() {
  if (questionNumber > 9) {
    endTime = new Date();
    window.alert(
      "Correct :  " +
        correct +
        "\nWrong :  " +
        wrong +
        "\nAccuracy :  " +
        correct * 10 +
        "%\nTime per question :  " +
        (endTime - startTime) / 10000 +
        " seconds"
    );
    return;
  }
  firstNumber = Math.random() * 100 + 1;
  secondNumber = Math.random() * 100 + 1;
  operatorSelection = Math.random() * 100 + 1;
  firstNumber = Math.round(firstNumber);
  secondNumber = Math.round(secondNumber);
  if (operatorSelection <= 33) {
    operator = "+";
    result = firstNumber + secondNumber;
  } else if (operatorSelection > 33 && operatorSelection <= 67) {
    operator = "-";
    result = firstNumber - secondNumber;
  } else {
    operator = "X";
    result = firstNumber * secondNumber;
  }
  let random = Math.random() * 100 + 1;
  if (random <= 25) {
    optionOne = result;
    optionTwo = result + Math.round(Math.random() * 100 + 1);
    optionThree = result - Math.round(Math.random() * 100 + 1);
    optionFour = result + Math.round(Math.random() * 100 + 1);
  } else if (random > 25 && random <= 50) {
    optionTwo = result;
    optionOne = result + Math.round(Math.random() * 100 + 1);
    optionThree = result - Math.round(Math.random() * 100 + 1);
    optionFour = result + Math.round(Math.random() * 100 + 1);
  } else if (random > 50 && random <= 75) {
    optionThree = result;
    optionOne = result + Math.round(Math.random() * 100 + 1);
    optionTwo = result - Math.round(Math.random() * 100 + 1);
    optionFour = result + Math.round(Math.random() * 100 + 1);
  } else {
    optionFour = result;
    optionOne = result + Math.round(Math.random() * 100 + 1);
    optionTwo = result - Math.round(Math.random() * 100 + 1);
    optionThree = result + Math.round(Math.random() * 100 + 1);
  }
  let button = document.querySelectorAll(".option");
  button[0].innerHTML = optionOne;
  button[1].innerHTML = optionTwo;
  button[2].innerHTML = optionThree;
  button[3].innerHTML = optionFour;
  let para = document.querySelector(".question");
  para.innerHTML =
    ++questionNumber + ". " + firstNumber + " " + operator + " " + secondNumber;
}
