function promiseex() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list1 = { fruit1: "Apple", fruit2: "Banana" };
      resolve(list1);
    }, 2000);
  });
}
promiseex()
  .then((list1) => {
    console.log(list1);
  })
  .catch((error) => {
    console.error(error);
  });
