"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@heroui/styles";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/80 via-fuchsia-900/70 to-cyan-900/70" />

      {/* Animated Blur Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-3 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-white"
          >
            🚀 Multi Vendor Marketplace Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            Discover Amazing Products From
            <span className="block bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted Vendors
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Shop millions of products, support independent sellers,
            and grow your business with MarketNest's next-generation
            marketplace ecosystem.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center font-semibold px-8 h-12 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Explore Products
            </Link>

            <Link
              href="/become-seller"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "border border-white text-white hover:bg-pink-200/30 duration-200 px-8 rounded-full"
              })}
            >
              Become a Seller
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-8 mt-16 text-white"
          >
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-gray-300">Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">2K+</h3>
              <p className="text-gray-300">Vendors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-gray-300">Customers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}