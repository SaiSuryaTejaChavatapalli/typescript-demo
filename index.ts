// const greeting: string = 'Sai Surya Teja';
// const res = greeting.toLowerCase();

// const myNum: number = 6;
// myNum.toFixed();
// console.log(res);

// let myNum2 = 7;
// myNum2 = 'sai';

//any
// let hero;
// function getHero() {
//   return 'Thor';
// }
// hero = getHero();
// console.log(hero);
// function addTwo(num: string): string {
//   return 2;
// }
// const res = addTwo('hi');
// console.log(res);
// const printThree = (name: string): never => {
//   throw new Error('error');
// };
// printThree('Sai');

// Type Aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: 'Sai Surya Teja', email: 'sai@gmail.com', isActive: true };
// }
// console.log(
//   createUser({ name: 'Sai Surya Teja', email: 'sai@gmail.com', isActive: true })
// );

//ReadOnly and optional

// type User = {
//   name: string;
//   phone?: number;
//   readonly id: string;
// };

// let myName: User = {
//   name: 'Sai Surya Teja',
//   phone: 9885432575,
//   id: '987',
// };

// myName.name = 'James Bond';
// console.log(myName);
// myName.id = '909'; //id is readonly property

// function createUser(user: User) {
//   console.log(user);
// }
// createUser({ name: 'Hi', id: '789' });

//Arrays

// const superHeroes: string[] = [];
// const superPowers: number[] = [];
// superHeroes.push('hi');
// superPowers.push(2);

// type User = {
//   name: string;
//   ph: number;
//   add?: string;
// };
// const allUsers: User[] = [];
// allUsers.push({ name: 'hi', ph: 7 });
// console.log(allUsers);

//Union
// let myArr2: (number | string)[] = [];
// myArr2.push(4);
// console.log(myArr2);
// myArr2.push('s');
// console.log(myArr2);

//tuples
// type User = [string, number];
// let myUser: User;
// myUser = ['a', 1];
// console.log(myUser); //right

// myUser = [1, 'a']; //Not accepting

// let rgb1: [number, number, number] = [233, 233, 233]; //works
// let rgb2: [number, number, number] = [233, 'hi', 233]; //swiggly

// type User = [number, string];
// let myArr: User = [1, 'hi'];
// myArr = [2, 'hello'];
// myArr[1] = 'harshi';
// myArr.push(7); //Allows doing and changes the tuple structure
// myArr.push('hi'); //Allows doing and changes the tuple structure
// console.log(myArr);
// myArr.push(boolean); //Doesn't allow

// enum Flights {
//   FIRST,
//   SECOND,
//   THIRD, //Automatically Allocated numbers
//   FOURTH,
// }
// console.log(Flights.FIRST);
// console.log(Flights.SECOND);
// console.log(Flights.THIRD);
// console.log(Flights.FOURTH);

//Objects
// const user: {
//   name: string;
//   age: number;
// } = {
//   name: 'Sai',
//   age: 20,
// };
// console.log(user.age);

// //Functions
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// const addRes = add(1, 2);
// console.log(addRes);
// const addRes1 = add(1, 5);
// console.log(addRes1);

// function printResult(num: number): void {
//   console.log(num);
// }
// printResult(2);

// // let combinedValues: Function; //We can also specify like this.but less specific
// let combinedValues: (a: number, b: number) => number;
// combinedValues = add; //it matches the type we specified.
// console.log(combinedValues(3, 5));
// combinedValues = printResult; // Givers squiggly line because it doesn't match the type we specified
// combinedValues(9);

// //UNKNOWN
// let userInput: any;
// let userName: string;

// userInput = 'Sai Surya Teja';
// userName = userInput;
// console.log(userName); //Executes doesn't give any error because TS Disables type checking

// let userInput: unknown;
// let userName: string;
// userName = userInput; //gives error because TS doesn't know which type it is
// //but if you type check with if condition Ts understands gives no error,So it is better than any
// userInput = 'Sai Surya Teja';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

//NEVER
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorcode: code,
  };
}

generateError('Error occured', 500);
