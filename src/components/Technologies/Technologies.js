import React from "react";
import "./Technologies.css";

export default function Technologies() {
  return (
    <div className="technologies-component">
      <h2>Technologies</h2>
      <ul className="tech-list">
        <div>
          <li>
            <h3>Frameworks </h3>
          </li>
          <li>jQuery</li>
          <li>React</li>
          <li>Angular</li>
          <li>RubyOnRails</li>
        </div>
        <div>
          <li>
            <h3>Testing</h3>
          </li>
          <li>React-Testing-Library</li>
        </div>
        <div>
          <li>
            <h3>AWS</h3>
          </li>
          <li>Amplify</li>
          <li>S3</li>
          <li>Lambda</li>
          <li>API Gateway</li>
          <li>Cognito</li>
        </div>
        <div>
          <li>
            <h3>Databases</h3>
          </li>
          <li>SQL/ PostgreSQL</li>
          <li>DynamoDB(NoSQL)</li>
        </div>
      </ul>
    </div>
  );
}
