import Banner from "./Banner";
import supportPlan from "../../images/support-plan.png";
import accountabilityImg from "../../images/accountability.png";
import bannerimg from "../../images/banner2.png";
import "./GetInvolved.css";
import img1 from "../../images/dimesion1.png";
import img2 from "../../images/dimesion2.png";
import img3 from "../../images/dimesion3.png";
import img4 from "../../images/dimesion4.png";
import bullet from "../../images/bullet.png";
import Footer from "../home/Footer";
import Header from "../header/Header";
import MobileNavbar from "../header/MobileNavbar";

const GetInvolved = () => {
  return (
    <>
      <Header />
      <MobileNavbar />
      <Banner
        bannerdata={{
          title: "The Role of",
          darktitle: "Lagosians",
          subtitle: "in ensuring the successful delivery of the LSDP 2052",
          img: bannerimg,
        }}
      />
      <section className="plan-objectives-section">
        <div className="container">
          <div className="plan-objective">
            <div className="plan-section-left">
              <div className="plan-support">
                <div className="support-plan-left">
                  <img alt="" src={supportPlan} />
                </div>
                <div className="plan-right">
                  <h2 className="support-plan-heading">
                    Support The
                    <span>Plan Objective</span>
                  </h2>
                </div>
              </div>
              <p className="dark-text">
                Actively support the development plan objectives by signing up
                and participating in LSDP programs by:
              </p>
              <ul type="none" className="bulllet-section">
                <li>
                  <span>
                    <img className="bullet-point" alt="" src={bullet} />
                  </span>
                  Performing your civic responsibilities ex. obey state laws and
                  participate in elections
                </li>
                <li>
                  <span>
                    <img className="bullet-point" alt="" src={bullet} />
                  </span>
                  Paying your taxes to benefit from more government services
                  <p className="learn">LEARN MORE &gt; </p>
                </li>
                <li>
                  <span>
                    <img className="bullet-point" alt="" src={bullet} />
                  </span>
                  Patronising and supporting local businesses to invest in our
                  own economy
                </li>
              </ul>
            </div>
            <div className="plan-section-right">
              <div className="plan-support">
                <div className="support-plan-left">
                  <img alt="" src={accountabilityImg} />
                </div>
                <div className="plan-right">
                  <h2 className="support-plan-heading">
                    Engage In
                    <span>Accountability Mechanism</span>
                  </h2>
                </div>
              </div>
              <p className="dark-text">
                Demand accountability on the performance of the development plan
                by:
              </p>
              <ul type="none" className="bulllet-section">
                <li>
                  <span>
                    <img alt="" className="bullet-point" src={bullet} />
                  </span>
                  Leveraging citizens engagement platforms to seek feedback
                  <p className="learn">LEARN MORE &gt; </p>
                </li>
                <li>
                  <span>
                    <img alt="" className="bullet-point" src={bullet} />
                  </span>
                  Providing inputs on the implementation status of the
                  development plan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="blue-sction">
        <div className="container">
          <h4 className="dimesions-heading">
            All Lagosians have a role to actively support the development plan
            objectives across four dimensions{" "}
          </h4>
          <div className="four-dimensions">
            <div className="dimensions-content">
              <h6 className="heading-dimen">01. Thriving Economy</h6>
              <div className="desc-section">
                <div className="desc-content">
                  <h6 className="desc-heading">Support Local Businesses</h6>
                  <p className="desc">
                    Patronize made in Lagos goods and services to boost
                    consumption and drive Lagos's GDP growth to achieve
                    &gt;$800B target. Organisations should hire locally i.e.,
                    residents and invest in upskilling the workforce to improve
                    productivity
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">Discover Opportunities</h6>
                  <p className="desc">
                    Enroll for eligible opportunities e.g. SME grants and loans.
                    Take advantage of LSDP initiatives to build ecosystems and
                    grow your businesses
                  </p>
                </div>
              </div>
            </div>
            <div className="dimensions-image">
              <img alt="" className="dimension-image" src={img1} />
            </div>
          </div>
          <div className="four-dimensions dimesion-2">
            <div className="dimensions-image desktop-view">
              <img alt="" className="dimension-image" src={img2} />
            </div>
            <div className="dimensions-content">
              <h6 className="heading-dimen">02. Human-Centric City</h6>
              <div className="desc-section">
                <div className="desc-content">
                  <h6 className="desc-heading">
                    Embrace Learning And Development
                  </h6>
                  <p className="desc">
                    Invest time and resources to develop by taking advantage of
                    the state's initiatives to nurture and grow talent e.g.
                    vocational and educational training, adopting digital as a
                    way of life etc.
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">Maintain Law And Order</h6>
                  <p className="desc">
                    Residents and organisation should comply with the laws of
                    the land, engage and collaborate with law enforcement
                    agencies, and volunteer in activities that promote the
                    safety and the rule of law in our communities
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">Sign Up For Health Insurance</h6>
                  <p className="desc">
                    Enroll in the Lagos State Health Insurance Scheme that to
                    have access to quality health care services irrespective of
                    gender, economic status or location, without suffering
                    financial catastrophe
                  </p>
                </div>
              </div>
            </div>
            <div className="dimensions-image mobile-view">
              <img alt="" className="dimension-image" src={img2} />
            </div>
          </div>
          <div className="four-dimensions dimesion-3">
            <div className="dimensions-content">
              <h6 className="heading-dimen">03. Modern Infrastructure</h6>
              <div className="desc-section">
                <div className="desc-content">
                  <h6 className="desc-heading">Adopt Digital Ways Of Living</h6>
                  <p className="desc">
                    Make use of digital services and platforms aimed at
                    improving efficiencies e.g., smart metering, digital
                    financial services, e-government platforms
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">
                    Adopt Sustainable Alternatives
                  </h6>
                  <p className="desc">
                    Be environment and climate conscious. Use transport modes
                    that conserve and promote energy, use efficient and clean
                    energy sources (e.g., solar), promote adoption of waste
                    recycling
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">Try New Transit Modes</h6>
                  <p className="desc">
                    Take the trains, ride ferries, try new road routes to
                    improve mobility and transit times and decongest the roads
                  </p>
                </div>
              </div>
            </div>
            <div className="dimensions-image ">
              <img alt="" className="dimension-image" src={img3} />
            </div>
          </div>
          <div className="four-dimensions dimesion-2">
            <div className="dimensions-image desktop-view">
              <img alt="" className="dimension-image" src={img4} />
            </div>
            <div className="dimensions-content">
              <h6 className="heading-dimen">04. Effective Governance </h6>
              <div className="desc-section">
                <div className="desc-content">
                  <h6 className="desc-heading">Pay Your Taxes</h6>
                  <p className="desc">
                    Support the formalization of the state's workforce via
                    enumeration and promptly pay your taxes. Only 45% of the
                    workforce pays taxes today
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">
                    Join The Participatory Budgeting Process
                  </h6>
                  <p className="desc">
                    Help select projects for your community to be prioritized in
                    the annual budget by joining the public budget discussion
                    forums
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">
                    Register As A Resident of Lagos
                  </h6>
                  <p className="desc">
                    Registers with Lagos state residents' registration agency,
                    LASRRA
                  </p>
                </div>
                <div className="desc-content">
                  <h6 className="desc-heading">
                    Participate In The Electoral Process{" "}
                  </h6>
                  <p className="desc">
                    Register to vote and advocate for voter registration in your
                    communities
                  </p>
                </div>
              </div>
            </div>
            <div className="dimensions-image mobile-view">
              <img alt="" className="dimension-image" src={img4} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default GetInvolved;
