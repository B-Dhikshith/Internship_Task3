function convertTemperature() {
  const input = parseFloat(document.getElementById("temperature").value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById("result");

  if (isNaN(input)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "C") {
    celsius = input;
    fahrenheit = (input * 9/5) + 32;
    kelvin = input + 273.15;
  } else if (unit === "F") {
    celsius = (input - 32) * 5/9;
    fahrenheit = input;
    kelvin = celsius + 273.15;
  } else if (unit === "K") {
    kelvin = input;
    celsius = input - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  result.innerHTML = `
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
}