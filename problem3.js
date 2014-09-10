//What is the largest prime factor of the number 600851475143 ?

var knownPrimes = {};

var isPrime = function(num) {
    if (knownPrimes[num]) {
		return true;
	}
	var count = 2;
	while (count < num) {
		if (num % count === 0) {
			return false;
		}
		count++;
	}
	knownPrimes[num] = true;
	return true;
};

var bigNum = 600851475143;
var count = bigNum;
while (count > 0) {
	if (bigNum % count === 0) {
		if (isPrime(count)) {
            console.log(count);
            break;
		}
	}
	count--;
}