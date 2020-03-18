import React from "react";
import "./Portfolio.css";
import Project from "./Project";
function Portfolio() {
  let projects = [
    {
      name: "Recipes",
      technologies: ["Angular", "Auth0"],
      link: "https://stevemcd87.github.io/Recipes/home",
      details: "Allows user to add recipes, then displays the recipe on a mobile view."
    },
    {
      name: "Anibal Hardware",
      technologies: ["ReactOnRails", "RubyOnRails"],
      details:
        "Custom program for a small business which displays all items and keeps track of purchases and inventory created by user."
    },
    {
      name: "Quick Learn",
      technologies: ["Django", "jQuery"],
      details:
        "Allows user to review Flash Cards and test their knowledge afterwards."
    },
    {
      name: "Florida Picks",
      technologies: ["Angular"],
      details:
        "Displays analytics for Florida's Pick 2 and Pick 3 games for user to examine."
    }
  ];
  return (
    <div id="portfolio-component">
      {projects.map((project, ind) => {
        return <Project key={ind} {...{project, ind}} />;
      })}
    </div>
  );
}

export default Portfolio;
