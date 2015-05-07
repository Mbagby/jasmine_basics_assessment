var grader = require("../grader.js")

describe("Finding the average of the array", function(){
	it("average of the array", function(){
		expect(grader.average([1,2,3,4,5,6,7])).toEqual(4)
	});
});

describe("Finding the letter grade of several elements", function(){
	it("Grade should return A is above or equal to 90 and below or equal to 100", function(){
		expect(grader.letterGrade(92)).toEqual("A")
	});
	it("Grade should return B is above or equal to 80 and below a 90", function(){
		expect(grader.letterGrade(89)).toEqual("B")
	});
	it("Grade should return C is above or equal to 70 and below a 80", function(){
		expect(grader.letterGrade(76)).toEqual("C")
	});
	it("Grade should return D is above  or equal to 60 and below a 70", function(){
		expect(grader.letterGrade(60)).toEqual("D")
	});
	it("Grade should return F is above or equal to 0 or below a 60 ", function(){
		expect(grader.letterGrade(7)).toEqual("F")
	});
});

describe("Finding the median", function(){
	it("Median is the middle number", function(){
		expect(grader.median([1,2,3,4,5,6,7])).toEqual(4)
	});
	it("Median is the middle number", function(){
		expect(grader.median([1,2,3,4,5,6,7,8])).toEqual(4.5)
	});
});

describe("Finding the mode", function(){
	it("The highest frequency element", function(){
		expect(grader.mode([32,91,76,82,91,76,91])).toEqual(91)
	});
});