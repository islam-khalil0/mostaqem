import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const WelcomePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [exitAnimation, setExitAnimation] = useState(false);

  const welcomeText = ` أهلًا بيك يا ${name}👋، مبسوطين بوجودك معنا!`;
  const description = [
    'مرحباً بك في "مستقيم"، التطبيق الأمثل للاستماع إلى القرآن الكريم.',
    "استمتع بتجربة استماع خالية من التشتت مع مكتبة غنية تشمل تلاوات لمختلف القراء.",
    "حمّل التطبيق الآن وابدأ رحلتك الروحية.",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 9000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <motion.div
      className="flex flex-col gap-6 items-center justify-center min-h-screen text-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
      style={{
        background: "linear-gradient(45deg, #5a3d2b, #725142, #8b5e3c)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* اللوجو */}
      <motion.img
        src={logo}
        alt="مستقيم"
        className="w-24 sm:w-32 mt-4 mb-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.h1 className="text-2xl sm:text-4xl font-bold text-[#FCEEDD] mb-2">
        {welcomeText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {description.map((line, index) => (
        <motion.p
          key={index}
          className="text-base sm:text-lg text-[#FCEEDD] max-w-4xl px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 + index * 0.5 }}
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default WelcomePage;
