import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="bg-gray-500 w-full py-10 flex justify-end px-12 text-white text-xl">
          <div className="text-center">
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <div>
              <p>123 ABS Street, Unit 21, Bangladesh</p>
              <p>+88 123 45678</p>
              <p>Mon-Fri 08:00 - 22:00</p>
              <p>Sat-Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 w-full py-10 flex justify-start px-12 text-white text-xl">
          <div className="text-center">
            <h3 className="mb-4 font-semibold">Follow Us</h3>

            <div>
              <p className="mb-4">Join us on social media</p>
              <div className="flex justify-center gap-6">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <BsInstagram />
                </Link>
                <Link>
                  <BsTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="bg-black text-white text-center py-2 text-sm">Copywrite &copy; Sea-Food. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
