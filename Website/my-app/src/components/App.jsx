import React from "react";
import "../styles.css";
// Importing Components
import TitleNavBar from "./TitleNavBar";
import Queries from "./Queries";
import About from "./About";
import Footer from "./Footer";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App" id="home">
      <TitleNavBar />
      <Welcome />
      <Queries />
      <About />
      <Footer />
    </div>
  );
}

export default App;
