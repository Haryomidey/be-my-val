import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image1 from '../../assets/images/image-1.jpg';
import Image2 from '../../assets/images/image-2.jpg';
import Image3 from '../../assets/images/image-3.jpg';
import Image4 from '../../assets/images/image-4.jpg';
import Image5 from '../../assets/images/image-5.jpg';
import Image6 from '../../assets/images/image-6.jpg';
import Image7 from '../../assets/images/image-7.jpg';
import Image8 from '../../assets/images/image-8.jpg';
import Image9 from '../../assets/images/image-9.jpg';

const floatingEmojis = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 + "vw",
  y: Math.random() * 100 + "vh",
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1 + "rem",
  emoji: ["🥰", "💖", "💕", "😍", "😘", "❤️", "💞", "💓", "💗", "❣️"][Math.floor(Math.random() * 10)],
}));

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
];

const Gallery = () => (
  <div className="flex flex-col items-center justify-center bg-red-400 text-white p-6 relative overflow-hidden px-5 sm:px-14 lg:px-20">
    {floatingEmojis.map(({ id, x, y, delay, size, emoji }) => (
      <motion.span
        key={id}
        className="absolute drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] z-[1111]"
        style={{ left: x, top: y, fontSize: size }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        {emoji}
      </motion.span>
    ))}

    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
      Our Beautiful Memories 📸💖
    </h1>
    <p className="text-lg italic mb-4 text-center">
      Every moment with you is a treasure I cherish forever.
    </p>

    <div className="w-full max-w-2xl">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <Link
      to="/love-letter"
      className="mt-6 bg-white text-red-500 px-6 py-2 rounded-lg shadow-lg hover:bg-red-100 transition duration-300"
    >
      Read My Love Letter 💌
    </Link>
  </div>
);

export default Gallery;
