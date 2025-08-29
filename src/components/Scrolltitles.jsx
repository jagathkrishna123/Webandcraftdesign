import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Scrolltitles = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titles = ["Design", "Market", "Build", "Inspire"];

  return (
    <div ref={ref} className="h-[400vh] relative">
      {/* Sticky container */}
      <div className="sticky top-1/3 flex justify-center items-center">
        {titles.map((title, i) => {
          const start = i / titles.length;
          const end = (i + 1) / titles.length;

          // Fade in at start, fade out before next
          const opacity = useTransform(scrollYProgress, [start-0.1, start, end, end + 0.1], [0, 1, 1, 0]);

          return (
            <motion.h1
              key={i}
              style={{ opacity }}
              className="absolute text-6xl font-bold text-center"
            >
              {title}
            </motion.h1>
          );
        })}
      </div>
    </div>
  );
};

export default Scrolltitles;
