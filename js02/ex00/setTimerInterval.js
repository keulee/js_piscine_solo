// setInterval: 일정 시간 간격을 두고 함수를 실행하는 방법
export function setTimer(callback, interval) {
	let count = 0;

	let timerId = setInterval(()=>{
		if (callback(count)) {
			count++;
		}
		else
			clearInterval(timerId); //식별자를 매개변수로 사용해 clearTimeout으로 스케줄링 취소
	}, interval);
}
