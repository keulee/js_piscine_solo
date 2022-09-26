//JS is synchronous
//Execute the code block by orer after hoisting
console.log('1');
setTimeout(()=> //브라우저 API라 브라우저에 요청을 보냄
	console.log('2'), 1000); //1초 뒤 다시 불러줘 -> callback
// console.log('2');
console.log('3'); // 위 응답 기다리지 않고 콘솔로 넘어감
//1초뒤 브라우저에 요청한 API의 응답이 옴 (비동기)

//동기화 -> 정해진 순서에 맞게 코드가 실행되는 것
//비동기화 -> 언제 코드가 실행될 지 예측할 수 없는 것

//Synchronous callback (즉각적으로 동기적으로 실행하는 콜백)
function printImmidiately(print) { //함수의 선언이 호이스팅 돼 timeout위로 가게됨
	print();
}

printImmidiately(()=> console.log('hello'));

//Asynchronous callback (언제 실행될지 예측할 수 없는 콜백)
function printWithDelay(print, timeout) {
	setTimeout(print,timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);


//callback hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(()=> {
		if (
			(id === 'keulee' && password === 'dream') ||
			(id === 'coder' && password === 'academy')
		) {
			onSuccess(id);
		} else {
			onError(new Error('not found'));
		}

		}, 2000);

	}

	getRoles(user, onSuccess, onError) {

	}


}
