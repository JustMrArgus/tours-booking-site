import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-[#444444] flex justify-between items-center font-lato text-white font-light text-[1.2rem] pl-5 pr-12 py-5">
      <div className="w-15">
        <Link to="/" className="cursor-pointer">
          <img src="/img/fav.svg" alt="site logo" className="max-w-full" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
