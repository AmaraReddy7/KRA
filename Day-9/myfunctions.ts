function addTwo(num: number): number {
  return num + 2;
  //return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

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
const gethello = (s: string): string => {
  return "";
};

const marvel = ["thor", "spiderman", "ironman"];
marvel.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
