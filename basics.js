"use strict";
function addNumber(n1, n2, showresult, phrase) {
    var Result = n1 + n2;
    if (showresult) {
        console.log(phrase + Result);
    }
    else {
        return n1 + n2;
    }
}
// Typescript infers the Type automatically 
var number1 = 5;
var number2 = 2.8;
var printResults = true;
var phrase = 'Result is: ';
var result = addNumber(number1, number2, printResults, phrase);
