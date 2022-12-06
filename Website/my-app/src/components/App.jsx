import React from "react";
import "../styles.css";
// Importing Components
import TitleNavBar from "./TitleNavBar";
import Welcome from "./Welcome";
import Dataset from "./Dataset";
import Queries from "./Queries";
import FileUpload from "./FileUpload";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App" id="home">
      <TitleNavBar />
      <Welcome />
      <Dataset />
      <Queries />
      <FileUpload />
      <About />
      <Footer />
    </div>
  );
}

export default App;
