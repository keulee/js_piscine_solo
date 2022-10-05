// Promise, <Promise>.then(), <Promise>.catch(), async, await 키워드, 함수를 사용할 수 없다.
function randomFail() {
	if (Math.random() < 0.2)
		throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

let process = ["반죽", "1차 발효", "성형", "2차 발효", "튀기기"];
let pTime = [3000, 5000, 4200, 2000, 5000];
let i = -1;

function makeKwabaegi() {

	i++;
	if (i == process.length) //해주지 않으면 배열 끝값에서 계속 undefine으로 읽힘
		return ;
	console.log(`${process[i]} 중...`);
	setTimeout(()=>{
		try
		{
			randomFail();
			console.log(`${process[i]} 완료!`);
			if (process[i] == "튀기기")
				console.log(`꽈배기가 완성되었습니다! 맛있는 꽈배기 드세용`);
			makeKwabaegi();
		}
		catch (e)
		{
			console.log(e);
			i--;
			makeKwabaegi();
		}
	}, pTime[i]);
}

makeKwabaegi();


//
// function makeKwabaegi() {
// 	console.log("반죽 만드는 중...");
// 	setTimeout(()=>{
// 		try
// 		{
// 			randomFail();
// 			console.log("반죽 완성!");
// 			firstFermentation();
// 		}
// 		catch (error)
// 		{
// 			console.log(error);
// 			makeKwabaegi();
// 		}
// 	}, 3000);
// }
