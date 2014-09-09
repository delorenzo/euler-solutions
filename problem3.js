//What is the largest prime factor of the number 600851475143 ?

var isPrime = function(num) {
	var count = 2;
	while (count < num) {
		if (num % count == 0) {
			return false;
		}
		count++;
	}
	return true;
}

var count = 3;
var bigNum = 600851475143;
var largestPrime = 0;
while (count < bigNum) {
	if (bigNum % count == 0) {
		if (isPrime(count)) {
			largestPrime = count;
		}
	}
	count++;
}

console.log(largestPrime);