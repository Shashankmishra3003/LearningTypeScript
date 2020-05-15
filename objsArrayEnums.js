"use strict";
// Creating object and specifying types manually, sub-optimal
// const person: {
//     name:string;
//     age:number
//     role: [number,string]
// } = {
//     name:'Shashank',
//     age:27,
//     role : [2,'author']
// };
//Typescript infers the Object type, Optimal
// const person = {
//     name : 'Shashank',
//     age : 27,
//     hobbies : ['Sports','Cooking'],
//     //Tuple, only 2 elements, first element as numeric and second as string
//     role : [2,'author']
// }
//ENUM, can be customized ro have string values too
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Shashank',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    //Enums
    role: Role.ADMIN
};
//Array of any types, we can use string and number
//let favoriteActivity:any[];
var favoriteActivity;
favoriteActivity = ['Sports'];
console.log(person);
//TypeScript inferes type of hobbies 
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
//ENUM supported in TypeScript
if (person.role == Role.ADMIN) {
    console.log('is Admin');
}
