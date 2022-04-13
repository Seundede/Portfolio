import { motion } from 'framer-motion';
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  const container = {
    hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const content = {
    hidden: {
      y: 32,
      opacity: 0,
    },
   visible: {
      y: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.75,
      },
    },
  };
  return (
    <div className="h-screen overflow-y-hidden flex flex-col justify-between dark:bg-black">
      <Navbar />
      <motion.h1
        className="px-8 xl:px-16 text-[70px] text-6xl md:text-7xl font-extralight leading-none lg:text-9xl mb-[25px] dark:bg-black dark:text-white"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.span className="block" variants={content}>
          Front
        </motion.span>{" "}
        <motion.span className="block italic" variants={content}>
          end
        </motion.span>
        <motion.span className="block" variants={content}>
          Developer
        </motion.span>
        <Footer />
      </motion.h1>
    </div>
  );
}

export default Home