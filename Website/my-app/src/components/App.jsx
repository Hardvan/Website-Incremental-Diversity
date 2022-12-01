import React from "react";
import "../styles.css";
// Importing Components
import TitleNavBar from "./TitleNavBar";
import QuickLinks from "./QuickLinks";
import Queries from "./Queries";
import About from "./About";
import Footer from "./Footer";

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
