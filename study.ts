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


//TUPLE TYPES
/*In TypeScript, tuple types allow you to define arrays 
with a fixed number of elements, where each element may 
have a different type. Unlike regular arrays, tuple types
enforce a specific order and type for each element in 
the tuple. Tuple types are defined by specifying the 
types of each element in a specific order within square 
brackets */

//Declaring Tuple Types
let i_Person: [string, number] = ["Alice", 30];

//Accessing Elements
let my_name: string = i_Person[0]; // Accessing the first element (string)
let my_age: number = i_Person[1];  // Accessing the second element (number)

//Modifying Tuple Elements
i_Person[0] = "Bob";   // Valid, as the first element is of type string
i_Person[1] = 25;      // Valid, as the second element is of type number

//Tuple Type Constraints
/*You can define more complex tuple types with specific constraints using union 
types, literal types, or other custom types */
type Coordinate = [number, number];
let point: Coordinate = [3, 4]; // Valid
//let invalidPoint: Coordinate = [3, "4"]; // Error: Type '"4"' is not assignable to type 'number'



//ENUM TYPES
//Defining an Enum
enum Color {
  Red,
  Green,
  Blue,
}

//Accessing Enum Members
let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // Outputs: 2

//Custom Enum Values
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//Reversle Mapping
/*Enums in TypeScript also support reverse mapping. 
You can convert enum values to their associated names 
using the enum itself*/
let colorName: string = Color[2]; // Converts 2 to "Blue"

//Enum Iteration
/*You can iterate over the members of an enum using 
for...in or for...of loops */
for (let color in Color) {
  console.log(color); // Outputs: "Red", "Green", "Blue"
}


//ANY TYPES


//UNION TYPES
/*In TypeScript, a union type allows you to specify that 
a variable, parameter, or return value can have one of 
several specified types. Union types are formed by using 
the | (pipe) symbol to separate the possible types. 
This means a variable with a union type can hold a value 
of any of the specified types. Union types are particularly 
useful when you want to work with values that can be of 
different types but still maintain type safety. */

//Declaring a Union Type
let Iage: number | string;
Iage = 30; // Valid assignment (number)
Iage = "Thirty"; // Valid assignment (string)

//Using Union Types in Function Parameters and Return Types
function formatInput(input: number | string): string {
  return `Formatted: ${input}`;
}

const result1: string = formatInput(42); // Valid
const result2: string = formatInput("Hello"); // Valid

//Using Union Types with Array
let values: (number | string)[] = [1, "two", 3, "four"];

//Combining Different Data Types
type Result = number | boolean;
let answer: Result = 42; // Valid assignment (number)
answer = true; // Valid assignment (boolean)

//Using Union Types with Object Properties
interface iPerson {
  name: string;
  mYage: number | null;
}

const alice: iPerson = {
  name: "Alice",
  mYage: null, // Valid, age can be a number or null
};

//Checking for Union Types
/*You can use type guards or conditional checks to 
narrow down the type when working with union types */
function isNumberOrString(input: number | string): boolean {
    return typeof input === "number" || typeof input === "string";
  }
  
  let value: number | string = 42;
  if (isNumberOrString(value)) {
    // Inside this block, value is narrowed down to number | string
    console.log(value.toFixed(2)); // Valid (if value is a number)
  }
  

//LITERAL TYPES
/*In TypeScript, literal types allow you to specify exact values 
that a variable or parameter can hold. Literal types 
restrict the possible values to a specific set of 
constants or literals. Literal types are often used to 
create more precise types that represent specific values */
//String Literal Types
let day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" = "Monday";

//Numeric Literal Types
let statusCode: 200 | 400 | 404 | 500 = 200;

//Boolean Literal Types
let isAdmin: true = true;

//Custom Literal Types
type Gender = "Male" | "Female" | "Non-Binary";
let personGender: Gender = "Male";



//FUNCTION TYPES
/*In TypeScript, you can specify the types of 
functions using function types. Function types define 
the parameters' types and the return type of a function. 
TypeScript provides several ways to define function 
types */

//Function Parameter and Return Type Annotations
/*We can annotate a function's parameter types and 
return type using : followed by the type */
function addd(a: number, b: number): number {
    return a + b;
}

//Function Types Alias
/* You can use type aliases to create reusable function types:*/
type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;

//Function Types with Optional Parameters
/*You can specify optional parameters in function 
types using ? */
type PrintMessage = (message: string, times?: number) => void;

const printt: PrintMessage = (message, times) => {
    if (times === undefined) {
        console.log(message);
    } else {
        for (let i = 0; i < times; i++) {
            console.log(message);
        }
    }
};

//Function Types with Rest Parameters
/*You can specify rest parameters in function types 
using the rest syntax ... */
type ConcatenateStrings = (...strings: string[]) => string;
const concatenate: ConcatenateStrings = (...strings) => strings.join("");

//Function Types as Parameters:
/*You can use function types as parameters to other functions: */
type MathOperationn = (a: number, b: number) => number;

function applyOperation(operation: MathOperation, a: number, b: number): number {
    return operation(a, b);
}

//row Function Type Inference:
/*TypeScript can often infer the function type from 
arrow functions*/
const multiply = (a: number, b: number) => a * b;





//Interfaces

//Modules

//Classes

//

const age:number = 33;
const myName:string = "Ivan";
const isMarried:boolean = false;