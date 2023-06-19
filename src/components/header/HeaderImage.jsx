import img2 from "../../assets/img/2.jpg";

export const HeaderImage = () => {
  return (
    <section
      className="row py-3 IMG "
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div className="col-6 col-md-4  d-flex flex-column  justify-content-center align-items-center text-white">
        <h1 className="display-1    ">
          Creativity <br />
          Beyond
          <br />
          Life
        </h1>

        <a
          href="#"
          id="btn"
          className="col-9 col-md-6 col-lg-4  col-xl-3 text-center text-decoration-none p-2   "
        >
          hire us now!
        </a>
      </div>
    </section>
  );
}