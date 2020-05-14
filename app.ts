function add(n1:number, n2:number, showresult:boolean, phrase:string)
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

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';

const result = add(number1,number2,printResult,phrase);
