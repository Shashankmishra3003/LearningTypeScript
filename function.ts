//Functions and Types

function add(n1:number, n2: number){
    return n1 + n2;
}

//undefined and void, if return type is undefined then a return statement is necessary.
//void same as other languages.
function printResult(num:number) : undefined{
    console.log('Result: ' +num);
    return;
}
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}



printResult(add(5,12));

//assigning function to variable and using it a function call
// let combineValues: Function;

//Any function that takes 2 number parameters and returns a number
let combineValues: (a: number, b: number) => number;
combineValues = add;

//combineValues = printResult; //ERROR as printResult does not take parameter and we are passing parameter in log

console.log(combineValues(8,8));

//using callbacks

addAndHandle(10,20,(result) => {
    console.log(result);
});