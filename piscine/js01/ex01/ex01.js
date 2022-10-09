// setTimeout(() => document.body.style.background = '', 3000);
// const progress = document.querySelectorAll('progress');
// let energyValue = progress[2].getAttribute('value');

// console.log(energyValue);
// setTimeout(() => document.body.style.background = '', 3000);
// progress[2].setAttribute('value', energyValue);

function setEnergyLow() {
	let energyValue = document.querySelector('.energy');
	// console.log(energyValue);
	let value = energyValue.getAttribute('value');
	// console.log(value);
	value -= 10;
	energyValue.setAttribute('value', value);
	energyValue.style.setProperty('--c',"red"); //자동 완성 기능으론 안되네?

}

function upAllProgressBar() {
	const progress = document.querySelectorAll('progress');
	for(let i = 0; i < progress.length; i++)
	{
		let eachValue;
		eachValue = Number(progress[i].getAttribute('value'));
		// console.log(eachValue);
		eachValue += 5;
		progress[i].setAttribute('value', eachValue);
	}
}

window.onload = function execute() {
	setEnergyLow();

	setTimeout(() => {
		upAllProgressBar();
	}, 5000);
};
