const dynamicType = {
    val : undefined,
    put : function(input) {
        if (typeof input == 'number')
            this.val = input;
        else
            console.log("Put number value plz");
    },
    change : function(input) {
        if (input === "string")
            // console.log("here");
            this.val = String(this.val);
    },
    printType : function(val) {
        console.log(typeof val);
    }
}


let test1 = dynamicType;
console.log(test1.val);
test1.put(42);
console.log(test1.val);
test1.change("string");
test1.printType(test1.val);