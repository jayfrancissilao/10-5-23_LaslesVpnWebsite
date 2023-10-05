import { useEffect, useState } from "react";
import logoIpsum from "/src/components/Navbar/logoipsum.png";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";
const Navbar = () => {
  // useState here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggle menu btn
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   function for making navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav className="py-4 px-4 md:px-12  bg-white">
        {/* for large devices */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logoIpsum} alt="" className="h-10 " />
          </div>
          {/* menu items for large devices */}
          <div className="lg:flex items-center gap-20 hidden text-lg">
            <div>
              <a href="">About</a>
            </div>
            <div>
              <a href="">Features</a>
            </div>
            <div>
              <a href="">Pricings</a>
            </div>
            <div>
              <a href="">Testimonials</a>
            </div>
            <div>
              <a href="">Help</a>
            </div>
          </div>
          {/* contact btn */}
          <div className="lg:block hidden ">
            <div className="lg:flex gap-10">
              <button className="font-bold">Sign In</button>
              <button className="font-bold btn-sign">Sign Up</button>
            </div>
          </div>
          {/* menu for small devices*/}
          <button onClick={toogleMenu} className="lg:hidden">
            <HiMenu />
          </button>
        </div>
        {/* menu items for phone devices */}
        {isMenuOpen && (
          <div className="mt-4 p-4 rounded-lg bg-red text-white">
            <a href="" className="block py-2 px-4">
              About
            </a>
            <a href="" className="block py-2 px-4">
              Features
            </a>
            <a href="" className="block py-2 px-4">
              Pricings
            </a>
            <a href="" className="block py-2 px-4">
              Testimonials
            </a>
            <a href="" className="block py-2 px-4">
              Help
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
