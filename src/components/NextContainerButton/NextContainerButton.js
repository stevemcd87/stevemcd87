import React, { useState, useEffect, useRef } from "react";
// import styled, { keyframes } from "styled-components";
import { FaArrowDown } from "react-icons/fa";

import "./NextContainerButton.css";

function NextContainerButton() {
  const [nextContainerOffset, setNextContainerOffset] = useState(0),
    [isActive, setIsActive] = useState(false),
    // [waitForSecondClick, setWaitForSecondClick] = useState(false),
    nc = useRef(null);


    // useEffect(()=>{
    //   if(waitForSecondClick) {
    //     setTimeout(()=>{
    //       console.log('false');
    //       setWaitForSecondClick(false)
    //     },1000)
    //   }
    // },[waitForSecondClick])

  useEffect(() => {
    getActive();
    window.addEventListener("scroll", e => {
      getActive();
    });
    return window.removeEventListener("scroll", () => {});
  }, []);



  useEffect(() => {
    getNextOffset();
    window.addEventListener("resize", () => {
      getNextOffset();
    });
    return window.removeEventListener("resize", () => {});
  }, []);

//   useEffect(() => {
//     // scrollToNextContainer()
//     window.addEventListener("keydown", e => {
// console.log();
//       if (e.code === "ArrowDown" && isActive) {
//         console.log(waitForSecondClick);
//         console.log(isActive);
//         if (waitForSecondClick) {
//           window.scrollTo(0,nextContainerOffset);
//        } else {
//          setWaitForSecondClick(true)
//        }
//
//       }
//
//     });
//     return window.removeEventListener("keydown", () => {});
//   }, [isActive,waitForSecondClick]);
  return (
    <div className="next-container-button-component hide-4-mobile" ref={nc}>
      {nextContainerOffset && (
        <button type="button" id="next-container" onClick={scrollToNextContainer}>
          <kbd>
            <FaArrowDown />
          </kbd>
        </button>
      )}
    </div>
  );

  function getNextOffset() {
    let containerId = nc.current.closest(".container").id,
      nextContainerId = containerId.replace(/[1-9]/, match => +match + 1),
      ncOffset = document.getElementById(nextContainerId);
    if (ncOffset) ncOffset = ncOffset.offsetTop;
    setNextContainerOffset(ncOffset);
  }

  function getActive() {
    let parentOffset = nc.current.offsetParent.offsetTop,
      ncOffset = nc.current.offsetTop;
    if (
      parentOffset + ncOffset >= window.pageYOffset &&
      parentOffset + ncOffset < window.pageYOffset + window.innerHeight &&
      !isActive
    ) {
      setIsActive(true);
    }else if (
      (parentOffset + ncOffset < window.pageYOffset ||
        parentOffset + ncOffset > window.pageYOffset + window.innerHeight)
    ) {
      setIsActive(false);
    }
  }

  function scrollToNextContainer() {
    window.scrollTo({
      top: nextContainerOffset,
      left: 0,
      behavior: "smooth"
    });
  }
}

export default NextContainerButton;
