//1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	// let str = '';
	// for(let i = 0; i < fruits.length; i++)
		// str += `${fruits[i]} `;
	// console.log(str);
	const result = fruits.join(' ');
	console.log(result);
}

//2. make an array out of a string
{
	console.clear();
	const fruits = 'apple, banana, orange';
	// const result = fruits.split(', ');
	const result = fruits.split(', ', 2);
	console.log(result);
}

//3. make this array look like this: [5,4,3,2,1]
{
	console.clear();
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse(array);
	console.log(result);
}

//4. make new array without the first two elements
{
	console.clear();
	const array = [1, 2, 3, 4, 5];
	const result = array.slice(2);
	console.log(result);
	console.log(array);
}

console.clear();
class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false,66),
	new Student('E', 18, true, 88),
]

{
//5. find a student with the score 90
// const result = students.find(students, this.score === 90);
	const result = students.find((student) => student.score === 90);
	console.log(result);
}

console.clear();
//6. make an array of enrolled studens
{
	// const result = students.find((student) => student.enrolled === true).join();
	const result = students.filter((student) => student.enrolled);
	console.log(result);
}

console.clear();
//7. make an array containing only the students' scores
//result should be: [45, 80, 90, 66, 88]
{
	// const result = students.filter((student) => student.filter);
	const result = students.map((student) => student.score);
	console.log(result);
}

console.clear();
//8. check if here is a student with the score lower than 50
{
	const result = students.some((student) => student.score < 50);
	console.log(result);

	// const result = students.every((student) => student.score < 50);
	// console.log(result);
}
console.clear();
//9. compute students' average score
{
	//값을 누적할 때 쓰는 배열 API reduce
	const result = students.reduce((prev, curr) => prev + curr.score, 0);
	console.log(result / students.length);
}

console.clear();
//10. make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'
{
	// const result = students.map((student) => student.score).toString();
	const result = students.map((student) => student.score).join();
	console.log(result);

	// const result = students
	// 	.map((student) => student.score)
	// 	.filter((score) => score >= 50)
	// 	.join();
	// console.log(result);
}

//do 10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'
console.clear();
{
	const result = students.map((student) => student.score).sort().join();
	// const result = students.map((student) => student.score).sort((a,b) => a - b).join();
	// const result = students.map((student) => student.score).sort((a,b) => b - a).join();
	console.log(result);
}
