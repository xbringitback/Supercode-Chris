import { data } from "./cities.js";

export const filterGreaterThen100000 = (data) => {
    return data.filter(city => city.population > 100000);
}
export const filterLessThen100000 = (data) => {
    return data.filter(city => city.population < 100000);
}