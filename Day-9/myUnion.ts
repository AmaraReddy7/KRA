let score: number | string = 33;
score = "55";

type user = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hitesh: user | Admin = {
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
function getDbId(id: number | string) {
  //id.toLowerCase() //shows error because num and str
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
