// Promise 객체를 통해 진행
// 각 단계별 성공시 resolve 를 이용
// async, await, try / catch는 사용할 수 없다.

function randomFail() {
	if (Math.random() < 0.2)
		return true;
}

function errorMsg(i) {
	console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
	stepB(i - 1);
}

function errorM() {
	console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
}

function makeNoodle() {
	return new Promise((resolve, reject) => {
		console.log("면 삶기 중...");
		setTimeout(()=> {
			if (randomFail())
				reject();
			else
			{
				console.log("면 삶기 완성!");
				resolve();
			}
		}, 10000);
	});
}

let process = ["브로콜리 대치기", "마늘과 양파 볶기", "베이컨과 햄볶기", "소스, 남은 야채 넣고 다 같이 볶기"];
let pTime = [1000, 2000, 2000, 3000];

function vegProcess(i) {
	return new Promise((resolve, reject) => {
		console.log(`${process[i]} 중...`);
		setTimeout(()=> {
			if (randomFail())
				reject(i);
			else
			{
				console.log(`${process[i]} 완성`);
				resolve(i);
			}
		}, pTime[i]);
	})
}

function stepB(i) {
	i++;
	if (i == process.length)
		return;
	vegProcess(i).then(stepB).catch(errorMsg);
}

const stepA = () => {
	return makeNoodle().catch(errorM);
}

// stepA();
// stepB(-1);
function mixAB() {
	return Promise.all([stepA(), stepB(-1)]).catch(errorMsg);
}

mixAB().then( () => {
	return new Promise((resolve, reject) => {
		console.log("면까지 넣고 다 같이 볶기 중..");
		setTimeout(()=> {
			if (randomFail())
				reject();
			else
			{
				console.log("완성! 맛있게 드세요!");
				resolve();
			}
		}, 3000);
	});
});

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 3000, 'foo');
// });

// //Array와 같이 iterable한 객체
// Promise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });


// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 3000);
// });

// Promise.all([p1, p2, p3]).then(values => {
//   console.log(values); // [3, 1337, "foo"]
// });

// // 매개변수 배열이 빈 것과 동일하게 취급하므로 이행함
// var p = Promise.all([1,2,3]);
// // 444로 이행하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 이행함
// var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// // 555로 거부하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 거부함
// // var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// // setTimeout()을 사용해 스택이 빈 후에 출력할 수 있음
// setTimeout(function() {
//     console.log(p);
//     console.log(p2);
//     // console.log(p3);
// });


// var p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('하나'), 1000);
//   });
//   var p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('둘'), 2000);
//   });
//   var p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('셋'), 3000);
//   });
//   var p4 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('넷'), 4000);
//   });
// //   var p5 = new Promise((resolve, reject) => {
// 	// reject(new Error('거부'));
// //   });


// // .catch 사용:
// Promise.all([p1, p2, p3, p4])
// .then(values => {
//   console.log(values);
// })
// .catch(error => {
//   console.log(error.message)
// });


// var p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('p1_지연_이행'), 1000);
//   });

//   var p2 = new Promise((resolve, reject) => {
// 	reject(new Error('p2_즉시_거부'));
//   });

//   Promise.all([
// 	p1.catch(error => { return error }),
// 	p2.catch(error => { return error }),
//   ]).then(values => {
// 	console.log(values[0]) // "p1_지연_이행"
// 	console.log(values[1]) // "Error: p2_즉시_거부"
//   })
