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
  // Save the received file in a variable
  const received_file = req.files.FileReceived;

  // Console log the received file
  console.log("Displaying Received File Details: ");
  console.log(received_file);

  // Saving the file in a folder (no need of this step. Just for testing)
  await received_file.mv(
    `${__dirname}/ReceivedFileFolder/${received_file.name}` // TODO: Change when hosting on GitHub
  );

  // Connection with python script (no need of this step. Just for testing)
  var spawn = require("child_process").spawn;

  var pythonProcess = spawn("python", ["./test.py"]);

  // Transfer received file to python script
  pythonProcess.stdin.write(JSON.stringify(received_file));
  pythonProcess.stdin.end();

  // Display the output
  python_received_file = "";
  pythonProcess.stdout.on("data", function (data) {
    console.log("Displaying data from python script: ");
    console.log(data.toString());
    python_received_file = data;
  });

  // TODO: Send the file to incremental diversity python script

  // TODO: Send response to React

  res.send("File uploaded successfully");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
