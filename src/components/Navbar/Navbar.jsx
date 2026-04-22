import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch, IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#" },
  { label: "Process", href: "#process" },
  { label: "Contact Us", href: "#contactus" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl md:text-3xl font-semibold shrink-0"
        >
          Gr<span className="uppercase text-orange-500">o</span>cify
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-medium tracking-wide transition-colors ${
                  link.active
                    ? "text-orange-500"
                    : "text-zinc-800 hover:text-orange-500"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop search */}
          <div className="hidden lg:flex items-center border-2 rounded-full p-1 border-orange-500 w-56 xl:w-72">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 min-w-0 h-9 px-3 text-sm focus:outline-none bg-transparent"
            />
            <button
              aria-label="search"
              className="bg-gradient-to-b from-orange-400 to-orange-500 h-9 w-9 text-white flex justify-center items-center rounded-full text-lg shrink-0"
            >
              <IoSearch />
            </button>
          </div>

          <a
            href="#"
            aria-label="wishlist"
            className="text-zinc-800 text-xl sm:text-2xl hover:text-orange-500 transition-colors"
          >
            <GoHeartFill />
          </a>
          <a
            href="#"
            aria-label="cart"
            className="text-zinc-800 text-xl sm:text-2xl hover:text-orange-500 transition-colors"
          >
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            aria-label="toggle menu"
            aria-expanded={showMenu}
            className="md:hidden text-zinc-800 text-2xl sm:text-3xl"
            onClick={() => setShowMenu((v) => !v)}
          >
            {showMenu ? <IoClose /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 top-16 bg-black/40 transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-xl transition-transform duration-300 origin-top ${
          showMenu ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col px-4 sm:px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`block py-3 px-3 rounded-lg font-medium tracking-wide transition-colors ${
                  link.active
                    ? "text-orange-500 bg-orange-50"
                    : "text-zinc-800 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="mt-3 flex items-center border-2 rounded-full p-1 border-orange-500">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 min-w-0 h-9 px-3 text-sm focus:outline-none bg-transparent"
            />
            <button
              aria-label="search"
              className="bg-gradient-to-b from-orange-400 to-orange-500 h-9 w-9 text-white flex justify-center items-center rounded-full text-lg shrink-0"
            >
              <IoSearch />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
