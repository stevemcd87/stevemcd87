import React from "react";
import "./Project.css";
import NextContainerButton from "../NextContainerButton/NextContainerButton";

function Project(props) {
  console.log(props);
  let { project, ind } = props,
    { name, technologies, details, link, repo } = project;
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
      <div className="links">
        {repo && <a target="_blank" href={repo}>Repo</a>}
        {link && <a target="_blank" href={link}>Demo</a>}
      </div>

      </div>

      <NextContainerButton />
    </div>
  );
}

export default Project;
