import { useEffect } from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentPage = urlParts[1];

    if (currentPage === "involved") {
      document.body.style.overflowY = "auto";

      document.getElementById("faq").classList.remove("active");
      document.getElementById("involved").classList.remove("active");
      document.getElementById("home").classList.remove("active");
      document.getElementById("involved").classList.add("active");
    } else if (currentPage === "faq") {
      document.body.style.overflowY = "auto";

      document.getElementById("faq").classList.remove("active");
      document.getElementById("involved").classList.remove("active");
      document.getElementById("home").classList.remove("active");
      document.getElementById("faq").classList.add("active");
    } else if (currentPage === "") {
      document.body.style.overflowY = "hidden";
      document.getElementById("faq").classList.remove("active");
      document.getElementById("involved").classList.remove("active");
      document.getElementById("home").classList.remove("active");
      document.getElementById("home").classList.add("active");
    } else {
      document.body.style.overflowY = "auto";
    }
  });
  const homeRef = () => {
    window.location.href = "/";
  };
  const dwnlsec = () => {
    localStorage.setItem("download-key", "true");
    window.location.href = "/";
  };
  return (
    <>
      <header className="section" id="header-top">
        <div className="container">
          <div className="header-section">
            <div className="header-left">
              <img src={logo} alt="" onClick={homeRef} />
            </div>
            <div className="header-right">
              <ul type="none" className="navbar">
                <li className="active" id="home">
                  <a href="/">Overview</a>
                </li>
                <li id="involved">
                  <a href="/involved">How to get Involved</a>
                </li>
                <li id="faq">
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <div className="red-circle" onClick={dwnlsec}>
                    Download Resources
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
