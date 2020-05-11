import React from "react";
import "./Portfolio.css";
import Project from "./Project";
function Portfolio() {
  let projects = [
    {
      name: "Markdown Textarea React",
      technologies: [
        "React",
      ],
      link: "https://stevemcd87.github.io/markdown-textarea-react-demo/",
      repo: "https://github.com/stevemcd87/markdown-textarea-react",
      details:
        "a React component node package that displays a textarea form input that accepts markdown syntax and converts value to html"
    },
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
        "Allows user to create notes & questions to review and test themselves afterwards. Notes can include an image, an audio recording and a main note field that accepts markdown syntax."
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
