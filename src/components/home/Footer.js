import footerlogo from "../../images/logo.png";
import backTop from "../../images/backTop.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import yt from "../../images/youtube.svg";
import tw from "../../images/twitter.svg";
import fb from "../../images/facebook.svg";
import insta from "../../images/instagram.svg";
import $ from "jquery";
import { useEffect } from "react";

$(document).ready(function () {
  const el = document.querySelector("#footer");
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        $("#fixed-social-media").hide();
        return;
      } else {
        if ($(window).width() > 600) $("#fixed-social-media").show();
      }
    },
    {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    }
  );

  observer.observe(el);
});
const Footer = () => {
  const homeRef = function () {
    window.location.href = "/";
  };
  useEffect(() => {
    $(".back-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });

    $(".youtube").hover(function () {
      $(this).attr("src", yt);
    });
    $(".youtube").mouseleave(function () {
      $(this).attr("src", youtube);
    });

    $(".twitter").mouseenter(function () {
      $(this).attr("src", tw);
    });
    $(".twitter").mouseleave(function () {
      $(this).attr("src", twitter);
    });

    $(".facebook").mouseenter(function () {
      $(this).attr("src", fb);
    });
    $(".facebook").mouseleave(function () {
      $(this).attr("src", facebook);
    });

    $(".instagram").mouseenter(function () {
      $(this).attr("src", insta);
    });
    $(".instagram").mouseleave(function () {
      $(this).attr("src", instagram);
    });
  });

  return (
    <>
      <div className="social-fixed-icons desktop-view" id="fixed-social-media">
        <div className="social-media">
          <ul type="none">
            <li>
              <img className="youtube" alt="" src={youtube} />
            </li>
            <li>
              <img className="twitter" alt="" src={twitter} />
            </li>
            <li>
              <img className="facebook" alt="" src={facebook} />
            </li>
            <li>
              <img className="instagram" alt="" src={instagram} />
            </li>
          </ul>
        </div>
      </div>
      <footer id="footer">
        <div className="container">
          <div className="lsdp-footer">
            <div className="footer-left">
              <div className="logo-options">
                <img
                  className="footer-logo"
                  alt=""
                  src={footerlogo}
                  onClick={homeRef}
                />
                <ul type="none" className="other-options">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/involved">How to get Involved</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <p className="copyright">
                © All rights reserved to Lagos State Development Plan 2052:
                Africa’s Model Mega City
              </p>
            </div>
            <div className="footer-right">
              <div className="back-to-top">
                <img
                  onClick={backTop}
                  alt=""
                  className="back-btn"
                  src={backTop}
                />
              </div>
              <div className="social-media">
                <ul type="none">
                  <li>
                    <img className="youtube" alt="" src={youtube} />
                  </li>
                  <li>
                    <img className="twitter" alt="" src={twitter} />
                  </li>
                  <li>
                    <img className="facebook" alt="" src={facebook} />
                  </li>
                  <li>
                    <img className="instagram" alt="" src={instagram} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
