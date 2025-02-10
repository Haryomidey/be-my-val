import { useState } from "react";
import { motion } from "framer-motion";

const ValentineProposal = () => {
  const [saidYes, setSaidYes] = useState(false);
  const [noSize, setNoSize] = useState(1);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    if (noSize > 0.1) {
      setNoSize((prev) => prev * 0.7);
      setYesSize((prev) => prev * 1.3);
    } else {
      setNoSize(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500 text-white relative overflow-hidden px-5">
      {!saidYes ? (
        <>
          <motion.h1
            className="text-2xl sm:text-4xl font-bold mb-6 text-center leading-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Will you be my Valentine? 💖💜🌟💖🌷
          </motion.h1>

          <div className={`flex mt-2 gap-2 ${noSize < 0.3429999999999999 ? "justify-center" : "gap-6"}`}>
            {noSize > 0 && (
              <motion.button
                className={`bg-white text-red-500 px-6 py-2 rounded-full shadow-lg transition ${noSize < 0.3429999999999999 ? 'hidden' : ''}`}
                style={{ transform: `scale(${noSize})` }}
                onClick={handleNoClick}
              >
                No 😢
              </motion.button>
            )}

            <motion.button
              className={`bg-white text-red-500 px-6 py-2 rounded-full shadow-lg transition ${noSize < 0.3429999999999999 ? 'text-center mt-3' : ''}`}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transform: `scale(${yesSize})` }}
              onClick={() => setSaidYes(true)}
            >
              Yes 😍
            </motion.button>
          </div>
        </>
      ) : (
        <>
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold mb-6 text-center"
            initial={{ scale: 0.8, y: -10 }}
            animate={{ scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Yay! You are my Valentine! 💖🌹
          </motion.h1>

          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute"
              style={{
                left: Math.random() * 80 - 10 + "vw", // More balanced distribution
                fontSize: Math.random() * 2 + 1 + "rem",
              }}
              initial={{ top: "-10vh", opacity: 0 }}
              animate={{
                top: "100vh",
                opacity: 1,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              🌸🌷🌺💐
            </motion.span>
          ))}
        </>
      )}
    </div>
  );
};

export default ValentineProposal;
