const val1Input = document.getElementById("val1");
const val2Input = document.getElementById("val2");
const oprInput = document.getElementById("opr");
let resInput = document.getElementById("res");
// let res = resInput.value;
const calc = document.getElementById("calc");
const reset = document.getElementById("reset");

calc.addEventListener("click", Calculate);
reset.addEventListener("click", stateReset);

function Calculate() {
  const val1 = Number(val1Input.value);
  const val2 = Number(val2Input.value);
  const opr = oprInput.value;
  switch (opr) {
    case "+":
      //왜 res는 값이 안 차는지?
      resInput.value = val1 + val2;
      console.log(val1, val2, resInput, res);
      break;
    case "/":
      resInput.value = val1 / val2;
      break;
    case "-":
      resInput.value = val1 - val2;
      break;
    case "*" || "x":
      resInput.value = val1 * val2;
      break;
    default:
      alert("올바른 값을 입력하십시오.");
  }
}
function stateReset() {
  // let inputs = document.querySelectorAll("input");
  //   console.log(inputs.value);
  //   console.log(typeof inputs);
  val1Input.value = "";
  val2Input.value = "";
  oprInput.value = "";
  resInput.value = "";
}
