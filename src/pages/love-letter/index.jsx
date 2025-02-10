import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const floatingHearts = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 + "vw",
  y: Math.random() * 100 + "vh",
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1 + "rem",
}));

const LoveLetter = () => (
  <div className="flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-red-500 text-white py-6 relative overflow-hidden px-5 sm:px-14 lg:px-20">
    {floatingHearts.map(({ id, x, y, delay, size }) => (
      <motion.span
        key={id}
        className="absolute drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ left: x, top: y, fontSize: size }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        💕🌸💫
      </motion.span>
    ))}

    <motion.h1
      className="text-3xl sm:text-5xl font-extrabold mb-6 text-center flex items-center gap-3 max-w-2xl"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      A Love Letter Just for You, My Faith 💌💖
    </motion.h1>

    <motion.p
      className="text-lg max-w-2xl text-center leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      My dearest Opeyemi,  
      From the moment you walked into my life, everything changed. 🌟 You are my light in the darkest of nights 🌙, my comfort in the storm ☔, and the melody 🎶 that plays in my heart every second of the day.  
      <br /><br />
      Every smile of yours makes my heart race ❤️‍🔥, and every laugh is a song I never want to stop hearing. You are my dream come true ✨, my answered prayer 🙏, my forever. Your kindness, your love, your warmth—everything about you is pure magic. 🔥🌻  
      <br /><br />
      I love the way you say my name 🥰, the way your eyes sparkle when you're happy ✨👀, and the way your presence makes the world feel safe and beautiful 🌍💛. I promise to love you endlessly, to cherish you forever, and to stand by your side no matter what.  
      <br /><br />
      You are not just my love, Faith—you are my home 🏡❤️. My heart beats only for you, and every day I spend with you is a blessing I will never take for granted.  
      <br /><br />
      Always and forever, my love. 💜🌟💖  
    </motion.p>

    <motion.div
      className="mt-6 text-3xl flex gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      💙💛💚💜✨🌸💞🌷💫
    </motion.div>

    <Link
      to="/be-my-val"
      className="mt-6 bg-white text-pink-500 px-6 py-2 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
    >
      Be My Val 💖
    </Link>
  </div>
);

export default LoveLetter;
