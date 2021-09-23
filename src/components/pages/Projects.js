import React from "react";
import chart from "./srcPics/chart.PNG";
import cli from "./srcPics/CLI.PNG";
import sword from "./srcPics/sword_logo.png";
import question from "./srcPics/question-1127660_1280.jpg";
import sun from "./srcPics/Sun.PNG";
import team from "./srcPics/team.PNG";

const allImages = {
  ["chart.PNG"]: chart,
  ["CLI.PNG"]: cli,
  ["sword_logo.png"]: sword,
  ["question-1127660_1280.jpg"]: question,
  ["Sun.PNG"]: sun,
  ["team.PNG"]: team,
};

export default function Projects(props) {
  return (
    <div>
      <div>
        <figure>
          <figcaption>{props.name}</figcaption>
          <p>{props.description}</p>
          <img src={allImages[props.image]}></img>
          <ul>
            <span>Tech Used</span>
            {props.techUsed.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </figure>
        <div>
          <a href={props.gitHub} target="_blank">
            <button>Github</button>
          </a>
          <a>
            <button>Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
