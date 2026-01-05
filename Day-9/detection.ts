//narrowing
//type guarding
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide Id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
}
//type in operator
function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
// instance of classes
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
//using type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}

//Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

//key of

type person = {
  name: string;
  age: number;
};

type personkeys = keyof person;
const key1: personkeys = "name";

//builtin mapped Types
interface user {
  id: number;
  name: string;
}

//parital
type PartialUser = Partial<User>;
//makes all props req
type RequiredUser = Required<Partial<User>>;

//read only
type readonly = Readonly<user>;

//pick<T,K> create a type with subset of properties
type UserCredentials = Pick<user, "name" | "id">;

//Omit<T,K> = creates a type by removing specified properties from T
type pu = Omit<user, "id">; //removes id

//Record creat a type with specified keys and values
type us = Record<"name" | "id" | "guest", string>;
