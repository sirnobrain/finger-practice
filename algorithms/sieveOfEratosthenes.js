function sieveOfEratosthenes(n) {
	//input n: number
	//returns an array of prime numbers below n

	//length of all numbers from 0 to n
	var seqLen = n + 1;

	//set an array of n numbers
	//set the value of every index to 1
	//except for 0 and 1 (set to 0-definitely not a prime)
	var primeNums = [];
	for (var i = 0; i < seqLen; i++) {
		i === 0 || i === 1 ? primeNums.push(0) : primeNums.push(1);
	}

	//using sieve of eratosthenes
	//non prime index set to 0
	for (var j = 2; j < seqLen; j++) {
		if (primeNums[j] === 1){
			var k = j * j;
			while (k < seqLen) {
				primeNums[k]= 0;
				k += j;
			}
		}
	}

	//all index with value === 1 is a prime
	//change the value of prime index to index number
	for (var l = 0; l < seqLen; l++) {
		primeNums[l] === 1 ? primeNums[l] = l : primeNums[l] = primeNums[l];
	}

	//filter out all index with value === 0 (non prime)
	return primeNums.filter(function(val){
		return val !== 0;
	});
}

console.log(sieveOfEratosthenes(10));