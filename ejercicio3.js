// Forma 1 "Listener"

const btnSum = document.getElementById("btn-sumar");
btnSum.addEventListener("click", function () {
  const num1 = document.getElementById("valor1").value;
  const num2 = document.getElementById("valor2").value;
  const sum = parseInt(num1) + parseInt(num2);
  document.querySelector(".resultado").innerText = ` ${sum}`;
});

// function sum() {
//   const num1 = document.getElementById("valor1").value;
//   const num2 = document.getElementById("valor2").value;

//   const sum = parseInt(num1) + parseInt(num2);
//   document.querySelector(".resultado").innerText = ` ${sum}`;
// }

// Forma 2 "On Click"
function subtraction() {
  const num1 = document.getElementById("valor1").value;
  const num2 = document.getElementById("valor2").value;

  const subtraction = parseInt(num1) - parseInt(num2);
  if (subtraction < 0) {
    document.querySelector(".resultado").innerText = ` 0`;
  } else {
    document.querySelector(".resultado").innerText = ` ${subtraction}`;
  }
}
