import obj1 from "../../images/obj1.png";
import obj2 from "../../images/obj2.png";
import obj3 from "../../images/obj3.png";
import obj4 from "../../images/obj4.png";
import resource1 from "../../images/resource1.png";
import resource3 from "../../images/resource3.png";
import resource4 from "../../images/resource4.png";
import pdfDoc from "../../assets/abc.pdf";

 let objectives = [
    {
      sno: "01",
      title: "Thriving Economy",
      initiative: "162 Initiatives",
      img: obj1,
      desc: "Lagos will have a robust, healthy and growing economy with adequate jobs and strategic investments to sustain the growth",
    },
    {
      sno: "02",
      title: "Human-Centric City",
      initiative: "69 Initiatives",
      img: obj2,
      desc: "Every Lagosian will have access to affordable and world-class education, healthcare and social services",
    },
    {
      sno: "03",
      title: "Modern Infrastructure",
      initiative: "90 Initiatives",
      img: obj3,
      desc: "Lagos will have reliable and sufficient infrastructure that meets the needs of a 21st century city",
    },
    {
      sno: "04",
      title: "Effective Governance",
      initiative: "96 Initiatives",
      img: obj4,
      desc: "Lagos will have a supportive and enabling environment that creates opportunities for all Lagosians",
    },
  ]
  let resources=[
    {
      title: "LSDP 2052 Full Report",
      content:
        "Detailed report on the strategy, concrete opportunities, measurable indicators and implementation roadmap for Lagos to become Africa’s Model Mega City by 2052.",
      download: "DOWNLOAD REPORT",
      img: resource1,
      pdf: pdfDoc,
    },
    {
      title: "LSDP 2052 The Strategy",
      content:
        "Summary report on the strategy and implementation roadmap for Lagos to become Africa’s Model Mega City by 2052.",
      download: "DOWNLOAD STRATEGY",
      img: resource1,
      pdf: pdfDoc,
    },
    {
      title: "LSDP 2052 Quick Read",
      content:
        "High-level overview of the LSDP 2052 vision, anchor objective, focus areas and action plan to drive implementation.",
      download: "DOWNLOAD QUICK READ",
      img: resource3,
      pdf: pdfDoc,
    },
    {
      title: "LSDP 2052 Initiatives",
      content:
        "Detailed overview of the 400+ initiatives defined under the LSDP 2052 including their assignment to responsible Ministries.",
      download: "DOWNLOAD INITIATIVES",
      img: resource4,
      pdf: pdfDoc,
    },
  ]
 
  export {objectives,resources};