/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

function BtnClickAnim({ disabled, children }) {
  return !disabled ? (
    <motion.div whileTap={{ scale: 0.9 }}>{children}</motion.div>
  ) : (
    <motion.div>{children}</motion.div>
  );
}

export default BtnClickAnim;
