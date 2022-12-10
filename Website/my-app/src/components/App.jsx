import React from "react";
import "../styles.css";
// Importing Components
import TitleNavBar from "./1_TitleNavBar/TitleNavBar";
import Welcome from "./2_Welcome/Welcome";
import Dataset from "./3_Dataset/Dataset";
import Queries from "./4_Queries/Queries";
import FileUpload from "./5_FileUpload/FileUpload";
import About from "./6_About/About";
import Footer from "./7_Footer/Footer";

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
