import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const Header = ({ sections, activeSection, scrollToSection }) => {
      return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-xl">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-wider"
            >
              Bem-vindo ao meu portfólio
            </motion.div>
            <div className="space-x-4">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "secondary" : "ghost"}
                  onClick={() => scrollToSection(section.id)}
                  className={`transition-all duration-300 ${activeSection === section.id ? 'text-black bg-white' : 'hover:bg-gray-700'}`}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </nav>
        </header>
      );
    };

    export default Header;