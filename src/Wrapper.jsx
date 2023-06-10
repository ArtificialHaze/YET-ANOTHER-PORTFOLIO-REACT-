import React from "react";
import NavigationDots from "./NavigationDots";
import SocialMedia from "./SocialMedia";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">&copy; 2023 DreamDevs.</p>
            <p className="p-text"> all rights reserved. </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default Wrapper;
