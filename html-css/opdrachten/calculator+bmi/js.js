function uitkomst() {
  const operator = document.querySelector("#operators").value;
  const n1 = parseInt(document.querySelector("#n1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const totaal = document.querySelector("#totaal");

  /*if (operator === "+") {
    totaal.textContent = n1 + n2;
  } else if (operator === "x") {
    totaal.textContent = n1 * n2;
  } else if (operator === "/") {
    totaal.textContent = n1 / n2;
  } else totaal.textContent = n1 - n2;
*/

  switch (operator) {
    case "+":
      totaal.textContent = n1 + n2;
      break;
    case "-":
      totaal.textContent = n1 - n2;
      break;
    case "x":
      totaal.textContent = n1 * n2;
      break;
    case "/":
      totaal.textContent = n1 / n2;
      break;
    case "macht":
      totaal.textContent = Math.pow(n1, n2);
      break;
    case "wortel":
      totaal.textContent = Math.sqrt(n1, n2);
  }
}

function bmi() {
  const gewicht = document.querySelector("#gewicht").value;
  const lengte1 = document.getElementById("lengte1").value;
  const totaalBmi = document.querySelector("#totaalbmi");

  const uitslag = roundToTwo(gewicht / (lengte1 * lengte1));

  switch (true) {
    case uitslag < 18.5:
      totaalBmi.innerText = `uw bmi = ${uitslag}: u heeft ondergewicht`;
      break;
    case uitslag > 18.5 && uitslag < 25:
      totaalBmi.innerText = `uw bmi = ${uitslag}: u heeft een gezond gewicht`;
      break;
    case uitslag > 25 && uitslag < 30:
      totaalBmi.innerText = `uw bmi = ${uitslag}: u heeft overgewicht`;
      break;
    case uitslag > 30:
      totaalBmi.innerText = `uw bmi = ${uitslag}: u heeft obesitas`;
      break;
  }
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
