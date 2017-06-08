'use strict';



class StringSplosion {

	constructor(StringWord) {

		this.manipulate = function () {


			var HoldChar='';  //variable to hold characters

			for (var i=0; i<StringWord.length; i++){ //loop through the word, one character at a time

				for (var j=0; j<=i;j++){	//take each character and attached every character below it including itself
					HoldChar = HoldChar + StringWord[j];
				}
			}
		return HoldChar;

		}
	}
}

module.exports = StringSplosion;