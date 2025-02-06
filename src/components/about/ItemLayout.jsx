"use client";

import clsx from "clsx";

const { motion } = require("framer-motion");

/* ItemLayout è un componente DRY (Don't Repeat Yourself). Serve a ridurre la ridondanza e a migliorare la leggibilità del codice */
const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      //viewport={{ once: true }} si animerà una sola volta
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
export default ItemLayout;
