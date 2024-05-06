#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(50));
console.log(chalk.bold.cyanBright("\t \t Word Counter App"));
console.log("=".repeat(50), "\n");
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: chalk.red("input"),
        message: chalk.bold.cyanBright("Enter a Sentence:")
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(chalk.bold("\n- sentence word:"));
console.log(words);
console.log(chalk.bold(`\n-Total words count is: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(50));
