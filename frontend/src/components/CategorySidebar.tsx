"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Shirt,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Footprints,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Shoes",
    icon: Footprints,
    total: 124,
  },
  {
    id: 2,
    name: "Clothing",
    icon: Shirt,
    total: 86,
  },
  {
    id: 3,
    name: "Phones",
    icon: Smartphone,
    total: 45,
  },
  {
    id: 4,
    name: "Laptops",
    icon: Laptop,
    total: 30,
  },
  {
    id: 5,
    name: "Watches",
    icon: Watch,
    total: 52,
  },
  {
    id: 6,
    name: "Audio",
    icon: Headphones,
    total: 27,
  },
];

export default function CategorySidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-20 z-50 rounded-lg border bg-white p-2 shadow md:hidden"
      >
        <Menu />
      </button>

      {/* Desktop Sidebar */}

      <aside className="hidden h-screen w-72 border-r bg-white md:block">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Categories
          </h2>

        </div>

        <div className="space-y-2 p-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.button
                whileHover={{ x: 6 }}
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`flex w-full items-center justify-between rounded-xl p-4 transition

                ${
                  active === category.id
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">

                  <Icon size={20} />

                  <span>{category.name}</span>

                </div>

                <div className="flex items-center gap-2">

                  <span className="text-sm">
                    {category.total}
                  </span>

                  <ChevronRight size={18} />

                </div>

              </motion.button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Sidebar */}

      <AnimatePresence>

        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: .5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: .3 }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-white"
            >
              <div className="flex items-center justify-between border-b p-6">

                <h2 className="text-2xl font-bold">
                  Categories
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X />
                </button>

              </div>

              <div className="space-y-2 p-4">

                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <motion.button
                      whileHover={{ x: 6 }}
                      key={category.id}
                      onClick={() => {
                        setActive(category.id);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl p-4 transition

                      ${
                        active === category.id
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <Icon size={20} />

                        <span>{category.name}</span>

                      </div>

                      <div className="flex items-center gap-2">

                        <span className="text-sm">
                          {category.total}
                        </span>

                        <ChevronRight size={18} />

                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}

      </AnimatePresence>
    </>
  );
}