describe("FizzBuzzTalker", function(){

	it("should return 0 for input 0", function(){
		expect(FizzBuzzTalker.say(0)).toEqual(0);
	});

	it("should return 1 for input 1", function(){
		expect(FizzBuzzTalker.say(1)).toEqual(1);
	});

	it("should return 'Fizz' for input 3", function(){
		expect(FizzBuzzTalker.say(3)).toEqual("Fizz");
	});

	it("should return 'Fizz' for input 6", function(){
		expect(FizzBuzzTalker.say(6)).toEqual("Fizz");
	});

	it("should return 'Buzz' for input 5", function(){
		expect(FizzBuzzTalker.say(5)).toEqual("Buzz");
	});

	it("should return 'Buzz' for input 10", function(){
		expect(FizzBuzzTalker.say(10)).toEqual("Buzz");
	});

	it("should return 'FizzBuzz' for input 30", function(){
		expect(FizzBuzzTalker.say(30)).toEqual("FizzBuzz");
	});
});