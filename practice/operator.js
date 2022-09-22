//1. string concatenation
console.log('my' + ' cat');
console.log('1' + 2); //michin
console.log(`string literals: 1+ 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operatos
let x = 3;
let y = 6;
x += y;
x -= y;
x += y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Locial operators: ||, &&, !
const value1 = true;
const value2 = 4 < 2; // false

//||, finds the first true value
console.log(`or: ${value1 || value2 || check()}`);

//&&, finds the first true value
console.log(`and: ${value1 && value2 && check()}`)

//often used to compare long if-statement
//nullableObject && nullableObject.something

function check() {
	for (let i = 0; i < 10; i++) {
		console.log('.');
	}
	return (true);
}

//!
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
//오브젝트는 메모리에 레퍼런스 형태로 탑재된다
const ellie1 = {
	name: 'ellie'
};
const ellie2 = {
	name: 'ellie'
};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //각각 다른 레퍼런스, false
console.log(ellie1 === ellie2); //똑같은 타입이든 아니든 레퍼런스가 다름, false
console.log(ellie1 === ellie3); //1의 레퍼런스 값을 3으로 할당했기에 같음, true

console.log(0 == false); //true? true
console.log(0 === false); //false? false
console.log('' == false); //true? true
console.log('' === false); //false? false
console.log(null == undefined); //true? true
console.log(null === undefined); //false? false

for (let i = 0; i <= 10; i++)
{
	if (i !== 0 && i % 2 === 0)
		console.log(i);
}

for (let i = 0; i < 10; i++)
{
	console.log(i);
	if (i === 8)
		break;
}
