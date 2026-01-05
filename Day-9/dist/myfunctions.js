"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
getUpper("sanh");
addTwo(5);
signUp("john", "hohn@gmail.com", false);
loginUser("hi", "hi@gmail.com");
/*function getValue(myVal: number){
    if (myVal>5){
        return true
    }
    return "200 Ok"
}*/
const gethello = (s) => {
    return "";
};
const marvel = ["thor", "spiderman", "ironman"];
marvel.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=myfunctions.js.map