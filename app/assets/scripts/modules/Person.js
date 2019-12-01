//This keyword is refer to use the current object created.
//This is the blue print of the object similar to class.
// function Person(fullName,favColor){
//     this.name=fullName;
//     this.color=favColor;
//     this.great= function(){
//         console.log("Hello myname is "+this.name+" favorite color is"+this.color+".");
//     }
// }

//this is ES6 syntex but the babel is conver it to ES5 and run it.
class Person{
    constructor(fullName,favColor){
        this.name=fullName;
        this.color=favColor;
    }
    great(){
        console.log("Hello my name is "+this.name+" favorite color is "+this.color+".");
    }
} 


//in the export object we can pass the any object into the export
//example: exports.name ="Super";
// we can recive that in the require file.
//Export the required things to get in the another file.

export default Person;