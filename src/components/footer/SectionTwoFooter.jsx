export const SectionTwoFooter = () => {
  return (
    <div className="col-12 col-lg-6  py-5 ps-5  Sec2Foot">
      <h4 className="text-light">Newsletter</h4>
      <p className="my-2">
        You can trust us. we only send promo offers, not a single spam.
      </p>
      <div className="p-2 d-flex justify-content-evenly mt-5">
        <input
          className="col-7 col-lg-9 py-2 ps-2 me-1 "
          type="email"
          placeholder="Your Email Address"
        />
        <button className="col-5 col-lg-3 py-2">Subscribe</button>
      </div>
    </div>
  );
}