"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image1 from '../../public/images/img1.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
            Discover
            <span className="block text-blue-600">
              Your Style.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Shop premium fashion, electronics, accessories and
            lifestyle products with fast delivery and secure
            checkout.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:border-black"
            >
              Explore
            </Link>

          </div>

          <div className="mt-10 flex gap-8">

            <div>
              <h3 className="text-2xl font-bold">20K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="relative"
        >
          <Image
            src={image1}
            alt="Shopping"
            width={600}
            height={600}
            priority
            className="object-contain"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -left-8 top-10 rounded-xl bg-white p-4 shadow-xl"
          >
            ⭐ 4.9 Rating
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-10 -right-8 rounded-xl bg-white p-4 shadow-xl"
          >
            🚚 Free Shipping
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;