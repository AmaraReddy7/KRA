//promise

const fetchgreeting = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const s = Math.random() > 5;
      if (s) {
        resolve("Hello ");
      } else {
        reject(new Error("failed "));
      }
    }, 1000);
  });
};

//async await

interface user {
  name: string;
  email: string;
}

async function fetchuser(): Promise<user[]> {
  console.log("fetching users");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { name: "alice", email: "alice@gmail.com" },
    { name: "sun", email: "sun@gmail.com" },
  ];
}
