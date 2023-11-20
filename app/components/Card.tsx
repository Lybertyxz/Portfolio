"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  date: string;
  desc: string[];
};

function Card({ title, date, desc }: CardProps) {
  return (
    <div className="rounded-lg bg-white bg-opacity-20 text-white p-6 shadow-xl transform transition duration-500 hover:scale-105">
  <div className="text-xl font-semibold mb-2">{title}</div>
  <div className="text-md mb-4">{date}</div>
    {desc.map(line => {return (<div key={line} className="text-sm leading-relaxed pl-4 border-l-4 border-white">{line}</div>)})}
</div>
  );
}

export default Card;
