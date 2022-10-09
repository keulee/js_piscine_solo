//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// symbol: Symbol('id'), JSON에 포함되지 않음
	jump: () => {
		console.log(`${this.name} can jump!`);
	},
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color',]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	// console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'keulee' : value;
	return (value);
});
console.log(json);

console.clear()
//2. JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
	// return value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate); //birthDate는 string
console.log(obj.birthDate.getDate());
