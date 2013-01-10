var FIZZ = "Fizz";
var FIZZ_FACTOR = 3;
var BUZZ = "Buzz";
var BUZZ_FACTOR = 5;

var number = function(value){

	var operations = {
		_value : value,

		isDivisibleBy: function(divisor){
			return this._value % divisor === 0;
		},

		isFizz: function(number){
			return this.isDivisibleBy(FIZZ_FACTOR);
		},

		isBuzz: function(number){
			return this.isDivisibleBy(BUZZ_FACTOR);
		}
	};

	return operations;
};

FizzBuzzTalker = {

	say : function (input){
		var result = "";
		
		if(input === 0)
			return 0;
		
		if(number(input).isFizz())
			result = FIZZ;

		if(number(input).isBuzz())
			result += BUZZ;

		if(result === "")
			result = input;

		return result;
	}
};