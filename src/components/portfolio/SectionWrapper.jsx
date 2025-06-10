import React from 'react';
    import { motion } from 'framer-motion';

    const SectionWrapper = ({ id, title, icon, children, className }) => (
      <motion.section
        id={id}
        className={`py-20 border-t border-gray-700/50 ${className || ''}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {title && (
          <div className="flex items-center justify-center mb-12">
            {icon}
            <h2 className="text-4xl font-bold ml-4 tracking-wide">{title}</h2>
          </div>
        )}
        {children}
      </motion.section>
    );

    export default SectionWrapper;