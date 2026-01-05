const user = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isAvtive: true,
};

/*function createUser({name: string,isPaid: boolean}){
}
createUser({name : "hitesh",isPaid: false,})*/
//let newuser = {name: "hitesh",ispaid : false, email: "h@gamil.com"};
//createUser(newuser);

function createCourse(): { name: string; price: number } {
  return { name: "ts", price: 360 };
}

//type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUsers(user: User): User {
  return { name: "", email: "", isActive: true };
}
createUsers({ name: "", email: "", isActive: true });

type Person = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myperson: Person = {
  _id: "1234",
  name: "hero",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number; //intersection
  };

myperson.name = "santosh";
//myperson_id
