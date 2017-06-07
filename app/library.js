'use strict';

	function Car (name,model,type) {

		this.name = name || 'General';
		this.model = model || 'GM';
		this.type= type || 'General'
		this.isSaloon = (type === 'trailer') ? false : true;
		this.numOfWheels= this.isSaloon ? 4: 8 ; 
		this.numOfDoors = (name === 'Porshe') || (name === 'Koenigsegg') ? 2 : 4;
		this.speed='0 km/h';
	}
		Car.prototype.drive = function (rate){
			var acceleration;
			if (this.type === 'trailer'){
				acceleration = 11;
			}
			else{
				acceleration = 50;
			}
			this.speed = (acceleration * rate) + " km/h";
			return this;
		}

	
	
module.exports = Car;

