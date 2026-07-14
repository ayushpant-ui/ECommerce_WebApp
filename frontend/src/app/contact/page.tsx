"use client";

import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
const icon =[{
  icon_name: <FaFacebook size={22}/>,
  href : '#'
},
{
  icon_name: <FaInstagram size={22}/>,
  href: '#'
},
{
  icon_name: <FaGithub size={22}/>,
  href: 'https://github.com/ayushpant-ui'
},
{
  icon_name: <FaLinkedin size={22}/>,
  href:'#'
}
]

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-100 py-24">

      {/* Background Blur */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Send us a message anytime.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5 rounded-2xl border bg-white/80 p-6 shadow-lg backdrop-blur">

              <Mail className="text-blue-600" size={30} />

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-500">
                  ayushpant2073@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl border bg-white/80 p-6 shadow-lg backdrop-blur">

              <Phone className="text-blue-600" size={30} />

              <div>
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +977-9766987980
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl border bg-white/80 p-6 shadow-lg backdrop-blur">

              <MapPin className="text-blue-600" size={30} />

              <div>
                <h3 className="font-semibold text-lg">
                  Address
                </h3>

                <p className="text-gray-500">
                  Mahendranagar, Nepal
                </p>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 pt-4">

              {icon.map((value, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: .9 }}
                  className="cursor-pointer rounded-full border bg-white p-4 shadow"
                >
                  <a href={value.href}
                  target="_blank">

                  {value.icon_name}
                  </a>
                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="First Name"
                className="rounded-xl border px-5 py-4 outline-none transition focus:border-black"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="rounded-xl border px-5 py-4 outline-none transition focus:border-black"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="mt-6 w-full rounded-xl border px-5 py-4 outline-none transition focus:border-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full rounded-xl border px-5 py-4 outline-none transition focus:border-black"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="mt-6 w-full resize-none rounded-xl border px-5 py-4 outline-none transition focus:border-black"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .95 }}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 font-semibold text-white"
            >
              Send Message

              <Send size={20} />
            </motion.button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}