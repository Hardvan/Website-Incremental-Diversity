import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="Footer">
      &copy; {new Date().getFullYear()}: All rights reserved.
    </footer>
  );
}

export default Footer;
