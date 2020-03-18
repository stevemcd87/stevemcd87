import React from "react";
import "./Project.css";
import NextContainerButton from "../NextContainerButton/NextContainerButton";

function Project(props) {
  console.log(props);
  let { project, ind } = props,
    { name, technologies, details, link } = project;
  return (
    <div id={`container-${ind + 3}`} className="container project">
      <div className="project-content">
        <h1>{name}</h1>
        <h3>{technologies.join(", ")}</h3>
        <img
          src={`/gifs/${name.replace(" ", "")}.gif`}
          alt={`${name} project gif`}
          className="project-image"
        />
        <p>{details}</p>
        {link && <a href={link}>Public Demo</a>}
      </div>

      <NextContainerButton />
    </div>
  );
}

export default Project;
