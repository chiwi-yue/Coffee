// // Use "input()" to input a line from the user
// // Use "input(str)" to print some text before requesting input
// // You will need this in the following stages
// const input = require('sync-input');

// /*

// // Part 1
// const mesgStartMakeCoffee = "Starting to make a coffee";
// const msgGrindCoffee = "Grinding coffee beans";
// const msgBoilWater = "Boiling water";
// const msgMixWater = "Mixing boiled water with crushed coffee beans";
// const msgPourCoffee = "Pouring coffee into the cup";
// const msgPourMilk = "Pouring some milk into the cup";
// const msgCoffeeReady = "Coffee is ready!";
// const msgPool = [mesgStartMakeCoffee, msgGrindCoffee, msgBoilWater, msgMixWater, msgPourCoffee, msgPourMilk, msgCoffeeReady];

// // method #1 Self-executing function
// (function () {
//     for (let msg of msgPool) {
//         console.log(msg);
//     }
// }) ();

// // method #2 Arrow-function
// let printMsg = (msgPool) => {
//     for (const msg of msgPool) {
//         console.log(msg);
//     }
// }
// printMsg(msgPool);

// // method #3 Use Array forEach() function
// msgPool.forEach(msg => console.log(msg));

// // method #4 Passing arguments to the anonymous function
// let printMassage = function(msgPool) {
//     for (const msg of msgPool) {
//         console.log(msg);
//     }
// }
// printMassage(msgPool);

// */

// // Part 2
// // const input = require('sync-input')

// // const coffeeRecipe = {
// //     water: 200,
// //     milk: 50,
// //     coffeeBeans: 15
// // }

// // let qtyCups = input("Write how many cups of coffee you will need:\n");
// // let calMassage = `For ${qtyCups} cups of coffee you will need:`
// // for (const [ingredient, quantity] of Object.entries(coffeeRecipe)) {
// //     let unit = ( ingredient == 'coffeeBeans' ) ? 'gr' : 'ml';
// //     console.log(`${qtyCups * quantity} ${unit} of ${ingredient}`);
// // }

// // Part 3

// let waterQty;
// let milkQty;
// let coffeeBeansQty;

// let availableIngredients = {
//     water: ["water", "ml", waterQty, 200],
//     milk: ["milk", "ml", milkQty, 50],
//     coffeeBeans: ["coffee beans", "gr", coffeeBeansQty, 15]
// };

// function getIngredients (availableIngredients) {
//     for(const [, value] of Object.entries(availableIngredients)) {
//         let unit = value[1];
//         let ingredient = value[0];
//         const quantity = parseInt(input(`Write how many ${unit} of ${ingredient} the coffee machine has:`));
//         value[2] = quantity;
//     }
// }

// function calculateCoffee (availableIngredients) {
//     let minCupsArray = [];
//     for(const [, value] of Object.entries(availableIngredients)) {
//         let ingredientRecipe = value[3];
//         let availableIngredient = value[2];
//         let cupQuantity = availableIngredient / ingredientRecipe;
//         minCupsArray.push(cupQuantity);
//     }
//     const maxCups = Math.floor(Math.min(...minCupsArray));
//     return maxCups;
// }

// function checkOrder () {
//     const max = calculateCoffee (availableIngredients);
//     const orderCups = input("Write how many cups of coffee you will need:");
//     const extraCups = max - orderCups;
//     if (max > orderCups) {
//         console.log(`Yes, I can make that amount of coffee (and even ${extraCups} more than that)`);
//     } else if (max == orderCups) {
//         console.log(`Yes, I can make that amount of coffee`);
//     } else {
//         console.log(`No, I can make only ${max} cups of coffee`);
//     }
// }

// getIngredients(availableIngredients);
// calculateCoffee(availableIngredients);
// checkOrder();

// Part 4
// const input = require('sync-input');
// const input = require('prompt-sync')();

// Initialise the coffee machine

// let coffeeMachine = {
//     water: 400,
//     milk: 540,
//     beans: 120,
//     cups: 9,
//     money: 550,
// };

// const displayCoffeeInfo = function () {
//     let coffeeMachineInfo = [
//         `${coffeeMachine.water} ml of water`,
//         `${coffeeMachine.milk} ml of milk`,
//         `${coffeeMachine.beans} g of coffee beans`,
//         `${coffeeMachine.cups} disposable cups`,
//         `\$${coffeeMachine.money} of money\n`,
//     ]; 
//     console.log("The coffee machine has:");
//     coffeeMachineInfo.forEach(info => console.log(info)); 
// };

// const machineOperation = function () {
//     let command = input(`Write action (buy, fill, take):`);
//     switch (command) {
//         case "buy":
//             buyCoffee();
//             break;
//         case "fill":
//             fillIngredients();
//             break;
//         case "take":
//             takeMoney();
//             break;
//         default:
//             break;
//     }
// };

