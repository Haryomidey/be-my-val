import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const floatingEmojis = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 + "vw",
  y: Math.random() * window.innerHeight + "px",
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1 + "rem",
  emoji: ["🥰", "💖", "💕", "😍", "😘", "❤️", "💞", "💓", "💗", "❣️"][Math.floor(Math.random() * 10)],
}));


const Reasons = () => {
  const reasons = [
    "Your beautiful smile",
    "The way you make me laugh",
    "Your kindness and love",
    "Every moment with you feels special",
    "You are my best friend",
    "Your warm hugs that make everything feel right",
    "Your voice is my favorite sound",
    "You always know how to cheer me up",
    "Your eyes sparkle like the stars",
    "You are the most caring person I know",
    "The way you say my name melts my heart",
    "You believe in me even when I don’t",
    "You inspire me to be a better person",
    "You make even the simplest moments magical",
    "You are my safe place",
    "Your intelligence and wisdom amaze me",
    "Your patience and understanding are unmatched",
    "You always find ways to make me smile",
    "You are incredibly strong and resilient",
    "Your kindness touches everyone around you",
    "You support my dreams and goals",
    "You always listen when I need to talk",
    "Your happiness is contagious",
    "You make love feel effortless and pure",
    "You appreciate the little things in life",
    "You have a heart full of love and generosity",
    "Your love makes every day worth living",
    "You are my greatest adventure",
    "You complete me in every way possible",
    "You are and will always be my forever love",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-pink-500 text-white p-6 relative overflow-hidden">
      {floatingEmojis.map(({ id, x, y, delay, size, emoji }) => (
        <motion.span
          key={id}
          className="absolute drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ left: x, top: y, fontSize: size }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          {emoji}
        </motion.span>
      ))}

      <h1 className="text-4xl font-bold mb-6 text-center">Reasons Why I Love You, Faith ❤️</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white text-red-500 rounded-lg shadow-lg text-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {reason}
          </motion.div>
        ))}
      </div>

      <Link
        to="/gallery"
        className="mt-6 bg-white text-pink-500 px-6 py-2 rounded-lg shadow-lg hover:bg-pink-100 transition duration-300"
      >
        View Our Memories
      </Link>
    </div>
  );
};

export default Reasons;
