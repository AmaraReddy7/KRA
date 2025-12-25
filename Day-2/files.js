const fs = require("fs");
const file_name = example.txt;

async function managefunctionoperations() {
  try {
    //creating a file and writing a file
    console.log(`File Creation: ${file_name}`);
    const initialcontent = "Welcome to filesystem";
    await fs.writeFile(file_name, initialcommint, "utf8");
    console.log("File successfully created");

    //reading a file
    console.log(`Reading a file: ${file_name}`);
    let data = fs.readFile(file_name, "utf8");
    console.log("File Content:", data);

    //updating a file
    console.log(`Updating a file:${file_name}`);
    const content = "Adding Additional Content";
    await fs.file.Append(file_name, content, "utf8");

    //Reading the updated file
    console.log("After updating the file");
    data = fs.readFile(file_name, "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.log("An error Occured", err);
  }
}
