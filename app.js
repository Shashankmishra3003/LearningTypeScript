function add(n1, n2, showresult, phrase) {
    var Result = n1 + n2;
    if (showresult) {
        console.log(phrase + Result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = 'Result is: ';
var result = add(number1, number2, printResult, phrase);
