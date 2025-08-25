import { Link } from "react-router-dom";
import useStore from "../store/store";

const Navbar = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <nav>
      {!isAuthenticated ? (
        <ul className="flex gap-7 items-center">
          <li className="cursor-pointer duration-200 hover:scale-110 hover:opacity-60">
            <Link to="/tours">All Tours</Link>
          </li>
          <li className="cursor-pointer duration-200 hover:scale-110 hover:opacity-60">
            <Link to="/login">Log in</Link>
          </li>
          <li className="cursor-pointer duration-200 hover:scale-110 border hover:text-[#444444] border-white rounded-full p-4 hover:bg-white relative">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-7 items-center">
          <li className="cursor-pointer duration-200 hover:scale-110 hover:opacity-60">
            <Link to="/tours">All Tours</Link>
          </li>
          <li className="cursor-pointer duration-200 hover:scale-110 hover:opacity-60">
            <Link to="/user">Profile</Link>
          </li>
          <li className="cursor-pointer duration-200 hover:scale-110 hover:opacity-60">
            <Link to="/">Log out</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
