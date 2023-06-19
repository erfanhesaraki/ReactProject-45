import "./header.css";
import { useState } from "react";
import {HeaderLogo} from "./HeaderLogo.jsx";
import {HeaderMenu} from "./HeaderMenu.jsx";
import {MenuMobile} from "./MobileMenu.jsx";
import {HeaderImage} from "./HeaderImage.jsx";

export default function Header() {
  const menu = ["home", "portfolio", "about", "blog", "Pages", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <section className=" row ">
      <div className="col-12   border-danger d-flex flex-wrap">
        <HeaderLogo />
        <HeaderMenu menu={menu} />
        <MenuMobile menu={menu} open={open} setOpen={setOpen} />
        <HeaderImage />
      </div>
    </section>
  );
}
