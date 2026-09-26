import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/20 shadow-none text-white backdrop-blur-sm"
          : " text-white"
      }`}
    >
      <div className="text-lg font-semibold">
        <Link to="/">
          <img
            src="./images/logo.png"
            alt="Kenny Autos Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 ">
        {" "}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
