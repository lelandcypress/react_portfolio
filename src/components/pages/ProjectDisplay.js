import React from "react";
import Projects from "./Projects";

const projects = [
  {
    name: "S.W.O.R.D",
    description:
      "A Project Task Management App designed for the modern superhero",
    techUsed: [
      "Bootstrap",
      "JavaScript",
      "Handlebars.js",
      "Node.js",
      "Express",
      "MySQL",
      "Sequalize",
    ],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/S.W.O.R.D",
    deployed: "https://frozen-harbor-76666.herokuapp.com/",
  },
  {
    name: "Employee Management Command Line",
    description:
      "Leveraging SQL to manage an employee roster through the command line",
    techUsed: ["JavaScript", "Node.js", "MySQL", "Inquirer.js"],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/Employee_Management_Command_Line",
    deployed:
      "https://drive.google.com/file/d/1CirnQLb6iSTCaZTXAKYkgog1cEKOoZgs/view/",
  },
  {
    name: "Team Profile Builder",
    description: "Using OOP to generate custom team profiles",
    techUsed: ["Bootstrap", "JavaScript", "Node.js", "Inquirer.js"],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/Team-Profile-Builder",
    deployed:
      "https://drive.google.com/file/d/1VoMvyUYqw2uR-X5GvifhDP9WIDLVwJmE/view",
  },
  {
    name: "Jacobs Weather",
    description: "A weather app making use of two API endpoints.",
    techUsed: ["Bootstrap", "JavaScript"],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/Jacobs_Weather",
    deployed: "https://lelandcypress.github.io/Jacobs_Weather/",
  },
  {
    name: "Workout Tracker",
    description:
      "A handy web application that helps you meet your goals by logging your workouts..",
    techUsed: ["JavaScript", "MongoDB"],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/workout_tracker",
    deployed: "https://stark-oasis-70234.herokuapp.com//",
  },

  {
    name: "Coding Quiz",
    description: "Test your basic JavaScript Knowledge and see your score.",
    techUsed: ["JavaScript", "Bootstrap"],
    image: "placeholder",
    gitHub: "https://github.com/lelandcypress/Coding-Quiz",
    deployed: "https://lelandcypress.github.io/Coding-Quiz/",
  },
];

export default function ProjectDisplay(){
    return (
        <div>
            {projects.map((project)=>(
                <Projects name ={project.name} description={project.description} techUsed={project.techUsed} image ={project.image} gitHub={project.gitHub} deployed ={project.deployed} key={project.id} />
            ))}
        </div>
    )
}