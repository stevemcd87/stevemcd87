import React, {  useEffect } from "react";
import "./Header.css";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";
import codewarsIcon from "@iconify/icons-simple-icons/codewars";

import styled, { keyframes } from "styled-components";
import {  slideInLeft } from "react-animations";

// const bounceAnimation = keyframes`${bounce}`;
const slideInLeftAnimation = keyframes`${slideInLeft}
from {
   transform: translatex(-100em); }
`;


const SlideIn = styled.div`
  animation: 1.5s linear ${slideInLeftAnimation};
`;
const HeaderList = [
  <SlideIn key="headeList2">
    <li className="header-li">
      <em>
        Does your Business need a Customized Website and<>&#47;</>or Computer
        Program?
      </em>
    </li>
    <li className="header-li">
      <em>Looking for an Experienced Web Developer to join your team?</em>
    </li>
    <li className="header-li">
      <strong>Call Me - <a href="tel:+9543933948">(954) 393-3948</a></strong>
    </li>
  </SlideIn>
];

function Header() {
  // const [headerListDisplayed, setheaderListDisplayed] = useState([]);

  useEffect(() => {});

  function getList(ind) {
    return HeaderList[ind];
  }
  // <Bounce>
  //   <h1>HEY</h1>
  // </Bounce>
  return (
    <div>
      <header>
        <div id="header-head">
          <h2 id="bio-name">Stephen McDonald</h2>
          <h3 id="bio-email">stephenmcdonald8787@gmail.com</h3>
          <div id="social-icons">
            <a
              className="icon-a hide"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.codewars.com/users/stevemcd87"
            >
              <Icon icon={codewarsIcon} />
            </a>
            <a
              className="icon-a hide"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/stephen-mcdonald-7b9069137/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="icon-a hide"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/stevemcd87"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <ul id="header-list">{HeaderList}</ul>
      </header>
    </div>
  );
}

export default Header;
