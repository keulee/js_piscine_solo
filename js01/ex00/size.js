// document.body.style.background = 'blue';
// setTimeout(() => document.body.style.background = '', 3000);

// let bodytext = document.body.children[0].children[0];

// bodytext.textContent = "Change!";

let time = document.body.children[1].children[0]; //time line으로 접근 <time datetime></time>
let datetime = new Date(); //date생성자 (Date 객체를 플랫폼에 종속되지 않는 형태로 생성)
time.setAttribute('datetime', datetime.toISOString()); //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

let hours = datetime.getHours();
let minutes = datetime.getMinutes();
let seconds = datetime.getSeconds();
if (hours > 12)
{
	time.innerHTML += '오후 ';
	hours = hours - 12;
}
else
	time.innerHTML += '오전 ';

time.innerHTML += `${hours}:${minutes}:${seconds}`;



// // const datetime = document.write("clock");


// // console.log(dt);

// function clock() {
// 	let time = new Date();
// 	let datetime = document.getElementsByTagName('time');
// 	// let divClock = document.getElementById('datetime').time;

// 	let hours = time.getHours();
// 	let minutes = time.getMinutes();
// 	let seconds = time.getSeconds();

// 	let msg;

// 	msg += `${hours}:${minutes}:${seconds}`;

// 	// let month = time.getMonth();
// 	// let date = time.getDate();
// 	// let day = time.getDay();
// 	// let week = []
// 	// DataView.innerText = `hello`;
// 	datetime.innerText = msg;
// }
// // clock();
// // console.log(window.innerHeight);

// const body = document.body;
// const div = document.querySelector('div');
// const spanHi = document.querySelector("#hi");
// const spanBye = document.querySelector("#bye");
// const div = document.createElement('div');
// const strong = document.createElement('strong');
// strong.innerText = 'Hello world 2';
// // div.innerText = "Hello world"
// // div.innerHTML ='<strong>Hello World 2</strong>';
// body.append(strong);
// // body.appendChild(div);
// body.append(div);

// spanBye.remove();
// div.append(spanBye);

// div.removeChild(spanHi);
// spanHi.remove();

// const div = document.querySelector('div');

// console.log(div.textContent); //HTML파일 안에 있는 모든 것을 인쇄
// console.log(div.innerText); //화면에 보이는 것을 인쇄

// console.log(spanHi.setAttribute('id', "asdfad"));
const doc = document.previousSibling;
console.log(doc);
