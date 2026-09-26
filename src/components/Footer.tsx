import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:px-12">

        <div>
          <h2 className="text-2xl font-bold text-white">
            KENNY <span className="text-blue-500">AUTO</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
            Quality cars. Trusted service. Find your next ride with Kenny Auto.
          </p>
        </div>


        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-blue-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/cars" className="transition hover:text-blue-500">
                Cars
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-blue-500">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={18} />
              <span>Abuja · Ibadan · Lokoja</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-blue-500" size={18} />
              <a
                href="tel:08038659145"
                className="hover:text-blue-500"
              >
                0803 865 9145
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MessageCircle className="text-blue-500" size={18} />

              <a
                href="https://wa.me/2348038659145"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Kenny Auto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;