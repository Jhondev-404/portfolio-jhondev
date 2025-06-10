import React from 'react';
    import { motion } from 'framer-motion';

    const ContactLink = ({ href, icon, label }) => (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 group"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-4 bg-gray-800 rounded-full mb-2 group-hover:bg-white transition-colors duration-300">
          {React.cloneElement(icon, { className: "h-8 w-8 text-white group-hover:text-black transition-colors duration-300" })}
        </div>
        <span className="text-sm">{label}</span>
      </motion.a>
    );

    export default ContactLink;