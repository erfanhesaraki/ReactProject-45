import img16 from "../../assets/img/16.jpg";
import {Person} from "./Person.jsx";

export const Fourthsec =() => {
  return (
    <div
      className=" container-fluid py-5   "
      style={{ backgroundImage: `url(${img16})` }}
    >
      <Person />
    </div>
  );
}