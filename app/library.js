'use strict';

module.exports = {
	words: (word) => {
		
  var WordObject={};
  var value;
  var holdletters="";
  var datastorage=[];
  

 // replaces each multilines and indents with a space
  word = word.replace(/(\r\n|\n|\r|\t)/gm," ");
  

  //loop through each characters until you meet a space and add words to an array
  for (var i=0; i<word.length; i++){

  	//skip loop is a spaces is met and holdletters doesnt hold any.
      if (word[i] ===" " && holdletters.length === 0){
          continue;

       //Push to datastorage some letters are in holding after a space is met   
      } else
      if (word[i] ===" " && holdletters.length>0){
       datastorage.push(holdletters);
       holdletters="";
	}
	
	//if you have come to end, push letters in holding including the the last character
	else if (i===word.length - 1){
		holdletters = holdletters + word[i];
		datastorage.push(holdletters);
   
} else{

 	//if all conditions isnt fit, then character is fit to add to holding
	holdletters = holdletters + word[i];
}
  
  }

  //Get each word stored and find the number of occurances
  for (var j = 0; j < datastorage.length; j++) {
    value = datastorage[j];
    //value = value.toString();
    if (typeof WordObject[value] === "undefined") {
        WordObject[value] = 1;
    } else {
        WordObject[value] = WordObject[value]  + 1;
    }
  }
    
    //return JSON/Object
    return WordObject;
}


}
