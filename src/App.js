import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import NextContainerButton from "./components/NextContainerButton/NextContainerButton";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
  // const [userText, setUserText] = useState("");

  return (
    <div id="App">
      <div id="container-1" className="container">
        <Header />
        <NextContainerButton />
      </div>
      <div id="container-2" className="container">
        <Technologies />
        <NextContainerButton />
      </div>

      <Portfolio />
    </div>
  );
}

// <div id="container-2" className="container">
//   <div>
//     <h1>About Me</h1>
//   </div>
//   <NextContainerButton />
// </div>

export default App;
