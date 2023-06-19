import {Note3} from "./Note3.jsx";
import {Search} from "./Search.jsx";

export const  Therdsec =() => {
  return (
    <div className="container-fluid bg-white   py-3  ">
      <div className="container row flex-wrap  mx-auto ">
        <Note3 />
        <Search />
      </div>
    </div>
  );
}