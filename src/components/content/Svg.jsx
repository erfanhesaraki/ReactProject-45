import img6 from "../../assets/img/6.png";
import img7 from "../../assets/img/7.png";
import img8 from "../../assets/img/8.png";
import img9 from "../../assets/img/9.png";

export  const Svg = ()=>{
  return (
    <section className="d-lfex flex-wrap  col-12 col-md-6  py-5">
      <div className="col-12 d-flex flex-wrap">
        <figure className="col-12 col-md-6 py-3 d-flex   align-items-center justify-content-center">
          <img className="col-8" src={img6} alt="#" />
        </figure>
        <figure className="col-12 col-md-6 py-3 d-flex   align-items-center justify-content-center">
          <img className="col-8" src={img7} alt="#" />
        </figure>
        <figure className="col-12 col-md-6 py-3 d-flex   align-items-center justify-content-center">
          <img className="col-8" src={img8} alt="#" />
        </figure>
        <figure className="col-12 col-md-6 py-3 d-flex   align-items-center justify-content-center">
          <img className="col-8" src={img9} alt="#" />
        </figure>
      </div>
    </section>
  );
}