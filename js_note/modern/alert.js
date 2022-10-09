// let question = prompt("what's your name?");
// alert(question);

// let answer = prompt("what is JS's official name?");
// if (answer == "ECMAScript")
//     alert("Correct!");
// else
//     alert("You didnt know? it's ECMAScript!");

// let num = prompt("type one number");

// if (num > 0)
//     alert(1);
// else if (num < 0)
//     alert(-1);
// else
//     alert(0);

// let result;

// result = (a + b < 4) ? '미만' : '이상';

// let login = prompt('Who\'s there?');

// if (login == 'Admin')
// {
//     let password = prompt('password?');
//     if (password == 'TheMaster')
//         alert('Welcome!');
//     else if (login == '' || login == null)
//         alert('Canceled');
//     else
//         alert('Wrong password');
// }
// else if (login == '' || login == null)
//     alert('Canceled');
// else
//     alert('I don\'t know');

// let user = 'John';

// function showMessage(from, text) {
//     // let user = 'Sam';
//     // console.log(`Hello ${user} !`);
//     if (text === undefined)
//         text = 'hi?';
//         // console.log(text ?? 'no input');
//     console.log(from + ' ' + text);
// }

// showMessage('Ann');
// showMessage('Ann', 'What\'s up?');

// function min(num1, num2) {
//     if (num1 > num2)
//         return num2;
//     else
//         return num1;
// }

// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));

// let func = min;

// console.log(func(1,-123));

// function ask(question, yes, no) {
//     if (question)
//         yes();
//     else
//         no();
// } 

// function yes() {
//     console.log("yes");
// }
// function no() {
//     console.log("no");
// }

// ask('', yes, no);

// const user = {}; // 객체생성
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// for (key in user) {
//     console.log(`key ${key} : value ${user[key]}`);
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// console.log(isEmpty(user));

// function isEmpty(obj) {
//     for (let key in obj)
//         return false;
//     return true;
// }

// const salaires = {
//     John : 100,
//     Ann : 160,
//     Pete : 130
// }

// function addSalaire(obj) {
// let sum = 0;

//     for(let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// console.log(addSalaire(salaires));

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number')
//             obj[key] *= 2;
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// multiplyNumeric(menu);

// console.log(menu);

const calculator = {
    read : 

}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());