const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", "utf8");

const writeableStream = fs.createWriteStream("Output.txt");

readableStream.pipe(writeableStream);

writeableStream.on("finish", () => {
  console.log("File copy Completed");
});
readableStream.on("error", (err) => {
  console.error("error reading file", err);
});
writeableStream.on("error", (err) => {
  console.log("Error writing the file", err);
});
