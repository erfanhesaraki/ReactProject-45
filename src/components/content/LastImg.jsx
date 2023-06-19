import img19 from "../../assets/img/19.jpg";
import img20 from "../../assets/img/20.jpg";
import img21 from "../../assets/img/21.jpg";
import img22 from "../../assets/img/22.jpg";

export const LastImg =() => {
  return (
    <section className="d-lfex flex-wrap  col-12   mx-auto  ">
      <div className="col-12 d-flex flex-wrap my-5">
        <figure className="col-12 col-md-3  d-flex   align-items-center justify-content-center flex-column">
          <img className="col-10 my-4" src={img19} alt="#" />
          <figcaption>
            <p className="col-10 text-center ps-4 my-1">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
          </figcaption>
        </figure>
        <figure className="col-12 col-md-3  d-flex   align-items-center justify-content-center flex-column">
          <img className="col-10 my-4" src={img20} alt="#" />
          <figcaption>
            <p className="col-10 text-center ps-4 my-1">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
          </figcaption>
        </figure>
        <figure className="col-12 col-md-3  d-flex   align-items-center justify-content-center flex-column">
          <img className="col-10 my-4" src={img21} alt="#" />
          <figcaption>
            <p className="col-10 text-center ps-4 my-1">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
          </figcaption>
        </figure>
        <figure className="col-12 col-md-3  d-flex   align-items-center justify-content-center flex-column">
          <img className="col-10 my-4" src={img22} alt="#" />
          <figcaption>
            <p className="col-10 text-center ps-4 my-1">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
