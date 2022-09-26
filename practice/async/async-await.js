//async-await : promise를 간결/간편/동기적으로 실행되는 것처럼 보이게 만들어주는 것
//clear style of using promise :)

//1.async
// function fetchUser() {
// 	//do network request in 10 secs...
// 	// return 'keulee';
// 	return new Promise((resolve, reject) => {
// 		//do network request in 10 secs...
// 		resolve('keulee');
// 	})
// }

async function fetchUser() { //async키워드를 쓰면 자동으로 promise를 사용한다
	//do network request in 10 secs...
	return 'keulee';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

console.clear();
//2. await
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//await은 async가 붙은 함수 안에서만 사용할 수 있다
async function getApple() {
	await delay(2000);
	return 'apple';
}

async function getBanana() {
	await delay(1000);
	return 'banana';
}

//callback지옥과 비슷한 결과가 나올 수 있다.
// function pickFruits() {
// 	return getApple()
// 	.then(apple=> {
// 		return getBanana()
// 		.then(banana => `${apple} + ${banana}`);
// 	});
// }

async function pickFruits() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful promise APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]) //모든 프로미스들이 병렬적으로 다 받을때까지 모아주는 API
	.then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() { //배열에 전달된 프로미스 중에서 가장 먼저 값을 리턴하는 아이만 전달됨
	return  Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

