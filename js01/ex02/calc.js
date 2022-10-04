
let time = document.querySelector('time');
// console.log(time);
let datetime = new Date();
time.setAttribute('datetime', datetime.toISOString());

let year = datetime.getFullYear();
let month = datetime.getMonth();
let day = datetime.getDay();
let hours = datetime.getHours();
let minutes = datetime.getMinutes();
let seconds = datetime.getSeconds();
let daynight;
if (hours > 12)
{
	daynight = '오후 ';
	hours = hours - 12;
}
else
	daynight = '오전 ';

time.innerHTML += `${year}. ${month}. ${day} ${daynight} ${hours}:${minutes}:${seconds}`;

function printProduct() {
	let product = document.getElementById('product').value;
	document.getElementById('resultProduct').innerHTML = product;
}

function printPrice() {
	let price = document.getElementById('price').value;
	document.getElementById('resultPrice').innerHTML = Number(price).toLocaleString();
}

function memberCheck(){
    let isChecked = document.getElementById("member").checked;
    if (isChecked == true){
        document.getElementById("level").disabled = false
    }
    else{
        document.getElementById("level").disabled = true
    }
}

function calculatePrice() {
	let productPrice = document.getElementById("price").value;
	const selectLevel = document.getElementById('level');
	const level = selectLevel.options[selectLevel.selectedIndex].text;
	if (level == "Lv1")
		productPrice *= 0.95;
	else if (level == "Lv2")
		productPrice *= 0.90;
	else if (level == "Lv3")
		productPrice *= 0.85;
	document.getElementById('resultFinalPrice').innerHTML = Number(productPrice);
}

