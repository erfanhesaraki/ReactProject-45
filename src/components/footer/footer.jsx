import "./footer.css";
import {SectionOneFooter} from "./SectionOneFooter.jsx";
import {SectionTwoFooter} from "./SectionTwoFooter.jsx";
import {SectionThreeFooter} from "./SectionThreeFooter.jsx";
export default function Footer() {
  return (
    <section className=" container-fluid  py-5   foot">
      <div className="row container mx-auto  py-5   flex-wrap">
        <SectionOneFooter />
        <SectionTwoFooter/>
        <SectionThreeFooter/>
      </div>
    </section>
  );
}



