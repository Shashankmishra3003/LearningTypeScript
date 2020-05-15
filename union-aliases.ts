//UNION Types, accepting 2 different types of values in the function, number,string.
// function combine(input1:number | string, input2:number | string){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     }
//     else{
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

//Literal Types, used along with UNION types, here resultConversion is forced to have fixed values(as-number and as-text).
// function combine(input1:number | string, input2:number | string,
//      resultConversion:'as-number' | 'as-text'){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
//         result = +input1 + +input2;
//     }
//     else{
//         result = input1.toString() + input2.toString();
//     }
//     return result;
//     // if(resultConversion === 'as-number'){
//     //     return +result;
//     // }
//     // else{
//     //     return result.toString();
//     // }
// }

//TYPE Aliase: giving names to the type, to avaoid mistakes.

type Combinable = number | string;
type ConversionDesc = 'as-number' | 'as-text';

function combine(input1 : Combinable, input2 : Combinable,
    resultConversion:ConversionDesc){
   let result;
   if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
       result = +input1 + +input2;
   }
   else{
       result = input1.toString() + input2.toString();
   }
   return result;
   // if(resultConversion === 'as-number'){
   //     return +result;
   // }
   // else{
   //     return result.toString();
   // }
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max','Anna','as-text');
console.log(combinedNames);