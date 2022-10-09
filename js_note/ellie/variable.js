'use strict';

console.log('Hello World');

let globalName = 'global name';
{
	let name = 'keulee';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}

// console.log(name);
console.log(globalName);

const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speical numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'nat a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //templete literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (너는 텅텅 비어있는 빈값이야. 라고 지정 해주는 것.)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined (선언은 되었지만 값이 지정되지 않음. 텅텅빈지 값이 들어가있는지 정해져있는 상태가 아니다.)
let x; //이것도 undefined let x = undefined 라고 해도 같다.
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects: 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을때 정말 고유한 식별자가 필요할때 쓰이는 타입
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {
	name: 'ellie',
	age: 20
}

