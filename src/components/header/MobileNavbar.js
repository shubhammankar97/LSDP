import headerlogo from "../../images/mobile-log.png";
import menumobile from "../../images/mobile-menu.png";
import crossicon from "../../images/close-icon.png";
import { useState } from "react";
import "./MobileNavbar.css";
import $ from "jquery";

$(document).ready(function () {
  if ($(window).width() < 600) {
    $("#mobile-screen").show();
    $("#header-top").css("display", "none");
  } else {
    $("#mobile-screen").hide();
    $("#header-top").css("display", "flex");
  }
});
const MobileNavbar = () => {
  useState(false);
  const onClickMenuMobile = () => {
    $("#blue-menu-sections").toggle();
    $(".whitebar").toggle();
  };

  const goToDownload = () => {
    onClickMenuMobile();
    localStorage.setItem("download-key", "true")
    window.location.href = "/";
  }
  return (
    <>
      <div className="mobile-nav-bar mobile" id="mobile-screen">
        <div className="container">
          <div className="whitebar">
            <div className="header-logosection">
              <img alt="logo" src={headerlogo} className="logoheader" />
            </div>
            <div className="menubarwhite">
              <img
                id="menumobile"
                alt="menumobile"
                src={menumobile}
                className="menumobile"
                onClick={onClickMenuMobile}
              />
            </div>
          </div>
        </div>
        <div className="blue-menu-section" id="blue-menu-sections">
          <div className="menu-cross">
            <img
              id="menumobile"
              alt="menumobile"
              src={crossicon}
              className="menumobile"
              onClick={onClickMenuMobile}
            />
          </div>
          <ul type="none">
            <a className="whiteheader-links" href="/">
              <li>Overview</li>
            </a>
            <a className="whiteheader-links" href="/involved">
              <li>How to get Involved</li>
            </a>
            <a className="whiteheader-links" href="/faq">
              <li>FAQ</li>
            </a>
            {/* <a className="whiteheader-links" href="/#download-resource"> */}
              <li>
                <div className="red-circle" onClick={goToDownload}>Download Resources</div>
              </li>
            {/* </a> */}
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileNavbar;
