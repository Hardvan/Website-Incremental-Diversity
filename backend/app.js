//? cd to backend. Enter "npm run dev" in the terminal to start the server
//? When console.log() -ing, the output will be displayed in the terminal

const express = require("express");
const app = express();
const expressFileUpload = require("express-fileupload"); // to upload files

app.use(expressFileUpload());

// POST to test connection
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// POST to upload file
app.post("/uploadFile", async (req, res) => {
  //* Save the received file in a variable
  const received_file = req.files.FileReceived;

  // Console log the received file
  console.log("\nDisplaying Received File Details: ");
  console.log(received_file);

  // Saving the file in a folder
  await received_file.mv(
    `${__dirname}/ReceivedFileFolder/received_microdata.csv` // TODO: Change when hosting on GitHub
  );

  // TODO: Send the file to incremental diversity python script
  //* Connection with python script
  var spawn = require("child_process").spawn;
  var pythonProcess = spawn("python", ["./anonymise.py"]);

  //* Transfer received csv file to python script
  // JSON.stringify() converts the received file to a string.
  // Directly sending the csv file will result in an error.
  pythonProcess.stdin.write(JSON.stringify(received_file));
  pythonProcess.stdin.end(); // End the input stream

  console.log("Returned from Python Script");

  // TODO: Send response to React
  // OR
  // TODO: Download Masked File on the client side

  res.send("File uploaded successfully");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
