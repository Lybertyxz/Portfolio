"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";

type TextBoxProps = {
  text: string;
  style: string;
  animation: number;
};

function MagicWriter(text: string) {
  const typing = useTypewriter(text);
  return typing;
}

function TextBox({ text, style, animation }: TextBoxProps) {
  const [magicName, setMagicName] = useState("");

  useEffect(() => {
    setMagicName(text);
  }, [text]);

  if (animation == 1) {
    return <div className={style}>{MagicWriter(magicName)}</div>;
  }
  if (animation == 2) {
    return (
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.5 }}
        style={{ originY: 0 }}
        className={style}
      >
        {text}
      </motion.div>
    );
  }
}

export default TextBox;
