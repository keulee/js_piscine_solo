//Promise(원하는 기능을 비동기적으로 실행하도록 도와주는 것) is a JS object for asynchronous operation.
//state of Promise : 프로미스가 만들어져서 지정한 오퍼레이션이 수행중일때: pending상태
//					오퍼레이션을 성공적으로 끝내게 되면 -> fulfilled
//					파일을 찾을 수 없거나 네트워크 문제가 있다면 -> rejected
//프로미스에는...
//Producer(원하는 기능을 수행해서 해당하는 기능을 수행하는)
//Consumer(원하는 데이터를 소비하는)

//1.Producer
//when new Promise is created, the executor(function) runs automatically.
const promise = new Promise((resolve, reject) =>{
	//doing some heavy work(network, read files)
	console.log('doing something...');
	setTimeout(()=>{
		resolve('keulee');
		// reject(new Error('no network')) //자바스크립트에서 제공하는 오브젝트
	},2000);
});

//2.Consumers: then, catch, finally
promise //
	.then((value) => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(()=>{ //default (어떤 기능을 마지막으로 사용하고 싶을때)
		console.log('finally');
	});

//3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(()=> resolve(1), 1000);
});

fetchNumber //묶어서 다른 비동기적인 아이들을 처리할 수도 있다
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num - 1), 1000);
	});
})
.then(num => console.log(num));

//4. Error handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('hen'), 1000);
	});
const getEgg = hen =>
	new Promise((resolve, reject) => {
		// setTimeout(() => resolve(`${hen} => Egg`), 1000);
		setTimeout(() => reject(new Error(`error! ${hen} => Egg`)), 1000);
	});
const cook = egg =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => chick`), 1000);
	});

getHen()
// .then(hen => getEgg(hen))
.then(getEgg)
.catch(error => {
	return 'bread';
})
// .then(egg => cook(egg))
.then(cook)
// .then(meal => console.log(meal));
.then(console.log)
.catch(console.log);

