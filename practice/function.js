//Function declaration
/*
function name(param1, param2) { body... return ;}
function is object in JS
*/

function printHello() {
	console.log('Hello');
}

printHello();

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
	obj.name = 'coder';
}

const ellie = {
	name: 'ellie'
};
changeName(ellie);
console.log(ellie);

//3.Default parameters
function showMessage(message, from = 'unknown') {
	// if (from === undefined)
	// 	from = 'unknown';
	console.log(`${message} by ${from}`);
}

showMessage('Hi!');

//4. Rest parameters
function printAll(...args) {
	for (let i = 0; i < args.length; i++)
		console.log(args[i]);

	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}

printAll();
printAll('dream', 'coding', 'ellie');

//5. Local scope
let gMsg = 'global';
function printMessage() {
	let msg = 'hello';
	console.log(msg);
	console.log(gMsg);
}
printMessage();


//6. Return a value
function sum(a, b) {
	return  (a + b);
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
	if (user.point > 10) {
	//	long upgrad logic...
}
}
//good
function upgradeUser(user) {
	if (user.point <= 10) {
		return ;
	}
	//	long upgrad logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1.Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.

const print = function() {
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you')
		printYes();
	else
		printNo();
}

const printYes = function() {
	console.log('yes!');
}

const printNo = function print() {
	console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function() {
	console.log('simplePrint!');
};

//wow
const simplePrint1 = () => console.log('simplePrint!');
const add = (a, b) => a + b;

//IIFE: Immediately Invoked Function Expression
(function hello() {
	console.log('IIFE');
})();
//???????? wow
