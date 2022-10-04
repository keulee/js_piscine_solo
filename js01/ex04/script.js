let before = [];

window.addEventListener('scroll', (event) => {
	if(before.pop() < window.scrollY) {
		console.log("Scroll Down");
	}
	else {
		console.log("Scroll up");
	}
	// event.onscroll
	// let elem = event.target;
	// if (elem.scrollHeight - elem.scrollTop === elem.clientHeight)
	// {// event.onscroll = function() {
	// 	// if ((window.innerHeight + window.screenY) >= document.body.offsetHeight) {
	// 		alert("This is the end of the page");
	// 	// }
	// }
	before.push(window.scrollY);
})

// window.onscroll = function(event) {
// 	if ((window.innerHeight + window.screenY) >= document.body.offsetHeight) {
// 		alert("This is the end of the page");
// 	}
// }
