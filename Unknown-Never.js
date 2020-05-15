"use strict";
//Unknown type, userInout can store any value, more restrictive that any type
var userInput;
var userName;
userInput = 5;
userInput = 'Shashank';
//userName = userInput; //ERROR because string type cannot be assigned to unknown type;
//performing a check works
if (typeof userInput === 'string') {
    userName = userInput;
}
//Never type: the funcitons crashes the script because it throws an error, it will never return aything
// giving the type never makes it easier to understand that this function is going to crash the script and never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured!!', 500);
