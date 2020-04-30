import React, { useEffect } from "react";
import "./Header.css";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";
import codewarsIcon from "@iconify/icons-simple-icons/codewars";

function Header() {
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
        <ul id="header-list">
          {" "}
          <li className="header-li">
            <em>Web Developer/ Programmer</em>
          </li>
          <li className="header-li">
            <strong>
              <a href="tel:+19543933948">(954) 393-3948</a>
            </strong>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
