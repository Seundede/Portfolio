import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const data = [
  {
    link: "data:image/png;base64,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",
    title: "HTML",
  },
  {
    link: "data:image/png;base64,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",
    title: "CSS",
  },
  {
    link: "data:image/png;base64,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",
    title: "JavaScript",
  },
  {
    link: "data:image/png;base64,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",
    title: "TypeScript",
  },
  {
    link: "https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png",
    title: "Tailwind",
  },
  {
    link: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    title: "React",
  },
  {
    link: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true",
    title: "Chakra UI",
  },
  {
    link: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    title: "Styled Components",
  },
  {
    link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///+wsLAEBAT8/PzLy8v6+vr29va0tLRnZ2d9fX0HBwfR0dHV1dUlJSXOzs4REREWFhYgICDf398qKiq+vr4UFBTZ2dnl5eUaGhrFxcUoKCiFhYXu7u4yMjJra2tTU1M5OTlGRkbQfJHSAAAEu0lEQVR4nO2c3XLbOAxGyUqWs0vJlmU7ip309/0fcgHQF0nqJJTEGYHY73TSq05GpyABkBLpHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/i9UVbX2I7zm58O3rDy8kOLaUm+47H1e9toMXX/1dU7DzdpC76H/73NOQYWGotjUjV3DQIpX39g1DKz4mHEuqjOsYvm65hLUZ8iQYnX2dVPnCKRKQxeCcxufZ6TqNHRk2G8MG1aUbapcpV+lobRZgRXNGgoyFynd2DXkgUqKpg2DO+wXz0XNhoGKxmWzUFCzIRN71EUjVbch9Tau3y+bi7oNZaUR2kVLKe2GPE6Hdkm6UW5IvQ2vNJZkVOWGTKyLs9NNAYbco4bWz52LZRgGN3R+a9aQIkilv5+7j1qAoVC5x71v5uxPFWIoO3DzSn8xhhTF3ax0U4hhTDekaNeQF8SBuxuq/dOGajmGMlRdW9dbw4ZU+g/j1E3Gwgyl9Ns1DKK46yYJFmXIcF1sJ7XhpRlyd8MDNb0wlmfIDdyUdFOaYSUD9Xk0PUq5aPRjchDLM7yRvI/arv2k7zk/pHF++SeJn7+0fU+TFBfOpOOPxN9YKfvqK0Ww5jdS9VOioi6/xBiKpifFoO3xE0g2pDB+36kLUALJIeTG7fib36MWxoQYUut2TE03ikg25Ixa++NzfLdREBMM41x8Li3dTDK8DVTLhryDSunGrmH8GGW8rP3Qk5hmGOG6WM5QnSFIc3HnQjFDdbog135q4EoRnG5IlZ8Uu1MxijNiKD9Pz/pWEfeZbiiB9DwXy+hu5hn6LUXxJLup6pkZQ95A7cpINzNjGBdTu7WfPoWZhl4yznGIb4tVM9+Qe9Sni1M/GRcY8vuaTv9KY0kIOd8kbzKuxoIYxjf83eC07QG/ZYGh0PBcVJ1tlgpSGKlHNWwobfiouvQvNNyKYtuvrfEJCw1jHP3ToHcHLoch/RkPanfDMxj625JYqWIWQ36/uBmUppsshvLDm4waHXMY3izHXk6HaSObIdX+cdDYhmcz5KJx3Skcp7kMRdJ3j2v7/E3suxJIuDqD/kXH3Y2uOPp6m2SY+knU8aJtLu4Tvzus/03i5eWPNkPXpsVnm/wLg7aKETY+ZSay4ZexqV79rYbKhTOlkS+P4afHUBv8PX7KRQPlGsqyrvWmDeM5tZR5WC7xjqHPS3/hhpW7XL84bVi6oczFT9NN4Yacbg7dp6cNyzYMckzNyTVKH83Fsg0FiuLV1x+uIAwYcnez8R+eNjRgyOnm8vEJJwOGfBaP71KwG0Mm3qB4t/QbMbwpNncujDBjWLn+fuk3YihXKfR3S78VQ7mX7u6VZkYMBbnSrK7flQ1LhpXcpVA3dg35dpowvr9Z2JYhZdS/TuFbMozwJZHNq4xjzZAG6mn/5lWFNUMuHFQXa7sxlNp/Gg2P0ngm5vDqXhNzhpFTF9/tWjW83U4TC6NNw75yw/G26jdpGEK8usXyPGTi7TS1WcN4jRItie0aUtEYqC7aNZS38qxo1jC+k6fuZlvKYbyZ7LraqfsEISNk9qMNlg15Lp6C5VEqb9/0H1IDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAfP4D7E42pgsv/JgAAAAASUVORK5CYII=",
    title: "Framer motion",
  },
  {
    link: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    title: "Redux",
  },
  {
    link: "https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67",
    title: "Next JS",
  },
  {
    link: "data:image/png;base64,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",
    title: "Git",
  },
  {
    link: "https://avatars.githubusercontent.com/u/1335026?s=200&v=4",
    title: "Firebase",
  },
  
];
const Skills = () => {
  return (
    <div className="h-screen overflow-y-hidden dark:bg-black">
      <Navbar />
      <div className="px-8 xl:px-16">
        <motion.div
          className=" grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mt-[50px] mb-[50px] ]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
        >
          {data.map((item, id) => (
            <motion.div whileHover={{ scale: 1.2 }} key={id}>
              <img
                src={item.link}
                alt="pixel"
                className="h-[95px] w-[65px] md:h-[120px] md:w-[120px] xl:w-[140px] xl:h-[140px]  object-contain mb-[15px] xl:mb-[40px] "
              />
            </motion.div>
          ))}
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
