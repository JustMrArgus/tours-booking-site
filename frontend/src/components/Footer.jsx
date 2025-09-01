import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] font-lato flex justify-between items-center px-5">
      <div className="w-10">
        <Link to="/" className="cursor-pointer">
          <img src="/img/fav.svg" alt="site logo" className="max-w-full" />
        </Link>
      </div>
      <p className="opacity-25 text-[0.9rem]">
        &copy; 2025 by Rodina Oleksandr.
      </p>
    </footer>
  );
};

export default Footer;
