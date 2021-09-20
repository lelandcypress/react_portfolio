import React from "react";

function Navbar() {
  return (
    <div class="row mx-0 px-0">
      <div id="aboutBtn" className="col-3 buttons">
        About Me
      </div>
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
