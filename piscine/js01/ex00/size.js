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

let ul = document.body.children[1].children[1];
let screen = document.createElement('li');
let outer = document.createElement('li');
let inner = document.createElement('li');
let docSize = document.createElement('li');

// outer += innerHTML += `hi`;
// console.log(screen);
// let width = window.innerWidth;
screen.innerHTML += `Screen: ${window.screen.width} * ${window.screen.height}`;
outer.innerHTML += `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;
inner.innerHTML += `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;
docSize.innerHTML += `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`
// ul.appendChild(screen);
ul.append(screen);
// ul.appendChild(outer);
ul.append(outer);
// ul.appendChild(inner);
ul.append(inner);
// ul.appendChild(docSize);
ul.append(docSize);
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
// const doc = document.previousSibling;
// console.log(doc);
