import React from 'react'
import { motion } from 'framer-motion'
 const data = [
   {
     title: "  github",
     link: "https://github.com/Seundede",
   },
   {
     title: "  linkedin",
     link: "https://www.linkedin.com/in/mary-omadoye-655b9810b/",
   },
   {
     title: "medium",
     link: "https://medium.com/@omadoyedede0",
   },
 ];
const Footer = () => {
  return (
    <motion.footer
      className="h-[110px] flex flex-col  cursor-pointer uppercase text-xs font-light tracking-widest mt-4 dark:bg-black dark:text-white"
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ type: "spring", duration: 1.2, delay: 0.25 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <a href="mailto:dedeomadoye@yahoo.com" className="py-2 hover:underline">
        👋 dedeomadoye@yahoo.com
      </a>
      <div className="flex flex-col ">
        {data.map((item) => (
          <a className="py-2 tracking-widest hover:underline" href={item.link}>{item.title}</a>
        ))}
      </div>
    </motion.footer>
  );
}

export default Footer