async function fetchdata() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.log("Error while running a url ", error);
  }
}
fetchdata();
