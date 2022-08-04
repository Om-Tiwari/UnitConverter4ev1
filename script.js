let input = 1;
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

inputEl.textContent = input;

function convert(input) {
  lengthEl.textContent =
    input +
    " meters = " +
    (input * 3.281).toFixed(3) +
    " feet | " +
    input +
    " feet = " +
    (input / 3.281).toFixed(3) +
    " meters";

  volumeEl.textContent =
    input +
    " liters = " +
    (input / 3.785).toFixed(3) +
    " gallons | " +
    input +
    " gallons = " +
    (input * 3.785).toFixed(3) +
    " liters";

  massEl.textContent =
    input +
    " kilos = " +
    (input * 2.205).toFixed(3) +
    " pounds | " +
    input +
    " pounds = " +
    (input / 2.205).toFixed(3) +
    " kilos";
}
