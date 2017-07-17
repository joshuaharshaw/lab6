function convertTemp (temp, scale) {

if (scale === "C") {

	console.log(temp + " degrees Fahrenheit converts to " + ((temp - 32) * 5)/9 + " degrees Celcius.");

} else if (scale === "F") {

	console.log(temp + " degrees Celcius converts to " + ((temp * 1.8) + 32) + " degrees Fahrenheit.");

} else console.log("That temperature scale is not supported. Use either 'C' to convert to Celcius or 'F' to convert to Fahrenheit.");

}

convertTemp(212, "C");
convertTemp(0, "F");
convertTemp(273, "K");

console.log('Code by Joshua Harshaw.');