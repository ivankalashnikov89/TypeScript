//My TypeScript Journey

//https://www.typescriptlang.org

/*TypeScript (TS) is a statically typed superset of 
JavaScript that adds optional static typing, advanced 
tooling, and improved developer experiences to 
JavaScript-based web and application development. 
It compiles to plain JavaScript, making it compatible 
with all JavaScript environments. TypeScript helps 
catch type-related errors at compile-time, provides 
enhanced code navigation and autocompletion, and is 
widely used for building scalable and maintainable web 
and software applications. */

//TYPESCRIPT DATA TYPES
//Number
let yourAge: number = 30;

//String
let yourName: string = "Alice";

//Boolean
let isStudent: boolean = true;

//Null and Undefined
let someValue: null = null;
let otherValue: undefined = undefined;

//Any
let dynamicValue: any = 42;

//Void
function logMessage(): void {
  console.log("This function does not return a value.");
}

//Never
function throwError(message: string): never {
  throw new Error(message);
}

//Object
let person: Object = { name: "Alice", age: 30 };

//Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

//Union
let result: number | string;
result = 42; // Valid
result = "Hello"; // Valid

//Intersection
interface Person {
  name: string;
}

interface Address {
  address: string;
}

let personWithAddress: Person & Address;




//Assigning Types

//Structural Types

//Object Types

//Array Types

//Tuple Types

//Enum Types

//Any Types

//Uniion Types

//Literal Ty[es

//Function Types



//Interfaces

//Modules

//Classes

//

const age:number = 33;
const myName:string = "Ivan";
const isMarried:boolean = false;