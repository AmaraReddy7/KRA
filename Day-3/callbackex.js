function callbac(myfunction) {
  setTimeout(() => {
    const data = { name: "Aman", age: 21 };
    myfunction(data);
  }, 3000);
}
callbac((data) => {
  console.log("Data:", data);
});
