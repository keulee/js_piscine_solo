// Objects
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instance of Object
// Object는 Key와 Value의 집합체 Object = { key : value };

//1. Literals and properties
// const name = 'keulee';
// const age = 4;
// print(name, age);
function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const keulee = {
	name: 'keulee',
	age: 4
}

print(keulee);

//how to create object
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

keulee.hasJob = true; // 이런것도 가능
console.log(keulee.hasJob);

delete keulee.hasJob;
console.log(keulee.hasJob);

//2. Computed properties
//key (properties) should be always string
console.log(keulee.name); //값을 가지고 오려는 key를 알때
console.log(keulee['name']); //정확하게 어떤 key를 원하는지 모를때. 실시간으로 값을 받아올때
keulee['hasJob'] = true;
console.log(keulee.hasJob);

function printValue(obj, key) {
	// console.log(obj.key); //key라는 properties가 없어서 undefined가 나올 수 있음
	console.log(obj[key]);
}

printValue(keulee, 'name');
printValue(keulee, 'age');

//3. Property value shorthand
const person1 = {
	name: 'bob',
	age: 2
};

const person2 = {
	name: 'steve',
	age: 3
};

const person3 = {
	name: 'dave',
	age: 4
};

const person4 = makePerson('keulee', 30);

console.log(person4);

function makePerson(name, age) {
	return {
		// name: name, //Property value shorthand이라는 기능이 있어서 key, value의 이름이 동일하다면 하나를 아래와 같이 생략할 수 있다.
		name,
		// age: age,
		age,
	};
}

// 4. Constructor Function
function Person(name, age) {
	this.name = name;
	this.age = age;
}

//5. in operator: property existence check(key in obj)
console.log('name' in keulee);
console.log('random' in keulee);
console.log(keulee.random);

// console.clear(); //clear console
//6. for..in vs for..of
//for (key in obj) : 모든키들을 받아와서 처리하고 싶을때 사용하면 좋음
for (key in keulee) { //keulee를 돌때마다 keulee에 있는 key가 지역변수 key에 할당이 됨
	console.log(key);
}

// for (value of iterable) 순차적으로 이터러블한
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}
//위와 같이 쓸 것을 value of iterable을 사용하여 아래와 같이 사용할 수 있다.
//결과값은 같음
for (value of array) {
	console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {
	name: 'keulee',
	age: '20'
};
const user2 = user;
// user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
console.clear();
console.log(user3);

//오브젝트는 자바스크립트에 있는 기본적으로 탑재된 오브젝트중에 하나.
//자바스크립트의 모든 오브젝트는 이 오브젝트를 상속한다.
const user4 = {};
Object.assign(user4, user);
//const user4 = Object.assign({}, user); 이렇게도 사용가능 위에 줄과 같음.
console.log(user4);

//another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤의 값으로 계속 값이 덮어씌워진다
console.log(mixed.color); //blue
console.log(mixed.size); //big
