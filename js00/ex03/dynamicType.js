const dynamicType = {
    val : undefined,
    put : function(input) {
        if (typeof input == 'number')
            this.val = input;
        else
            console.log("Put number value plz");
    },
    change : function(input) {
        if (input === "String")
            // console.log("here");
            this.val = String(this.val);
			// this.val = Number(this.val).toString(this.val);
			// null, undefined는 toString()으로 변환 불가, String()은 가능.
		else if (input == "Number")
			this.val = Number(this.val);
		else if (input == "Object")
			// this.val = Object(this.val); //?
			// this.val = { put: this.val };
			this.val = new Number(this.val);
		else if (input == "Array")
			this.val = [this.val];
    },
    printType : function() {
        console.log(this.val);
    }
}

console.log("********************");

let a = dynamicType;

a.put(42); // type === Number
a.change("Array"); // convert to array with the input;
a.printType(); // print the converted value on console;
console.log(typeof a.val); //object 리턴함 (배열은 object의 특수한 형태이기 때문)
console.log(Array.isArray(a.val)); //Array.isArray(value)로 확인가능 (bool)

console.log("********************");

let b = dynamicType;

b.put(42);
b.change("String");
b.printType();
console.log(typeof b.val);

console.log("********************");

let c = dynamicType;

c.put(-123);
c.change("Object");
c.printType();
console.log(typeof c.val);
console.log(Array.isArray(c.val));

console.log("********************");

let d = dynamicType;

d.put(42);
d.change("Number");
d.printType();
console.log(typeof d.val);
