const exid = {
	count : 10,
	up : function() {
		this.count++;
	},
	down : function() {
		this.count--;
	},
	showCount : function() {
		console.log(this.count);
	}
};

exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.showCount();
