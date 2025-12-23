//Without Arguments

const a = () => "Hi";
console.log(a);

//with Arguments

const sum = (a, b) => a + b;

console.log(sum(2, 3));

//Returning object literals

const Employee = (id, name) => ({ Id: id, Name: name });
console.log(Employee(1, "Aman"));
