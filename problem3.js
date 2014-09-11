//What is the largest prime factor of the number 600851475143 ?

//helper functions:
//gives us the max of an array
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
//gives us the max prime
function largestPrime(num)
{
    return getMaxOfArray(primeFactors(num));
}

//should run in O(n) for worst case (when N is a prime number)
//takes advantage of the fact that you can often divide by the same number 
//several times... as in powers of 2 :)
//so all the numbers you find will be guaranteed to be prime!
function primeFactors (num) {
	var factors = [1];
	var denominator = 2;
	while (num > 1) {
		while (num % denominator === 0) {
			factors.push(denominator);
			num /= denominator;
		}
		denominator++;
	}
	return factors;
}

console.log(largestPrime(600851475143));

