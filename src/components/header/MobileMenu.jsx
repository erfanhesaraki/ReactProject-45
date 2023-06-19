export const MenuMobile = ({menu, open, setOpen}) => {
  return (
    <>
      <nav
        style={{transition: "1s"}}
        className={`col-4 col-md-3 d-lg-none   MenuL ${
          open ? "d-flex" : "d-none"
        } `}
      >
        <ul className=" mx-auto">
          {menu.map((val, index) => {
            return (
              <li
                className="text-uppercase py-3 d-flex justify-content-center"
                key={index}
              >
                {val}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="d-flex d-lg-none  col-6 justify-content-end align-items-center pe-3 menu ">
        <i className="bi bi-list fs-2 " onClick={() => setOpen(!open)}></i>
      </div>
    </>
  );
}