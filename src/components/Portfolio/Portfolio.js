import React from "react";
import "./Portfolio.css";
import Project from "./Project";
function Portfolio() {
  let projects = [
    {
      name: "Review",
      technologies: [
        "React",
        "Amplify",
        "Cognito",
        "API Gateway",
        "S3",
        "DynamoDB"
      ],
      link: "https://fordalo.com",
      repo: "https://github.com/stevemcd87/review",
      details:
        "Allows user to create notes to review. Notes can include an image, an audio recording and subnotes."
    },
    {
      name: "Recipes",
      technologies: ["Angular", "Auth0"],
      link: "https://stevemcd87.github.io/Recipes/home",
      repo: "https://github.com/stevemcd87/Recipes",
      details:
        "Allows user to add recipes, then displays the recipe on a mobile view."
    },
    {
      name: "Anibal Hardware",
      technologies: ["ReactOnRails", "RubyOnRails", "PostgreSQL"],
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
        return <Project key={ind} {...{ project, ind }} />;
      })}
    </div>
  );
}

export default Portfolio;
