'use strict';

module.exports = {
	aritGeo: (arr) => {

			if (arr.length === 0){
  			return 0;
			}

			
			var Difference = arr[1] - arr[0];
			var Ratio = arr[1] / arr[0];
			var AritCount=0; 
			var GeoCount=0;


		    for(var i = 0; i < arr.length - 1; i++)
		    {
		        if( arr[i + 1] - arr[i] === Difference ){
		          AritCount += 1;
		        
		        }
		        
		        if(arr[i + 1] / Ratio === arr[i]){
		          GeoCount += 1;
		       }
		        
		          
		    }
		    
		    if(AritCount === arr.length-1){
		        return "Arithmetic";
		    }
		    else if(GeoCount === arr.length-1){
		      return "Geometric";
		    } 
		     else{
		         return -1;
		      }
	}
}