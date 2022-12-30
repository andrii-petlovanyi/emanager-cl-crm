/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

function BtnClickAnim({ children }) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
}

export default BtnClickAnim;
