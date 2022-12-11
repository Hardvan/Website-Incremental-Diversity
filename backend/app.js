//? Enter "npm run dev" in the terminal to start the server

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

  // TODO: Send the file to python script

  res.send("File uploaded successfully");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
