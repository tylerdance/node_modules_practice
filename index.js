const {favFoods} = require("./module")

function printFoods(foods) {
    for (let i = 0; i < foods.length; i++) {
        foods[i]
        return foods;
    }
}
console.log(printFoods(favFoods));


// chalk npm
const chalk = require('chalk');
console.log(chalk.red('hi'));

// colors npm
const colors = require('colors');
console.log('hello'.green);

// luxon npm
const luxon = require('luxon');
const now = luxon.DateTime.local();
console.log(now);
