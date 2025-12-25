async function myfunc() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

myfunc();

//async example
const res = async () => {
  let data = "Welcome to Parker House";
  return data;
};
res().then((data) => {
  console.log(data);
});

//await example

const res1 = async () => {
  let resu = await "welcome to parker House ";
  console.log(resu);
};

console.log(1);
res1();
console.log(2);
