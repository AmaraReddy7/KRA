function mydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Aman", age: 23 };
      resolve(data);
    }, 2000);
  });
}
mydata()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
