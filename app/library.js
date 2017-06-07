'use strict';

module.exports = {
	reverseString: (word) => {
		
		  var revword; // to hold the reverse strings
		
		//Check if the word parameter is empty
		  if (word.length===0){
		    return null;
		  }
		  
		  //check if word is a string
		  if(isNaN(word) === false){
		    return "this is a number not a word";
		  }
		  
		//declare revword empty string
		  revword="";
		  
		  //loop through each character starting from the last character
		  for (var i=(word.length - 1); i>=0; i--){
		  
		    revword = revword + word[i];  //attach each character to revword
		    }

			//return true if the reverese string gotten is same as the original word
		    if (revword === word){
		      return true;
		    } 
		    else{
		      return revword;
		    }
  	}
}

//reverseString("anna");
