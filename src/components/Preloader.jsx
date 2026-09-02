import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Hide the preloader after a short delay
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark-950"
    >
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center gap-5 text-center px-4"
      >
        <motion.div 
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center p-[2px] shadow-glow-cyan"
        >
          <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center">
            <Terminal className="w-7 h-7 text-cyan-400" />
          </div>
        </motion.div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight flex items-center justify-center gap-2 flex-wrap">
            Hi, it's me <span className="text-gradient-cyan">Parvathi G</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mt-4 rounded-full mx-auto"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs sm:text-sm font-mono text-cyan-400/80 uppercase tracking-widest flex items-center gap-2 mt-2"
        >
          <Sparkles className="w-4 h-4" /> Welcome to my portfolio
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
