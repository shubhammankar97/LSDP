import Header from "../header/Header";
import { useEffect } from "react";
import downloadImg from "../../images/download-btn.png";
import sectionImg1 from "../../images/section-img1.png";
import sectionImg2 from "../../images/section-img2.png";
import sectionImg3 from "../../images/section-img3.png";
import sectionImg4 from "../../images/mega-city-section.png";
import "./Home.css";
import Objectives from "./Objectives";
import Resources from "./Resources";
import Footer from "./Footer";
import MobileNavbar from "../header/MobileNavbar";
import { resources,objectives } from "../local-json/data";
const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("download-key") === "true") {
      window.location.href = "#download-resource";
      localStorage.setItem("download-key", "false");
    }

    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.5,
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }, []);
  const goToDownload = () => {
    window.location.href = "#download-resource";
  };
  return (
    <>
      <Header />
      <MobileNavbar />
      <div className="page-body margin-top">
        <section className="lsdp-section">
          <div className="container">
            <div className="lagos-step">
              <div className="lagos-state-content fade-in">
                <h1 className="lagos-title">
                  Lagos State Development Plan 2052:
                  <span className="heading-bold">
                    {" "}
                    Africa’s Model Mega City
                  </span>
                </h1>
                <p className="lagos-content">
                  The Lagos State Development Plan (LSDP) 2052 is a 30-year
                  development plan that lays out the overall direction for Lagos
                  State from 2022-2052. It provides an overall strategic
                  framework and direction for the State’s development efforts.
                  <span className="bold">
                    &nbsp;By 2052, Lagos will deliver the vision of becoming
                    Africa’s Model Mega City and Global, Economic and Financial
                    Hub that is Safe, Secure, Functional and Productive.
                  </span>
                </p>
                <div className="red-circle-download" onClick={goToDownload}>
                  <img src={downloadImg} alt="" />
                  <span>Download Resources</span>
                </div>
              </div>
              <div className="lagos-img-section img-animate">
                <img className="enlarge" src={sectionImg1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="lsdp-section">
          <div className="container">
            <div className="lagos-step">
              <div className="lagos-img-section desktop-view">
                <img className="enlarge" src={sectionImg2} alt="" />
              </div>
              <div className="lagos-state-content-right fade-in">
                <h1 className="lagos-title-small">
                  A Plan For Lagosians <br />
                  <span className="heading-bold-small">By Lagosians</span>
                </h1>
                <p className="lagos-content">
                  The Lagos State Development Plan 2052 was informed with inputs
                  from a wide range of sources such as engagements across the
                  executive and legislative branches of government, surveys of
                  current and former Lagos residents, workshops with stakeholder
                  groups across the five administrative districts of the State
                  (i.e., IBILE) and a review of the Federal Government
                  medium-term development plan
                </p>
              </div>
              <div className="lagos-img-section mobile-view">
                <img className="enlarge" src={sectionImg2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="lsdp-section">
          <div className="container">
            <div className="lagos-step special-mobile">
              <div className="lagos-state-content fade-in">
                <h1 className="lagos-title-small">
                  A Plan That Will Accelerate Lagos'
                  <span className="heading-bold-small">
                    &nbsp;Economic Development
                  </span>
                </h1>
                <p className="lagos-content">
                  The anchor objective of the Lagos State Development Plan 2052
                  is to accelerate economic development over the next 30 years
                  by creating high-value and high-volume jobs at scale. Lagos is
                  an economic powerhouse and a leading hub not just in Nigeria,
                  but in Africa. By unlocking opportunities and attracting
                  investments, Lagos State will achieve its full potential
                  across multiple key sectors.
                </p>
              </div>
              <div className="lagos-img-section">
                <img className="third-img" src={sectionImg3} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="lsdp-section africa-mega-city">
          <div className="container">
            <div className="mega-city">
              <h6 className="heading-mega-city">
                To become Africa’s Model Mega City and Global, Economic &
                Financial Hub, Lagos needs to accelerate economic growth{" "}
                <span className="heading-bold-small">
                  10x over the next 30 years.
                </span>
              </h6>
              <img
                className="img-infotainment fade-in"
                src={sectionImg4}
                alt=""
              />
              <ul type="number" className="mega-points">
                <li>Forecasted by Oxford Economics</li>
                <li>
                  LSDP aspiration based on the vision to become Africa’s leading
                  mega model city i.e., an upper middle-class city such as
                  Johannesburg, Jarkata, Mexico and São Paulo
                </li>
              </ul>
              <i className="source">
                Source: EIU Intelligence Unit; World Bank; Oxford Economics;
                Lagos State Bureau of Statistics, External consultant’s analysi
              </i>
              <i className="illustrate">Illustrative Representation</i>
            </div>
          </div>
        </section>
        <section className="lsdp-section">
          <Objectives
            objectives={objectives}
          />
        </section>
        <section className="lsdp-section" id="download-resource">
          <Resources
            resources={resources}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Home;
