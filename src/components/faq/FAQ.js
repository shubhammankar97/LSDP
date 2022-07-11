import Banner from "../getinvolved/Banner";
import bannerimg from "../../images/banner-involved.png";
import "./Faq.css";
import Footer from "../home/Footer";
import Accordion from "react-bootstrap/Accordion";
import Header from "../header/Header";
import MobileNavbar from "../header/MobileNavbar";

const Faq = () => {
  return (
    <>
      <Header />
      <MobileNavbar />
      <Banner
        bannerdata={{
          title: "Frequently Asked",
          darktitle: "Questions",
          subtitle: "Have questions? We're here to help.",
          img: bannerimg,
        }}
      />
      <section className="faq-section ">
        <div className="container">
          <div className="faq">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How was the Lagos State Development Plan 2052 formed?
                </Accordion.Header>
                <Accordion.Body>
                  The LSDP 2052 was formed by syndicating inputs from a wide
                  range of sources such as engagements across the executive and
                  legislative branches of government, surveys of current and
                  former Lagos residents, workshops with stakeholder groups
                  across the five administrative districts of the State (i.e.,
                  IBILE) and a review of the Federal Government medium-term
                  development plan as well as the development plans of
                  surrounding States.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Why is the Lagos State Development Plan 2052 30-years?
                </Accordion.Header>
                <Accordion.Body>
                  Due to rising global challenges such as climate change and
                  technological disruption as well as the high potential and
                  fast growth of the State, there is a need to define a
                  long-term vision for Lagos State and a plan that sets the pace
                  for the future. The LSDP 2052 will reviewed continuously and
                  adapted as needed to account for a changing global
                  environment.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Does the Lagos State Development Plan 2052 build on the
                  2015-2025 Lagos State Development Plan?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the LSDP 2052 builds on the success of the 2015-2025
                  Lagos State Development Plan and represents a continuation of
                  this effort. This is visible in the unchanged vision of the
                  plan of Lagos becoming Africa's Model Mega City. The LSDP 2052
                  builds on the previous development plan by providing new
                  actionable goals.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  How will you ensure the accountability and implementation of
                  the LSDP 2052?
                </Accordion.Header>
                <Accordion.Body>
                  Each of the over 400 initiatives within the LSDP 2052 has been
                  assigned to a Lagos State Ministry, Department or Agency to
                  ensure the successful implementation of the plan and drive
                  accountability. There are several citizen engagement platforms
                  such as the Citizen Portal that can be leveraged by everyone
                  to ensure accountability of the plan.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  How will you ensure continuity of the Lagos State Development
                  Plan 2052?
                </Accordion.Header>
                <Accordion.Body>
                  The LSDP 2052 is embedded into the medium-term and annual
                  planning cycles of the State to ensure continuity with
                  changing administrations. All the initiatives have been
                  assigned to a responsible Ministry, Department or Agency to
                  ensure the accountability of the plan.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  {" "}
                  How will you ensure that the Lagos State Development Plan 2052
                  stays on track ?
                </Accordion.Header>
                <Accordion.Body>
                  The LSDP 2052 provides actionable goals and metrics both for
                  the plan as a whole and for the individual sectors featured in
                  the plan. These metrics ensure that we have ongoing visibility
                  about the progress towards meeting our set targets and
                  achieving world class status. The Lagos State Development Plan
                  will be continuously revisited to ensure initiatives are
                  directed towards achieving these goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  {" "}
                  Will the Lagos State Development Plan 2052 only yield results
                  in 30 years?
                </Accordion.Header>
                <Accordion.Body>
                  No, the LSDP 2052 will yield both immediate as well as
                  medium-term and long-term results. The plan will be
                  implemented across four phases with a balanced mix of
                  initiatives that reach from tangible quick wins to long-term
                  infrastructure projects to future-proof the State’s economy.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Where can I access the Lagos State Development Plan 2052?
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    You can find different versions of the LSDP 2052 on this
                    website under 'Resources'.{" "}
                  </div>
                  <span className="red-circle">Download</span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Faq;
