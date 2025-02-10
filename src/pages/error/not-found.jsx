import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-400 to-red-600 text-white px-5 sm:px-14 lg:px-20 text-center overflow-hidden relative">
            <motion.h1
                className="text-3xl sm:text-5xl font-extrabold mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                This page cannot be found!!
            </motion.h1>

            <p className="text-lg sm:text-xl max-w-md mb-6">
                Even though this page cannot be found, my love for you will always be present. 💖💜🌸
            </p>

            <button
                className="bg-white text-red-500 px-6 py-2 rounded-full shadow-lg text-lg font-bold transition duration-300 hover:scale-110 hover:bg-red-600 hover:text-white"
                onClick={() => window.location.href = "/"}
            >
                Go Home
            </button>

            {[...Array(20)].map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute text-3xl"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        fontSize: `${Math.random() * 1.5 + 1}rem`,
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
                    {["❤️", "💖", "💜", "💕", "🌸"][Math.floor(Math.random() * 5)]}
                </motion.span>
            ))}
        </div>
    );
};

export default NotFound;
