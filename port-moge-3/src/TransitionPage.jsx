import React from "react";
import { motion } from "framer-motion";

function TransitionPage({ children }) {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x:0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ x: "-100vw", transition: { duration: 3 } }}
    >
      {children}
    </motion.div>
  );
}

export default TransitionPage;
