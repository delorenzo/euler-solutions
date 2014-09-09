//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

var sum = 0;
var current = 0;
var 1back = 1;
var 2back = 0;

while (current <= 4000000) {

	if (current % 2 == 0) {
		sum += current;
	}

	2back = 1back;
	1back = current;

	current = 1back + 2back;
}

console.log(sum);