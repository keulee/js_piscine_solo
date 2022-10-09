export default function helloSomeone(one) { //문자열, 숫자, NaN, undefined, null
	if (typeof one === "string")
	{
		if (one === '')
			console.log("Who are you?");
		else
			console.log("Hello " + one + "!");
	}
	else if (one === null)
		console.log("I am null and void");
	else if (isNaN(one) === false)
	{
		if (one <= 0)
			console.log("I am Benjamin Button!");
		else
			console.log("My age is " + one);
	}
	else if (typeof one == "undefined")
		console.log("Nobody can define me!");
	else if (isNaN(one) === true)
		console.log("Age is just a number");

}
