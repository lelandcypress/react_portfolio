import React from "react";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <div class="row mx-0 px-0">
      <Button id="aboutBtn" variant="outline-primary">
        About Me
      </Button>
      <div id="skillsBtn" className="col-3 buttons ">
        Skills
      </div>
      <div id="projectBtn" className="col-3 buttons ">
        Projects
      </div>
      <div id="contactBtn" className="col-3 buttons">
        Contact Me
      </div>
    </div>
  );
}

export default Navbar;
