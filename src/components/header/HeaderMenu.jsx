export const HeaderMenu = ({ menu }) => {
  return (
    <nav className="col-8  d-none d-lg-flex justify-content-center">
      <ul className="d-flex col-8 justify-content-evenly align-items-center">
        {menu.map((val, index) => {
          return (
            <li className="text-uppercase" key={index}>
              {val}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}