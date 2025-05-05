"use client";
import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${
        pathname === "/" ? "bg-transparent" : "bg-teal"
      }   fixed top-0 left-0 w-full z-50 py-3 `}>
      {/* container */}
      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        {/* Mobile Menu Icon*/}
        <div className="md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl ${isMenuOpen ? "" : "text-cloud"}`}>
            {isMenuOpen === false ? <IoMenu /> : <IoCloseOutline />}
          </button>
        </div>

        {/* Backdrop  */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile nav conditional rendering */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-screen w-2/3 bg-teal shadow-md transform transition-transform duration-300 ease-in-out z-50 md:hidden p-6">
            {/* close button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-cloud">
                <IoCloseOutline />
              </button>
            </div>
            {/* NavLinks */}
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
