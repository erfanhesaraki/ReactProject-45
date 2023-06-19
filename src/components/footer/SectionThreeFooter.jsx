import img23 from "./../../assets/img/23.jpg";
import img24 from "./../../assets/img/24.jpg";
import img25 from "./../../assets/img/25.jpg";
import img26 from "./../../assets/img/26.jpg";
import img27 from "./../../assets/img/27.jpg";
import img28 from "./../../assets/img/28.jpg";
import img29 from "./../../assets/img/29.jpg";
import img30 from "./../../assets/img/30.jpg";
export const  SectionThreeFooter = () => {
  return (
    <div className="col-12 col-lg-3  py-5 ">
      <h4 className="text-light ps-2">Instragram Feed</h4>

      <div className=" d-flex flex-wrap ps-3">
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img23} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img24} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img25} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img26} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img27} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img28} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img29} alt="" />
        </figure>
        <figure className="col-3 my-2 rounded ">
          <img className="col rounded" src={img30} alt="" />
        </figure>
      </div>
    </div>
  );
}
