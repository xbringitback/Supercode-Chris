import {arrayNumbers} from "./data.js"
import {arrayCars} from "./data.js"

const sortCarsFunction = () => {
    const sortCars = arrayCars.sort()
    return sortCars;
}
export default sortCarsFunction;

export const sortNumbersFunction = () => {
    const sortNumbers = arrayNumbers.sort((a, b) => a - b);
    return sortNumbers;
}
 

// export default ohne geschweifte klammern !
// export const mit geschweifte klammern !