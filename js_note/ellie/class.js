//Object-oriented programming
//class: template
//object: instance of class

//1. Class declarations
class Person {
	//constructor
	constructor(name, age) {
		//fields
		this.name = name;
		this.age = age;
	}

	//methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const ellie = new Person('ellie', 20);
// const ellie = new Person();
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	//age라는 getter를 정의하는 순간 31번째 줄의 this.age가 호출된다.
	get age() {
		// return  this.age;
		return  this._age; //solution for exceed maximum call stack size

	}

	//setter를 정의하는 순간 값을 할당할때 메모리에 접근해서 할당하는 것이 아니라 31번줄의
	// '= age'를 호출한다.
	set age(value) {
		//setter안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 업데이트 하는 것이 아니라,
		//setter를 호출하게 된다. (무한반복)
		// this.age = value;

		// => 해결법: getter와 setter안의 Property를 다른 이름으로 선언해줘야 한다.
		// if (value < 0) {
		// 	throw Error('age cannot be negative');
		// }
		// else
		// 	this._age = value; //solution for exceed maximum call stack size
		this._age = value < 0 ? 0 : value;

	}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
//field는 언더바(_)가 들어간 age가 있지만, .age라고 호출할 수 있고 값을 할당할 수 있는건 내부적으로 getter와 setter를 이용하기 때문

//3. fields (public, private)
//TOO SOON!
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methhods
//TOO SOON!
class Article {
	//static이라고 선언하면 오브젝트에 상관없이 클래스에 붙어있다.
	static publisher = 'Dream Coding';
	constructor(articleNumger) {
		this.articleNumger = articleNumger;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
//static함수를 만들면 오브젝트 안의 퍼블리셔는 값이 지정되지 않게 나온다.
//Article이라는 클래스 자체에 붙어 있기 때문에, 호출하기 위해선 클래스 이름.퍼블리셔를 가지고 와야된다.
console.log(Article.publisher);

//5. inheritence
class Shape {
	constructor(width, heigth, color) {
		this.width = width;
		this.height = heigth;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return (this.width * this.height);
	}
}

class Rectangle extends Shape {} //grammer for inheritance in JS
class Triangle extends Shape {
	//overriding
	draw() {
		super.draw(); // call method of parents.
		console.log('hello');
	}

	//overriding
	getArea() {
		return (this.width * this.height / 2);
	}
}

const rectangle = new Rectangle(20, 20, 'bleu');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOF
//A instanceof B: A가 B를 이용해서 만들어진 인스턴스인지 아닌지 확인하는 것
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
