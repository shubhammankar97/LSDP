import "./Home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import obj1 from "../../images/obj1.png";
import obj2 from "../../images/obj2.png";
import obj3 from "../../images/obj3.png";
import obj4 from "../../images/obj4.png";
const Objectives = (props) => {
  return (
    <>
      <div className="container">
        <h5 className="lsdp-objective-title">
          <span className="pale-color">Four objectives of the LSDP 2052 </span>
          and 400+ initiatives have been defined to achieve the plan over the
          next 30 years
        </h5>
        <div className="objective-section desktop-margin-view">
          {props.objectives.map((obj, i) => {
            return (
              <div className="objecive-card" key={i}>
                <div className="objective-left">
                  <img className="object-image" src={obj.img} alt="" />
                </div>
                <div className="objective-right">
                  <h3 className="object-sno">{obj.sno}</h3>
                  <h4 className="object-heading">{obj.title}</h4>
                  <h5 className="object-subheading">{obj.subtitle}</h5>
                  <p className="object-desc">{obj.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="objective-mobile mobile-view">
          <OwlCarousel
            className="owl-theme desktop"
            loop
            margin={-20}
            nav
            items={1}
          >
            <div className="item objecive-card" key={1}>
              <div className="objective-left">
                <img className="object-image" src={obj1} alt="" />
              </div>
              <div className="objective-right">
                <h3 className="object-sno">01</h3>
                <h4 className="object-heading">Thriving Economy</h4>
                <h5 className="object-subheading">162 Initiatives</h5>
                <p className="object-desc">
                  Lagos will have a robust, healthy and growing economy with
                  adequate jobs and strategic investments to sustain the growth
                </p>
              </div>
            </div>
            <div className="item objecive-card" key={2}>
              <div className="objective-left">
                <img className="object-image" src={obj2} alt="" />
              </div>
              <div className="objective-right">
                <h3 className="object-sno">02</h3>
                <h4 className="object-heading">Human-Centric City</h4>
                <h5 className="object-subheading">69 Initiatives</h5>
                <p className="object-desc">
                  Every Lagosian will have access to affordable and world-class
                  education, healthcare and social services
                </p>
              </div>
            </div>
            <div className="item objecive-card" key={3}>
              <div className="objective-left">
                <img className="object-image" src={obj3} alt="" />
              </div>
              <div className="objective-right">
                <h3 className="object-sno">03</h3>
                <h4 className="object-heading">Human-Centric City</h4>
                <h5 className="object-subheading">69 Initiatives</h5>
                <p className="object-desc">
                  Every Lagosian will have access to affordable and world-class
                  education, healthcare and social services
                </p>
              </div>
            </div>
            <div className="item objecive-card" key={4}>
              <div className="objective-left">
                <img className="object-image" src={obj4} alt="" />
              </div>
              <div className=" objective-right">
                <h3 className="object-sno">04</h3>
                <h4 className="object-heading">Effective Governance</h4>
                <h5 className="object-subheading">96 Initiatives</h5>
                <p className="object-desc">
                  Lagos will have a supportive and enabling environment that
                  creates opportunities for all Lagosians
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};
export default Objectives;
