//

function checkGrade() {
  const score = Number(document.getElementById("score").value);
  const result = document.getElementById("gradeResult");

  if (isNaN(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a number between 0 and 100";
    return;
  }

  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  result.textContent = "Score" + " " + score + " = Grade " + grade;
}

function calculate() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("calcResult");

  let answer;

  switch (operator) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = a / b;
      break;

    default:
      result.textContent = "Unknown Operations";
      break;
  }

  result.textContent = a + " " + operator + " " + b + " = " + answer;
}
console.log("are you here");

// function checkGrade() {
//   // STEP 1: Go find the input box and read what the user typed
//   // Number() converts the text into an actual number
//   const score = Number(document.getElementById("score").value);

//   // STEP 2: Validate — is it a real number between 0 and 100?
//   if (isNaN(score) || score < 0 || score > 100) {
//     document.getElementById("result").textContent =
//       "Enter a number between 0 and 100";
//     return; // stop here, don't run the rest
//   }

//   // STEP 3: Figure out the grade
//   let grade;

//   if (score >= 90) {
//     grade = "A — Excellent!";
//   } else if (score >= 80) {
//     grade = "B — Good job!";
//   } else if (score >= 70) {
//     grade = "C — Not bad";
//   } else if (score >= 60) {
//     grade = "D — Just passed";
//   } else {
//     grade = "F — Try again";
//   }

//   // STEP 4: Display the result in the result box
//   document.getElementById("result").textContent = "Your grade is: " + grade;
// }