// const coffeeRecipe = {
//     "espresso": {water: 250, milk: 0, beans: 16, cups: 1, money: -4},
//     "latte": {water: 350, milk: 75, beans: 20, cups: 1, money: -7},
//     "cappuccino": {water: 200, milk: 100, beans: 12, cups: 1, money: -6},
// };

// const orderName = {
//     "1": "espresso",
//     "2": "latte",
//     "3": "cappuccino",
// };

// const buyCoffee = function () {
//     let userChoice = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n`);
//     const option = orderName[userChoice];
//     orderProcess(option);
// };

// const orderProcess = function (option) {
//     let order = coffeeRecipe[option];
//     for (let [key, value] of Object.entries(coffeeMachine)) {
//         value -= order[key];
//         coffeeMachine[key] = value;
//     }
// };

// const fillIngredients = function () {
//     for (let [key, value] of Object.entries(coffeeMachine)) {
//         let fillIngredient;
//         if (key == 'beans' ) {
//             fillIngredient = parseInt(input(`Write how many grams of coffee ${key} you want to add:`));
//         } else if (key == 'cups') {
//             fillIngredient = parseInt(input(`Write how many disposable coffee ${key} you want to add:`));
//         } else if (key == 'money') {
//             fillIngredient = value - coffeeMachine.money;
//         } else {
//             fillIngredient = parseInt(input(`Write how many ml of ${key} you want to add:\n`));
//         }
//         coffeeMachine[key] = value + fillIngredient;
//     }
// };

// const takeMoney = function () {
//     let availableMoney = coffeeMachine.money;
//     console.log(`I gave you $${availableMoney}\n`);
//     coffeeMachine.money -= coffeeMachine.money;
// };

// const coffeeOperation = function () {
//     displayCoffeeInfo();
//     machineOperation();
//     displayCoffeeInfo();
// };

// coffeeOperation();


// part 5
// const input = require('sync-input');
 const input = require('prompt-sync')();

// Initialise the coffee machine

let coffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550,
};

const displayCoffeeInfo = function () {
    let coffeeMachineInfo = [
        `${coffeeMachine.water} ml of water`,
        `${coffeeMachine.milk} ml of milk`,
        `${coffeeMachine.beans} g of coffee beans`,
        `${coffeeMachine.cups} disposable cups`,
        `\$${coffeeMachine.money} of money\n`,
    ]; 
    console.log("The coffee machine has:");
    coffeeMachineInfo.forEach(info => console.log(info)); 
};

const machineOperation = function () {
    let command = input(`Write action (buy, fill, take, remaining, exit):\n`);
    console.log();
        switch (command) {
            case "buy":
                buyCoffee();
                machineOperation();
                break;
            case "fill":
                fillIngredients();
                machineOperation();
                break;
            case "take":
                takeMoney();
                machineOperation();
                break;
            case "remaining":
                displayCoffeeInfo();
                machineOperation();
                break;
            case "exit":
                break;
            default:
                break;
        }
    
};

const coffeeRecipe = {
    "espresso": {water: 250, milk: 0, beans: 16, cups: 1, money: -4},
    "latte": {water: 350, milk: 75, beans: 20, cups: 1, money: -7},
    "cappuccino": {water: 200, milk: 100, beans: 12, cups: 1, money: -6},
};

const orderName = {
    "1": "espresso",
    "2": "latte",
    "3": "cappuccino",
    "back": "to main menu:"
};

const buyCoffee = function () {
    let userChoice = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n`);
    let option = orderName[userChoice];
    if (option != "to main menu:") {
        orderProcess(option);
    } else {
        machineOperation();
    }
};

const orderProcess = function (option) {
    let order = coffeeRecipe[option];
    let enoughMaterial;
    for (let [key, value] of Object.entries(coffeeMachine)) {
        if (value >= order[key]) {
            enoughMaterial = true;
        } else {
            enoughMaterial = false;
            console.log(`Sorry, not enough ${key}!\n`);
            break;
        } 
    }

    if (enoughMaterial == true) {
        for (let [key, value] of Object.entries(coffeeMachine)) { 
            value -= order[key];
            coffeeMachine[key] = value;
        }
        console.log(`I have enough resources, making you a coffee!\n`);
    }
};

const fillIngredients = function () {
    for (let [key, value] of Object.entries(coffeeMachine)) {
        let fillIngredient;
        if (key == 'beans' ) {
            fillIngredient = parseInt(input(`Write how many grams of coffee ${key} you want to add:\n`));
        } else if (key == 'cups') {
            fillIngredient = parseInt(input(`Write how many disposable ${key} you want to add:\n`));
        } else if (key == 'money') {
            fillIngredient = value - coffeeMachine.money;
        } else {
            fillIngredient = parseInt(input(`Write how many ml of ${key} you want to add:\n`));
        }
        coffeeMachine[key] = value + fillIngredient;
    }
};

const takeMoney = function () {
    let availableMoney = coffeeMachine.money;
    console.log(`I gave you $${availableMoney}\n`);
    coffeeMachine.money -= coffeeMachine.money;
};

const coffeeOperation = function () {
    machineOperation();
};

coffeeOperation();