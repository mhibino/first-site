var output = "";
for (var i = 1; i <=100; i++) {
	if (i % 3 === 0){
		output += "Fizz";
		if (i % 5 === 0) {
		    output += "Buzz";
		}
	}
	else if (i % 5 === 0) {
		    output += "Buzz";
	} else {
		output += i;
	}
	console.log(output);
	output = "";
}