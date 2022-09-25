import React from "react";

//create a footer with the current year rendering dynamically.
function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
