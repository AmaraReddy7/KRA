//const user: (string | number)[] = [1,'hello']

let tuser: [string, number, boolean];

tuser = ["fg", 123, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example"];

newUser[1] = "hc.com";
//newUser.push(true) // shows error
