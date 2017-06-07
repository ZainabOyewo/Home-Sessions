'use strict';

module.exports = {
	reverseString: (word) => {
		
		  var revword;

		  if (word.length===0){
		    return null;
		  }
		  if(isNaN(word) === false){
		    return "this is a number not a word";
		  }

		  revword="";
		  for (var i=(word.length - 1); i>=0; i--){
		    revword = revword + word[i];
		    }


		    if (revword === word){
		      return true;
		    } 
		    else{
		      return revword;
		    }
  	}
}

//reverseString("anna");