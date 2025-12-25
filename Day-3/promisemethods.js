//promise.all

Promise.all([
  Promise.resolve("Task1 Finished"),
  Promise.resolve("Task2 Finished"),
  Promise.resolve("Task 3 Finished"),
])

  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

//Promise.allSettled
Promise.allSettled([
  Promise.resolve("Task1 Finished"),
  Promise.reject("Task2 Rejected"),
  Promise.resolve("Task 3 done"),
]).then((results) => console.log(results));

//Promise.race
Promise.race([
  new Promise((resolve) => {
    setTimeout(() => resolve("Task1 First"), 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve("task 2 First"), 500);
  }),
]).then((result) => console.log(result));

//Promise.any
Promise.any([
  Promise.reject("Task2 Failed"),
  Promise.reject("Task2 Rejected"),
  Promise.resolve("Task3 Finished"),
])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//Promise resolve method

Promise.resolve("Task is resolved").then((done) =>
  console.log("Task is completed")
);

//Promise result method
Promise.reject("Task is rejected").catch((error) =>
  console.error("payment is failed")
);

//Promise finally method
Promise.resolve("Payment done successfully")
  .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("Task cleanup successfully"));

//
