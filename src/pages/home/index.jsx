import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const floatingIcons = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 + "vw",
  y: Math.random() * 100 + "vh",
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1 + "rem",
  icon: ["❤️", "💖", "🥰", "💞", "💓", "💗", "😍", "😘", "❣️", "💕"][
    Math.floor(Math.random() * 10)
  ],
}));

const Home = () => {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-pink-500 text-white text-center p-6">
      {/* Floating Hearts & Love Icons */}
      {floatingIcons.map(({ id, x, y, delay, size, icon }) => (
        <motion.span
          key={id}
          className="absolute drop-shadow-lg"
          style={{ left: x, top: y, fontSize: size }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      ))}

      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-300 animate-pulse px-5 sm:px-14 lg:px-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Will You Be My Valentine? ❤️
      </motion.h1>
      
      <motion.p
        className="text-lg sm:text-xl md:text-2xl italic mb-6 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        Every heartbeat, every moment, and every smile is a love letter to you. 💕
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          to="/reasons"
          className="mt-6 bg-white text-red-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-red-100 transition duration-300 transform hover:scale-105"
        >
          See Why I Love You 💌
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
