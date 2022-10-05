//js02/ex00 : 호출 스케일링 익히는 법 (일정 시간이 지난 후에 원하는 함수를 예약 실행-호출-할 수 있게 하는 것)

// import { setTimer } from './setTimerTimeout.js';
import { setTimer } from './setTimerInterval.js';

function printNum(count) {
	console.log(count);
	return count < 3;
}

//비동기에 따른 난장판~.~ 결과물 생성
setTimer(printNum, 100); // 0 1 2 3 <= 각각 100ms의 간격으로 출력됨.
setTimer(printNum, 1000); // 0 1 2 3 <= 각각 1000ms의 간격으로 출력됨.
setTimer(printNum, 2000); // 0 1 2 3 <= 각각 2000ms의 간격으로 출력됨.
setTimer(printNum, 5000); // 0 1 2 3 <= 각각 5000ms의 간격으로 출력됨.
