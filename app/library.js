'use strict';

module.exports = {
	 getPrimes: (n) => {
	 /* Find the prime numbers less than the parameter given */
	 let PrimeNumbers = [];
	 var isprime;
	   
	   if (isNaN(n)=== true || n<1 || n===0 || n===1){
	   	return false;

	   } else {
	   // your logic goes here
		  for (var i=2; i<=parseInt(n); i++){
		    isprime=true;
		  	for (var j=2; j<i; j++)
		  	{
		  		if (i%j === 0){
		  		  isprime = false;
		  			break;
		  		} 
					
		  	}
		  	if (isprime === true){
		    PrimeNumbers.push(i);
		  	}
		  }
		   return PrimeNumbers;
		}
	}
}