// import { names } from "./data.js";
// import { numbers } from "./data.js";

export const firstElement = (array) => {
    return array[0];
}
export const getAllNotLast = (array) => {
    return array.slice(0, -1);
}

export const lastElement = (array) => {
    return array[3]
}

export const getAllNotFirst = (array) => {
    return array.slice(1)
}

export const removeElement = (array, element) => {
    return array.filter(item => item !== element);
}

export const spreadArray = (array) => {
    return [...new Set(array)];
}

export const getSum = (array) => {
    return array.reduce((a, b) => a + b, 0)
}

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const firstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const UpperCaseString = (string) => {
    return string.toUpperCase();
}

export const checkParam = (param1, param2) => {
    return param1.charAt(param1.length -1).toLowerCase() === param2.toLowerCase();
}

