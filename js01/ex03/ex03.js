let menuEvent = document.querySelectorAll('li');
// console.log(menuEvent[0].textContent);


for (let i = 0; i < menuEvent.length; i++) {
	menuEvent[i].addEventListener("mouseover", function(event) {
		event.target.style.color = "white";
		menuEvent[i].addEventListener("click", function(event) {
			alert(`You ordered ${menuEvent[i].textContent}!`);
			event.stopPropagation();
		});
	});


	menuEvent[i].addEventListener("mouseout", function(event) {
		event.target.style.color = "black";
	});
}

// document.onlick=processClick;

// function processClick(evt){
//     evt=evt||window.event;
//     var x=0,y=0;
//     //       pageX  ,  firefox,opera,chrome,safari
//     if(evt.pageX){
//         x=evt.pageX;
//         y=evt.pageY;
//     }
//     alert("you clicked at x="+x+" y="+y);
// }

// var x = null;
// var y = null;

// document.addEventListener('mousemove', onMouseUpdate, false);
// document.addEventListener('mouseenter', onMouseUpdate, false);

// function onMouseUpdate(e) {
//   x = e.pageX;
//   y = e.pageY;
//   console.log(x, y);
// }

// function getMouseX() {
//   return x;
// }

// function getMouseY() {
//   return y;
// }
