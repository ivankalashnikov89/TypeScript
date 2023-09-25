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

//OBJECT TYPES

//Interface
/*Interfaces are one of the primary ways to define 
object types in TypeScript. They allow you to specify 
the structure of an object, including its properties 
and their types */
interface Person {
  name: string;
  age: number;
}

const i_person: Person = {
  name: "Alice",
  age: 30,
};

//Inline Type Annotation
/*You can also define object types using inline type 
annotations. This is useful when you want to define 
an object type for a specific variable without creating 
a separate interface */
const you_person: { name: string; age: number } = {
  name: "Bob",
  age: 25,
};

//Optional Properties
/*In TypeScript, you can make object properties optional 
by adding a ? after the property name */
interface Car {
  make: string;
  model: string;
  year?: number; // Optional property
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
};

//Readonly Properties
/*You can make object properties read-only by using 
the readonly keyword */
interface Point {
  readonly x: number;
  readonly y: number;
}

//const origin: Point = { x: 0, y: 0 };
/*origin.x = 5; // Error: Cannot assign to 'x' because 
it is a read-only property.*/

//Index Signature
/*Index signatures allow you to define objects with 
dynamic keys. */
interface Dictionary {
  [key: string]: number;
}

const scores: Dictionary = {
  math: 90,
  history: 85,
  english: 88,
};



//ARRAY TYPES
//Array Type Annotation
let numberss: number[] = [1, 2, 3, 4, 5];
let list_of_names: string[] = ["Alice", "Bob", "Charlie"];

//Generic Array Type
/*You can use a generic array type by using the Array<T> 
syntax, where T represents the type of elements in the 
array */
let scoress: Array<number> = [85, 90, 78];
let fruits: Array<string> = ["apple", "banana", "cherry"];

//Readonly Arrays
/*You can make an array read-only by using the readonly keyword 
in combination with the array type */
const readOnlyNumbers: readonly number[] = [1, 2, 3];
//eadOnlyNumbers.push(4); // Error: Property 'push' does not 
//exist on type 'readonly number[]'.

//Tuple Types
/*Tuple types allow you to define arrays with a fixed 
number of elements, where each element may have a 
different type. Tuple types are defined by specifying 
the types of each element in a specific order */
let iPerson: [string, number] = ["Alice", 30];

//Array of Union Types
/*You can create arrays that can hold values of multiple 
types using union types. */
let mixedValues: (string | number)[] = ["Alice", 30, "Bob", 25];

// Readonly Arrays with as const
/*Using as const ensures that the array is treated as read-only */
const colors = ["red", "green", "blue"] as const;
//colors[0] = "purple"; // Error: Cannot assign to '0' because it is a read-only property.


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