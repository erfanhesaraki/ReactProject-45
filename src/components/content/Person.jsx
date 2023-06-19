import img17 from "../../assets/img/17.png";
import img18 from "../../assets/img/18.png";

export const Person =()=> {
  return (
    <section className="container col-12 d-flex justify-content-center  mx-auto   ">
      <div className=" me-lg-5  d-flex  col-12 col-lg-5 bg-white rounded-2 my-5">
        <figure className="col-2   justify-content-start align-items-start p-2">
          <img className="col-10" src={img17} alt="" />
        </figure>
        <div className="col-10 ">
          <p className="my-2 text-secondary">
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker, projector, hardware.
          </p>
          <h4 className="my-2 text-primary">Mark Alviro Wiens</h4>
          <p className="my-2">CEO at Google</p>
        </div>
      </div>
      <div className=" me-5  d-none d-lg-flex col-5  bg-white rounded-2 my-5">
        <figure className="col-2   justify-content-start align-items-start p-2">
          <img className="col-10" src={img18} alt="" />
        </figure>
        <div className="col-10 ">
          <p className="my-2 text-secondary">
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker, projector, hardware.
          </p>
          <h4 className="my-2 text-primary">Lina Harrington</h4>
          <p className="my-2">CEO at Google</p>
        </div>
      </div>
    </section>
  );
}