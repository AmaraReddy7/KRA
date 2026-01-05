"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = "55";
let hitesh = {
    name: "hitesh",
    id: 22,
};
hitesh = { username: "hc", id: 334 };
/*function getDbId(id: number | string){
       //making some Apicalls
       console.log(`DB id is ${id}`);
}*/
getDbId(3);
getDbId("3");
function getDbId(id) {
    //id.toLowerCase() //shows error because num and str
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
const data = [1, 2, 3, 4];
const data2 = ["1", "2", "3", "4"];
const data3 = ["1", "2", 3, true];
let pi = 3.14;
let seatAllotment;
seatAllotment = "aisle";
//# sourceMappingURL=myUnion.js.map