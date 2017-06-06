// Person Object (superclass)
function Person(fname,lname, email){ 
	this.debt = 0.0;
	this.fname=fname;
	this.lname=lname;
	this.email=email;

	//encapsulation
	this.fullname=function(){
	  return (this.fname +" "+ this.lname);
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
	Employee.prototype.CalculatePay = function(){
		if (this.debt ===0){
			return ("your Pay this month is  " + this.salary);
		}
		else {
			return ("Your pay this month is " + (this.salary - this.debt));
		}

		
		}
	Employee.prototype.GrantLoan = function(loan){
		if (loan<=this.salary && this.debt===0.0){
			var nextsalary= this.salary - loan
			this.debt = this.debt + loan ;
			return ("loan granted: " + loan + " your next salary will be " + nextsalary);
			 
			}
			else{
				return ("Cannot grant loan. You have a debt of " + this.debt) ; 
			}
		}
		//abstraction
	Employee.prototype.UpdatedEmail = function(newemail){
		this.email = newemail;
		return ("Your new email is " + this.email);
	}

  

	var matthew = new Employee( "Matthew"," Korede", "matthew@hotmail.com", "Developer", 40000, "full-employment" );
 
matthew.CalculatePay();
matthew.GrantLoan(15000);
matthew.GrantLoan(15000);