"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:font-bold hover:-translate-y-0.5 hover:transition-all"
        >
          AyushCart 
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="relative text-gray-700 transition hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Icons */}

        <div className="flex items-center gap-4">

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="cursor-pointer" size={22} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <ShoppingCart
              className="cursor-pointer"
              size={22}
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
              0
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block"
          >
            <User className="cursor-pointer" size={22} />
          </motion.div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-white md:hidden"
          >
            <div className="flex flex-col p-5">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b py-4 text-gray-700 hover:text-black"
                >
                  {item.name}
                </Link>

              ))}

              <Link
                href="/profile"
                className="py-4"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>

            </div>
          </motion.div>

        )}

      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;