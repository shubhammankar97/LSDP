import download from "../../images/dwnld.png";
import resource1 from "../../images/resource1.png";
import resource3 from "../../images/resource3.png";
import resource4 from "../../images/resource4.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import pdfDoc from "../../assets/abc.pdf";
import "./Home.css";
const Resources = (props) => {
  return (
    <>
      <div className="container">
        <div className="resources-section">
          <p className="heading-resource">RESOURCES</p>
          <h4 className="object-heading">
            <span className="dark">Download</span> the various LSDP documents
            below:
          </h4>
          <div className="resource-sec desktop-margin-view">
            {props.resources.map((obj, i) => {
              return (
                <div className="resources-card">
                  <div className="resource-left">
                    <img src={obj.img} alt="" />
                  </div>
                  <div className="resource-right">
                    <h5 className="resource-heading">{obj.title}</h5>
                    <p className="resource-content">{obj.content}</p>
                    <div className="resource-download">
                      <a
                        href={obj.pdf}
                        download="true"
                        rel="noopener noreferrer"
                        className="download-doc"
                        target="_blank"
                      >
                        <img src={download} alt="" className="dwnld-img" />
                        <span className="border-red">{obj.download}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="resource-sec mobile-view">
            <OwlCarousel
              className="owl-theme desktop"
              loop
              margin={30}
              nav
              items={1}
            >
              <div className="item resources-card">
                <div className="resource-left">
                  <img src={resource1} alt="" />
                </div>
                <div className="resource-right">
                  <h5 className="resource-heading">LSDP 2052 The Strategy</h5>
                  <p className="resource-content">
                    Detailed report on the strategy, concrete opportunities,
                    measurable indicators and implementation roadmap for Lagos
                    to become Africa’s Model Mega City by 2052.
                  </p>
                  <div className="resource-download">
                    <a
                      href={pdfDoc}
                      download="true"
                      rel="noopener noreferrer"
                      className="download-doc"
                      target="_blank"
                    >
                      <img src={download} alt="" className="dwnld-img" />
                      <span className="border-red">DOWNLOAD REPORT</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item resources-card">
                <div className="resource-left">
                  <img src={resource1} alt="" />
                </div>
                <div className="resource-right">
                  <h5 className="resource-heading">LSDP 2052 Quick Read</h5>
                  <p className="resource-content">
                    Summary report on the strategy and implementation roadmap
                    for Lagos to become Africa’s Model Mega City by 2052.
                  </p>
                  <div className="resource-download">
                    <a
                      href={pdfDoc}
                      download="true"
                      rel="noopener noreferrer"
                      className="download-doc"
                      target="_blank"
                    >
                      <img src={download} alt="" className="dwnld-img" />
                      <span className="border-red">DOWNLOAD STRATEGY</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item resources-card">
                <div className="resource-left">
                  <img src={resource3} alt="" />
                </div>
                <div className="resource-right">
                  <h5 className="resource-heading">LSDP 2052 The Strategy</h5>
                  <p className="resource-content">
                    High-level overview of the LSDP 2052 vision, anchor
                    objective, focus areas and action plan to drive
                    implementation.
                  </p>
                  <div className="resource-download">
                    <a
                      href={pdfDoc}
                      download="true"
                      rel="noopener noreferrer"
                      className="download-doc"
                      target="_blank"
                    >
                      <img src={download} alt="" className="dwnld-img" />
                      <span className="border-red">DOWNLOAD QUICK READ</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item resources-card">
                <div className="resource-left">
                  <img src={resource4} alt="" />
                </div>
                <div className="resource-right">
                  <h5 className="resource-heading">LSDP 2052 Initiatives</h5>
                  <p className="resource-content">
                    Detailed overview of the 400+ initiatives defined under the
                    LSDP 2052 including their assignment to responsible
                    Ministries.
                  </p>
                  <div className="resource-download">
                    <a
                      href={pdfDoc}
                      download="true"
                      rel="noopener noreferrer"
                      className="download-doc"
                      target="_blank"
                    >
                      <img src={download} alt="" className="dwnld-img" />
                      <span className="border-red">DOWNLOAD INITIATIVES</span>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resources;
