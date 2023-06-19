import img10 from "../../assets/img/10.jpg";
import img11 from "../../assets/img/11.jpg";
import img14 from "../../assets/img/14.jpg";
import img12 from "../../assets/img/12.jpg";
import img15 from "../../assets/img/15.jpg";
import img13 from "../../assets/img/13.jpg";


export const Search =() => {
  function para() {}
  return (
    <section className="col-12 d-flex flex-wrap search1 mt-5">
      <nav className="row  d-flex  col-12  justify-content-center ">
        <ul className="col-md-10 col-lg-8 d-flex justify-content-evenly align-items-center  flex-wrap">
          <li
            className="col-12  col-md  text-center"
            data-filter="all"
            onClick={para}
          >
            All Categories
          </li>
          <li
            className="col-12  col-md  text-center"
            data-filter="brand"
            onClick={para}
          >
            Branding
          </li>
          <li
            className="col-12  col-md text-center"
            data-filter="img-man"
            onClick={para}
          >
            ImageManipulation
          </li>
          <li
            className="col-12  col-md  text-center"
            data-filter="creative"
            onClick={para}
          >
            Creative Work
          </li>
          <li
            className="col-12  col-md  text-center"
            data-filter="web"
            onClick={para}
          >
            Web Design
          </li>
          <li
            className="col-12  col-md  text-center"
            data-filter="print-mat"
            onClick={para}
          >
            Print Material
          </li>
        </ul>
      </nav>

      <nav className="row  d-flex  col-12 search2">
        <ul className="col-12 d-flex flex-wrap justify-content-evenly ">
          <li className="col-12 col-md-6  col-lg-3 mx-5   my-4">
            <figure className="col-12 d-flex  flex-column ">
              <img className="col-12" src={img10} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">3D Helmet Design</h4>
                <p className="text-dark text-center py-2">Client Project</p>
              </figcaption>
            </figure>
          </li>
          <li className="col-12 col-md-6  col-lg-3 mx-5   my-4">
            <figure className="col-12 d-flex  flex-column ">
              <img src={img11} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">2D Vinyl Design</h4>
                <p className="text-dark text-center py-2">Client Project</p>
              </figcaption>
            </figure>
          </li>
          <li className="col-12 col-md-6  col-lg-3 mx-5   my-4">
            <figure className="col-12 d-flex  flex-column ">
              <img src={img14} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">
                  Creative Poster Design
                </h4>
                <p className="text-dark text-center py-2">Project</p>
              </figcaption>
            </figure>
          </li>
          <li className="col-12 col-md-6  col-lg-3 mx-5   my-4">
            <figure className="col-12 d-flex  flex-column ">
              <img src={img12} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">
                  Embosed Logo Design
                </h4>
                <p className="text-dark text-center py-2">Project</p>
              </figcaption>
            </figure>
          </li>
          <li className="col-12 col-md-6  col-lg-3 mx-5  my-4 ">
            <figure className="col-12 d-flex  flex-column ">
              <img src={img15} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">
                  3D Disposable Bottle
                </h4>
                <p className="text-dark text-center py-2">Project</p>
              </figcaption>
            </figure>
          </li>
          <li className="col-12 col-md-6  col-lg-3 mx-5   my-4">
            <figure className="col-12 d-flex  flex-column ">
              <img src={img13} alt="" />
              <figcaption>
                <h4 className="text-dark text-center py-2">3D Logo Design</h4>
                <p className="text-dark text-center py-2">Project</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </nav>
    </section>
  );
}


