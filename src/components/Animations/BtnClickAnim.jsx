/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

function BtnClickAnim({ disabled, children }) {
  return !disabled ? (
    <motion.div
      transition="350ms ease"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      transition="350ms ease"
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default BtnClickAnim;
