// Person Object (superclass)
function Person(fname,lname, email){ 
	this.fname=fname;
	this.lname=lname;
	this.email=email;

	//encapsulation
	this.fullname=function(){
	  return this.fname +" "+ this.lname;
	}

}

// Employee Object (subclass)
	function Employee(fname, lname, email, skill, salary, status){
		Person.call( this, fname, lname, email );
		this.skill = skill;
		this.salary= salary;
		this.stat= status;
	}
	//Inheritance
	Employee.prototype = Object.create( Person.prototype );
	
	//polymorphism
	Employee.prototype.paysalary = function(){
		return ("you have been paid " + this.salary);
		}
	Employee.prototype.giveloan = function(loan){
		if (loan<=this.salary){
			var nextsalary= this.salary - loan
			return ("loan given: " + loan + " your next salary will be " + nextsalary);
			}
		}
		//abstraction
	Employee.prototype.UpdatedEmail = function(newemail){
		this.email = newemail;
		return ("Your new email is " + this.email);
	}

  

	var matthew = new Employee( "Matthew"," Korede", "matthew@hotmail.com", "Developer", 40000, "full-employment" );
 
matthew.paysalary();
matthew.giveloan(15000);