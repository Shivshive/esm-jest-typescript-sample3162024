import { Chalk } from "chalk";

const chalk = new Chalk;

export function print(operator:String, num1:number, num2:number, actual:String, expected:String){
    return chalk.green(`${operator} two numbers ${num1} , ${num2} by Actual => ${actual} || Expected => ${expected}`);
}