"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Interface } from "readline";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl"
    >
      <div className="relative">

        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
          SALE
        </span>

        <button className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3 p-5">

        <div className="flex items-center gap-1">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span>{product.rating}</span>
        </div>

        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            Rs{product.price}
          </span>

          <span className="text-gray-400 line-through">
            Rs{product.oldPrice}
          </span>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-white transition hover:bg-gray-800">
          <ShoppingCart size={20} />
          Add to Cart
        </button>

      </div>
    </motion.div>
  );
}