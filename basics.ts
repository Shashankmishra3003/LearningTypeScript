function addNumber(n1:number, n2:number, showresult:boolean, phrase:string)
{
    const Result = n1 + n2;
    if(showresult)
    {
        console.log(phrase + Result);
    }
    else
    {
        return n1 + n2;
    }
}

// Typescript infers the Type automatically 
let number1 = 5;
const number2 = 2.8;
const printResults = true;
let phrase = 'Result is: ';

const result = addNumber(number1,number2,printResults,phrase);
