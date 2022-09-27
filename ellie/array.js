//Array
//1. Delaration
const arr1 = new Array(); //1
const arr2 = [1,2]; //2

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array
//print all fruits
console.clear();
for(let i = 0; i <fruits.length; i++)
	console.log(fruits[i]);

for(let fruit of fruits) {
	console.log(fruit);
}

fruits.forEach(element => console.log(element));

//4. Addition, deletion, copy
//push:add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
//pop:remove  an item from the end
fruits.pop();
console.log(fruits);
//unshift: add an item from the begin
fruits.unshift('lemon');
console.log(fruits);
//shift: remove an item from the begin
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop and push
//splice: remove an item by index position
fruits.push('orange', 'lemon');
console.log(fruits);

// fruits.splice(1);
// fruits.splice(1,1);
fruits.splice(1, 1, 'prune', 'watermelon');
console.log(fruits);

const fruits2 = ['coconut'];
const newFruits1 = fruits.concat(fruits2);
const newFruits2 = fruits.concat(fruits);
console.log(newFruits1);
console.log(newFruits2);

// Searching
// find the index
console.clear();
console.log(newFruits1);
console.log(newFruits2.indexOf('apple'));
console.log(newFruits2.indexOf('walnut'));

// includes
console.log(fruits.includes('apple'));
console.log(fruits.includes('walnut'));

//lastIndexOf
console.clear();
newFruits1.push('lime');
console.log(newFruits1);
console.log(newFruits1.indexOf('watermelon'));
console.log(newFruits1.lastIndexOf('watermelon'));//마지막에 들어있는 값 출력
//lastIndexOf: 뒤에서부터 검색을 시작, 하지만 결과값은 뒤에서부터 몇번째 위치라는 것을 말해주는 것이 아니라 맨 앞에서부터 위치를 반환.
//값은 뒤에서부터 찾기 시작하지만 결과값은 indexof와 마찬가지로 동일하게 맨 앞에서부터 위치의 값을 반환
