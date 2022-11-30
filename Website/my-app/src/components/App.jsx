import React from "react";
import "../styles.css";
// Importing Components
import Headers from "./Headers";
import Queries from "./Queries";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Headers />
      <Queries />
      <About />
      <Footer />
    </div>
  );
}

export default App;
