"use client";

import { motion } from "framer-motion";
import Image from "next/image";
interface GoogleButtonProps {
  onClick?: () => void;
  loading?: boolean;
}

export default function GoogleButton({
  onClick,
  loading = false,
}: GoogleButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      disabled={loading}
      className="
        mt-4
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-3
        font-medium
        text-gray-700
        shadow-sm
        transition
        hover:bg-gray-100
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      <Image
        src='/images/google.svg'
        alt="Google"
        width={22}
        height={22}
      />

      <span>
        Continue with Google
      </span>
    </motion.button>
  );
}