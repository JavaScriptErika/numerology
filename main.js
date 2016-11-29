// removes all non-digit values, symbols and spaces, stores user input in var string
var string = prompt("Enter your numbers to decode: ").trim().replace(/[^\d]/g, '');


//checks if input is not a number or empty, alerts user to try again until either or conditions are false
while (isNaN(string) || string === "") {
	string = prompt("Please enter in a number").trim().replace(/[^\d]/g, '');
}

// split string from user input into array to individual digits 10 = ['1', '2'] (still a string), also global
var array = string.split('');
var sum = 0;

//checks if it's a single digit since we won't need to do the math

function reducing (array) {
	if (array >= 0 || array <= 9) {
		document.write("<p>Your number is: " + array + "</p>" );

		//converts loop to a number, this is so I can use === operator in if/else statement
	for(var i = 0; i < array.length; i++) {

		array[i] = +array[i];
	}
		//reduces the array and is now a single digit number, not an array, that is equal to global sum
		return sum = array.reduce(function(a, b) { return a + b; });

	} else {
	// This reduces the intial value given of double digits
	// join together array entries with + sign (still a string) to users
			var display = array.join(' + ');
			var message = "<p>To determine Hermetic value, ";
			message += "your numbers are added together: ";
			document.write(message + display + "</p>");

		//loops through the length of the array to converts the entries in numbers, not strings
			for(var i = 0; i < array.length; i++) {

				array[i] = +array[i];
			}

		// used reduce method to add array entries into one sum which is a single number, could be double digits or single digit, and returns the global sum
			sum = array.reduce(function(a, b) { return a + b; });

			document.write("<p>Your number is " + sum + "</p>");
			return sum;

	}
}

// stores sum and is a single digit or double digit
var sumReduced = reducing(array);

//this function looks to see if the number is still a double digit after the first reduction based on the sum from the previous function

function doubleDigit(sumReduced) {

	//will need to reduce to single digit
	if (sumReduced >= 10) {

		document.write("<p>We'll need further reduce your number into a single digit.</p>");

		//loop repeats until a single digit is obtained
		while (sum >= 10) {
			//splits the number of the sum into individual strings and returns them as numbers
			sum = sum.toString(10).split("").map(function(t){return parseInt(t)})

			//displays to user what we're doing by showing how we add the numbers with an array with the plus sign
		 	document.write("<p>" + sum.join( ' + ') + "</p>");

			//add array entries to single number
  		sum = sum.reduce(function(a, b) { return a + b; }, 0);

		}

	document.write("<p>Your new special number is " + sum + "</p>");
	return sum;

	}
}

doubleDigit(sumReduced);


function numerology(sum) {

	switch(sum) {
		case 0:
			document.write("<p> The number 0 means this: </p>");
			break;
		case 1:
			document.write("<p> The number 1 means this: </p>");
			break;
		case 2:
			document.write("<p> The number 2 means this: </p>");
			break;
		case 3:
			document.write("<p> The number 3 means this: </p>");
			break;
		case 4:
			document.write("<p> The number 4 means this: </p>");
			break;
		case 5:
			document.write("<p> The number 5 means this: </p>");
			break;
		case 6:
			document.write("<p> The number 6 means this: </p>");
			break;
		case 7:
			document.write("<p> The number 7 means this: </p>");
			break;
		case 8:
			document.write("<p> The number 8 means this: </p>");
			break;
		case 9:
			document.write("<p> The number 9 means this: </p>");
			break;
	}

}

numerology(sum);
