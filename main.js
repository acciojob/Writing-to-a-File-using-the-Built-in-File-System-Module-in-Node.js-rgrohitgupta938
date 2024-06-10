const fs = require("fs");

const mesg = "Hello, World!";

fs.writeFile("output.txt", mesg, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Success");
});

// TODO: Write the message "Hello, World!" to the file "output.txt"
