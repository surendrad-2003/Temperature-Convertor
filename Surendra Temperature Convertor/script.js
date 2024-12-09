function convertTemperature() {
    let temp = document.getElementById('temp').value;
    let unit = document.getElementById('unit1').value;
    let celsius, fahrenheit, kelvin;

    if (unit == "Celsius") {
        celsius = parseFloat(temp);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    }
    else if (unit == "Fahrenheit") {
        fahrenheit = parseFloat(temp);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    }
    else if (unit == "Kelvin") {
        kelvin = parseFloat(temp);
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    // Display the results
    document.getElementById('celsiusResult').innerText = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('fahrenheitResult').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('kelvinResult').innerText = `Kelvin: ${kelvin.toFixed(2)}`;
}
