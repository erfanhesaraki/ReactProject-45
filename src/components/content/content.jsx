import "./content.css";


import {Firstsec} from "./Firstsec.jsx";
import {Secondsec} from "./Second.jsx";
import {Therdsec} from "./Thredsec.jsx";
import {Fourthsec} from "./Fourthsec.jsx";
import {Fifthsec} from "./Fifthsec.jsx";

export default function Section() {
  return (
    <section className="container-fluid mb-5">
      <Firstsec />
      <Secondsec />
      <Therdsec />
      <Fourthsec />
      <Fifthsec />
    </section>
  );
}














