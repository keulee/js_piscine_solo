// https://ko.javascript.info/settimeout-setinterval
// setTimeout: 일정 시간이 지난 후에 함수를 실행하는 방법
export function setTimer(callback, interval) {
	let count = 0;

	//setTimeout -> 타이머 식별자(timer identifier) 반환 -> 스케줄링 취소를 원할때 이 식별자 사용
	let timerId = setTimeout(function func(){
		if (callback(count)) {
			count++;
			setTimeout(func, interval);
		}
		else
			clearTimeout(timerId); //식별자를 매개변수로 사용해 clearTimeout으로 스케줄링 취소
	}, interval);
}

// function sayHi() {
// 	// alert("hello");
// 	console.log("hello");
// }

// setTimeout(sayHi, 1000);
