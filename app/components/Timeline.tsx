"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  title: string;
  date: string;
  desc: string[];
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-10 relative flex items-center justify-between md:justify-start md:odd:flex-row-reverse group"
    >
      <div className="flex items-center justify-center w-4 h-4 rounded-full  bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-8 md:group-even:translate-x-8"></div>
      <motion.div
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-500 bg-opacity-20 p-4 rounded shadow"
        variants={variants}
      >
        <div className="flex items-center justify-between space-x-2 mb-1">
          <h3 className="font-bold text-white">{title}</h3>
          <time className="font-caveat font-medium text-indigo-200">
            {date}
          </time>
        </div>
        {desc.map((line, i) => (
          <p key={i} className="text-sm text-white leading-relaxed">
            {line}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
