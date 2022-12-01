import React from "react";
import "../styles.css";
// Importing Components
import Queries from "./Queries";
import About from "./About";
import Footer from "./Footer";
import TitleNavBar from "./TitleNavBar";
import QuickLinks from "./QuickLinks";

function App() {
  return (
    <div className="App" id="home">
      <TitleNavBar />
      <QuickLinks />
      <Queries />
      <About />
      <Footer />
    </div>
  );
}

export default App;
