import React from "react";
import { motion } from "framer-motion";
import { FaCompass, FaMap, FaPlane } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const OpeningAnimation = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex flex-col justify-center items-center h-screen bg-blue-900 text-white overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <FaCompass className="w-48 h-48 text-white opacity-20" />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          TravelMate
        </motion.h1>
      </motion.div>
      
      <motion.p
        className="mt-4 text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Your journey begins here
      </motion.p>

      <div className="mt-12 flex space-x-8">
        <IconAnimation icon={FaPlane} delay={2} />
        <IconAnimation icon={FaMap} delay={2.2} />
      </div>
    </motion.div>
  );
};

const IconAnimation = ({ icon: Icon, delay }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
  >
    <Icon className="w-12 h-12" />
  </motion.div>
);

export default OpeningAnimation;