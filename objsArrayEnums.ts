
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
enum Role {ADMIN, READ_ONLY,AUTHOR};
const person = {
    name : 'Shashank',
    age : 27,
    hobbies : ['Sports','Cooking'],
    //Enums
    role : Role.ADMIN
}
//Array of any types, we can use string and number
//let favoriteActivity:any[];

let favoriteActivity : string[];
favoriteActivity = ['Sports'];

console.log(person);

//TypeScript inferes type of hobbies 
for(const hobby of person.hobbies)
{
    console.log(hobby.toLocaleUpperCase());
}

//ENUM supported in TypeScript

if(person.role == Role.ADMIN)
{
    console.log('is Admin');
}