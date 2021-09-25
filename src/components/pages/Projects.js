import React from "react";
import chart from "./srcPics/chart.PNG";
import cli from "./srcPics/CLI.PNG";
import sword from "./srcPics/sword_logo.png";
import question from "./srcPics/questionmark.png";
import sun from "./srcPics/Sun.PNG";
import team from "./srcPics/team.PNG";
import "../styles/Project.css";

const allImages = {
  "chart.PNG": chart,
  "CLI.PNG": cli,
  "sword_logo.png": sword,
  "questionmark.png": question,
  "Sun.PNG": sun,
  "team.PNG": team,
};

export default function Projects(props) {
  return (
    <div className="d-flex mx-2 my-4 col-xl-3 col-md-4 flex-wrap cards bordercustom">
      <div className="w-100">
        <figure className="d-flex row">
          <figcaption className="projtitle">{props.name}</figcaption>
          <p className="projDescription">{props.description}</p>
        </figure>
        <img
          className="imgProp"
          src={allImages[props.image]}
          alt="my_project"
        ></img>

        <div className="my-4 mx-2">
          <a href={props.gitHub} target="_blank" rel="noreferrer">
            <button>Github</button>
          </a>
          <a href={props.deployed} target="_blank" rel="noreferrer">
            <button className="mx-3">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
