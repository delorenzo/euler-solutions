//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

var sum = 0;
var current = 0;
var previous = 1;
var twoBack = 0;

while (current <= 4000000) {

	if (current % 2 === 0) {
		sum += current;
	}

	twoBack = previous;
	previous = current;

	current = previous + twoBack;
}

console.log(sum);