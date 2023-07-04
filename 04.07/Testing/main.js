import cowsay from "cowsay"
import { hello } from "./lib/dialog.js";

console.log(hello());

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()