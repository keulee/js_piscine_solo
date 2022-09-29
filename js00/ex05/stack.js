const stackCreate = () => ({
	arr: []
  });

//객체(stack) 안 배열이 비어있는지 확인하는 함수. Boolean을 리턴해준다.
function stackEmpty(stack) {
	if (!stack)
		throw "Error";
	if (stack.arr == 0)
		return (1);
	return (0);
}

//객체(stack) 안 배열에 자료(data)를 가장 위에 추가하는 함수. 리턴값은 없다.
function stackPush(stack, data) {
	if (!stack)
		throw "Error";
	let len = 0;
	while (stack.arr[len])
		len++;
	stack.arr[len] = data;
}

//객체(stack) 안 배열의 맨 위에 있는 자료를 리턴하는 함수.
function stackPeek(stack) {
	if (!stack)
		throw "Error";
	let len = 0;
	while (stack.arr[len])
		len++;
	return stack.arr[len - 1];
}

//객체(stack) 안 배열의 맨 위에 있는 자료를 지우는 함수. 리턴값은 없다.
function stackPop(stack) {
	if (!stack)
		throw "Error";
	let last = stackPeek(stack);
	let newArr = [];
	let i = 0;
	while (stack.arr[i] != last)
	{
		newArr[i] = stack.arr[i];
		i++;
	}
	stack.arr = newArr;
}

const	test1 = stackCreate();
const	comp = stackCreate();

console.log(test1.arr);
console.log(stackEmpty(test1));
stackPush(test1, "hello");
comp.arr.push('hello');
console.log(test1.arr);
console.log(comp.arr);
console.log(stackEmpty(test1));
stackPush(test1, "hi");
comp.arr.push('hi');
stackPush(test1, "hihi");
comp.arr.push('hihi');
stackPush(test1, "asdfasdf");
comp.arr.push('asdfasdf');
console.log(test1.arr);
console.log(comp.arr);
console.log(stackPeek(test1));
console.log(comp.arr.at(comp.arr.length - 1));

console.log();
stackPop(test1);
comp.arr.pop();

console.log(test1.arr);
console.log(comp.arr);
