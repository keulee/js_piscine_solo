//Promise 객체 통해 진행, 단계별 성공시 resolve 이용
//각 작업은 promise의 reject를 이용, 실패 케이스를 만들어야함.
//async, await, try / catch 키워드는 사용할 수 없다!

// function randomFail() {
// 	if (Math.random() < 0.2)
// 		throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
// }

function randomFail() {
	if (Math.random() < 0.2)
		return true;
}

function errorMsg(i) {
	console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
	start(i - 1);
}

let process = ["반죽", "1차 발효", "성형", "2차 발효", "튀기기"];
let pTime = [3000, 5000, 4200, 2000, 5000];
// let i = -1;

function makeKwabaegi(i) {
	return new Promise(function(resolve, reject) {
		console.log(`${process[i]} 중...`);
		setTimeout(() => {
			if(randomFail())
				reject(i);
			else
			{
				console.log(`${process[i]} 완료!`);
				if (process[i] == "튀기기")
					console.log(`꽈배기가 완성되었습니다! 맛있는 꽈배기 드세용`);
				resolve(i);
			}
		}, pTime[i]);
	});
}

function start(i) {
	i++;
	if (i === process.length)
		return ;
	makeKwabaegi(i).then(start).catch(errorMsg);
}

// makeKwabaegi(0);
start(-1);

//<---------------------->
// function goToSchool() {
//     console.log("학교에 갑니다.");
// }

// function arriveAtSchool() {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			let status = Math.floor(Math.random() * 2);
// 			if (status === 1) {
// 				resolve();
// 				console.log("arrive at school")
// 				// resolve("학교에 도착했습니다."); //왜 실행이 안되지?
// 			}
// 			else
// 			{
// 				reject('back to home');
// 			}
// 		}, 2000);
// 	});
// }

// function home() {
//     console.log("arrive at home");
// }

// function study() {
//     console.log("열심히 공부를 합니다.");
// }

// // goToSchool();
// // arriveAtSchool().then(function() {
// // 	study();
// // })

// goToSchool();
// arriveAtSchool()
// .then(function(res) {
// 	study();
// })
// .catch(function(err){
// 	console.log(err);
// 	home();
// })
