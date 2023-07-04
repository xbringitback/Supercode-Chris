import { names } from "./data.js";
import { numbers } from "./data.js";
console.log(names);
// console.log(numbers);

import {firstElement} from "./function.js";
console.log(firstElement(names));

import { getAllNotLast } from "./function.js";
console.log(getAllNotLast(names));

import { lastElement } from "./function.js";
console.log(lastElement(names));

import { getAllNotFirst } from "./function.js";
console.log(getAllNotFirst(names));

import { removeElement } from "./function.js";
console.log(removeElement(names, "Eric"));

import { spreadArray } from "./function.js";
console.log(spreadArray(numbers));

import { getSum } from "./function.js";
console.log(getSum(numbers));

import { randomNumber } from "./function.js";
console.log(randomNumber(1, 50));

import { firstLetter } from "./function.js";
console.log(firstLetter("hello"));

import { UpperCaseString } from "./function.js";
console.log(UpperCaseString("world"));

import { checkParam } from "./function.js";
console.log(checkParam("Test", "t"));
console.log(checkParam("Test", "q"));