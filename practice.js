// // const data = `A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk`;

// // function replaceString(data) {
// //     let replacedStr = data.replace(/stun/gi, "stump");
// //     return replacedStr;
// // }

// // console.log(replaceString(data));

// // Use Arrow function
// // let replaceString = (data) => {
// //     return data.replace(/stun/gi, "stump");
// // }


// // console.log(replaceString(data));


// // Self-execution function => print it
// // (function () {
// //     console.log(data.replace(/stun/gi, "stump"));
// // }) ();


// // Self-execution function => return it
// // (function () {
// //     return replaceStr = data.replace(/stun/gi, "stump");
// // }) ();

// // const string = "hello@yoursite.edu.co.mak";

// // # use Arrow function
// // let outputStr = string => string.split(".");
// // console.log(outputStr(string));

// // use Self-execution function
// // (function () {
// //     console.log(string.split("."));
// // }) ()

// // const input = require('sync-input');

// // let qtyCups = input("Write how many cups of coffee you will need: \n");
// // let calMassage = `For ${qtyCups} cups of coffee you will need:
// // ${qtyCups * 200} ml of water
// // ${qtyCups * 50} ml of milk
// // ${qtyCups * 15} g of coffee beans`;
// // console.log(calMassage);


// /*
//  *

// const input = require('sync-input');

// const regCoffeeRecipe = {
//   water : 200,
//   milk : 50,
//   coffeeBeans : 15
// }

// let userNumOfCups = input('Write how many cups of coffee you will need:\n')

// console.log(`For ${userNumOfCups} cups of coffee you will need:\n`)
// for (const [ingredient, quantity] of Object.entries(regCoffeeRecipe)) {
//   let unitOfMeasure = (ingredient == 'coffeeBeans') ? 'gr' : 'ml'
//   console.log(`${userNumOfCups * quantity} ${unitOfMeasure} of ${ingredient}`)
// }

// *
// */

// /*

// let cups = input("Write how many cups of coffee you will need:\n")
// input(`For ${cups} cups of coffee you will need:
// ${200 * cups} ml of water
// ${50 * cups} ml of milk
// ${15 * cups} g of coffee beans`)

// */


// /*
// const input = require('sync-input');

// const perCup = {
//     water: 200,
//     milk: 50,
//     beans: 15,
// }

// const nCups = Number(input("Write how many cups of coffee you will need:\n"));
// const msg =
// `For ${nCups} cups of coffee you will need:
// ${nCups * perCup.water} ml of water
// ${nCups * perCup.milk} ml of milk
// ${nCups * perCup.beans} g of coffee beans`

// console.log(msg);
// */


// // const printArray = (n, m) => {
// //   const arrayLenght = Math.floor((m - n) / 2); 
// //   let array = [];
// //   if (n & 1 == 1) {
// //     const array = Array.from(Array(arrayLenght).fill().map((_, n) => n * 2));

// //   }
// //   console.log(array);
// // };


// // printArray(1, 10);

// // const fruitsArray = ["apple", "orange", "banana"];
// // fruitsArray.forEach(fruit => console.log(fruit));

// // let fruits = ["apple", "orange", "banana"];
// // fruits.forEach(v => console.log(v));

// // let total = (a, b) => {
// //   let sum = 0;
// //   for (let i = a; i <= b; i++) {
// //     sum += i;
// //   }
// //   console.log(sum);
// // };
// // total(1, 10);

// // const myFunc = x => {
// //   for (let i = 1; i <= x; i++) {
// //     console.log(i * i * i);
// //   }
// // };

// // myFunc(5);

// let a = {water: 350, milk: 75, beans: 20, cups: 1, money: 290};
// let b = {water: 250, milk: 25, beans: 10, cups: 1, money: 7 };

// for (let [key, value] of Object.entries(a)) {
//   value -= b[key];
//   a[key] = value;
//   console.log(value);
// }

// console.log(a);


// function getSalary(value){
//   let cost;
//   switch (value) {
//        case "Bootstrap":
//             cost = 15;
//             break;
//        case "Chrome Extension":
//             cost = 20;
//             break;
//        case "React":
//             cost = 30;
//             break;
//        default:
//             cost = 25;
//   }
//   console.log(`$${cost} per hour`);
// }

// getSalary("Chrome Extension");

// // function checkTheDate(value){
// //   if (value <= 5 && value >= 1) {
// //     isWorkDays = true;
// //   } else {
// //     isWorkDays = false;
// //   }

// //   switch (isWorkDays) {
// //     case true:
// //       console.log("Yes, you should go to work");
// //       break;
// //     case false:
// //       console.log("No, this is your well-deserved weekend!");
// //       break;
// // 	}
// // }

// // function checkTheDate(value) {
// //   let isWorkDays = (value >= 1 && value <= 5) ? true : false;
// //   switch (isWorkDays) {
// //     case true:
// //       console.log("Yes, you should go to work");
// //       break;
// //     default:
// //       console.log("No, this is your well-deserved weekend!");
// //   }
// // }

// // checkTheDate(7);
// // checkTheDate(5);


// // for (let n = 1; n <= 50; n++) {
// //   if (n == 5) {
// //     break;
// //   }
// //   console.log(n); // 4
// // }

// let array = [3, 4, 0, 20, 0, 20];

// function sum(numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     if (num == 0) {
//       break;
//     }
//     total += num;
//   }
//   return total;
// }


// console.log(sum(array));


// // function checkEvenOrOdd(numbers) {
// //   for (let num of numbers) {
// //     if (num === 0) {
// //       break;
// //     }
// //     switch (true) {
// //       case num % 2 === 0:
// //         console.log("even");
// //         break;
// //       default:
// //         console.log("odd");
// //     }
// //   }
// // }

// function checkEvenOrOdd(numbers) {
//   for (let num of numbers) {
//     if (num === 0) {
//       break;
//     }
//     console.log(num % 2 === 0 ? 'even' : 'odd');
//   }
// }


// let numbers = [3, 4, 1, 0, 0, 999];

// checkEvenOrOdd(numbers);


function find5(numbers) {
  for (let i in numbers) {
    if (numbers[i] === 5) {
      return i;
    } else continue;
  }
  return -1;
}

let numbers = [10,3,8,5,3,4,5];
console.log(find5(numbers));
