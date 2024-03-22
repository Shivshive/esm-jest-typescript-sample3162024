import { describe, test, expect, jest } from "@jest/globals";
import { Chalk } from "chalk";
import { add, divide, multiply, substract } from '../src/calculator.ts'
import { addMsg } from "jest-html-reporters/helper";
import { print } from "../src/utils.ts";
import { stringify } from "ts-jest";



let i = 0;

describe('printing the sample statement with different color', function () {

    const chalk = new Chalk();



    test('printing with green color', function () {
        console.log(chalk.green('Hello There !  I am printing the green color'));
    })

    test('adding two numbers 5 and 10 ', function () {

        const num1 = 5;
        const num2 = 10;
        const actual = add(5, 10);
        const expected = 15
        expect(actual).toEqual(expected);


        const statement = print('Added', num1, num2, stringify(actual), stringify(expected));
        console.log(statement);
        addMsg({ message: statement });
    })


    test('multiplying two numbers 5 and 10 ', function () {

        const num1 = 5;
        const num2 = 10;
        const actual = multiply(5, 10);
        const expected = 50

        expect(actual).toEqual(expected);
        const statement = print('Multiplyed', num1, num2, stringify(actual), stringify(expected));
        console.log(statement);
        addMsg({ message: statement });

    })

    test('substracting two numbers 5 and 10 ', function () {

        const num1 = 5;
        const num2 = 10;
        const actual = substract(5, 10);
        const expected = -5

        expect(actual).toEqual(expected);
        const statement = print('Substracted', num1, num2, stringify(actual), stringify(expected));
        console.log(statement);
        addMsg({ message: statement });

    })

    test('dividing two numbers 5 and 10 ', function () {

        const num1 = 5;
        const num2 = 10;
        const actual = divide(5, 10);
        const expected = 0.5

        expect(actual).toEqual(expected);
        const statement = print('Divided', num1, num2, stringify(actual), stringify(expected));
        console.log(statement);
        addMsg({ message: statement });
    })

    test('flakey test', () => {

        expect(++i).toEqual(5);
        console.log(`executed with i ${i}`)
    })

});