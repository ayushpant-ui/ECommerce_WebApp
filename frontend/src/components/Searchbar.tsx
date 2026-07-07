"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
     <AnimatePresence>
  {open && (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mr-2 overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search products..."
        className="w-40 sm:w-52 md:w-64 rounded-full border border-gray-300 px-4 py-2 outline-none"
        autoFocus
      />
    </motion.div>
  )}
    </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full p-2 transition hover:bg-gray-100 cursor-pointer"
      >
        {open ? <X size={22} /> : <Search size={22} />}
      </button>
    </div>
  );
}