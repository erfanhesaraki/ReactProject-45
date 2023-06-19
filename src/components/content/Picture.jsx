
import img3 from './../../assets/img/3.jpg'
import img4 from './../../assets/img/4.jpg'
import img5 from './../../assets/img/5.jpg'

export const Picture = () => {
  return (
    <section className=" d-flex  justify-content-between align-items-center first-sec flex-wrap">
      <figure className=" col-12 col-md-6 col-lg-3 d-flex flex-column ">
        <img src={img3} alt="" />
        <figcaption className="py-4 d-flex  flex-column px-4  bg-white  ">
          <h5 className="py-3">Addiction Whit Gambling</h5>
          <p className="p-sec1 col-12">
            It is a good idea to think of your PC as an office. It stores files,
            programs, pictures. This can be compared to an actual.
          </p>
        </figcaption>
      </figure>
      <figure className="col-12 col-md-6 col-lg-3 d-flex flex-column">
        <img src={img4} alt="" />
        <figcaption className="py-4 d-flex  flex-column px-4 bg-white  ">
          <h5 className="py-3">Headset No Longer Wired</h5>
          <p className="p-sec1 col-12">
            It is a good idea to think of your PC as an office. It stores files,
            programs, pictures. This can be compared to an actual.
          </p>
        </figcaption>
      </figure>
      <figure className="col-12 col-md-6 col-lg-3 d-flex flex-column">
        <img src={img5} alt="" />
        <figcaption className="py-4 d-flex  flex-column px-4 bg-white  ">
          <h5 className="py-3">Life Advice Looking At Window</h5>
          <p className="p-sec1 col-12">
            It is a good idea to think of your PC as an office. It stores files,
            programs, pictures. This can be compared to an actual.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}