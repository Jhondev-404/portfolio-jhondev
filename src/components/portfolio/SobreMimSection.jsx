import React from 'react';
    import { motion } from 'framer-motion';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { Button } from '@/components/ui/button';
    import { Mail } from 'lucide-react';

    const SobreMimSection = ({ scrollToSection }) => {
      return (
        <motion.section
          id="sobre"
          className="min-h-screen flex flex-col justify-center items-center text-center py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar className="w-40 h-40 mb-8 border-4 border-white shadow-lg">
            <AvatarImage  src="src/components/portfolio/img/fotoparaolinkdi.jpg"  alt="Foto perfil" /*Aqui para alterar a foto */
            className="avatar-img"/>
              

            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-400">
            Olá, sou Jhonatan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas (2º ano), apaixonado por tecnologia e em busca da minha primeira oportunidade de estágio na área de TI. Estou sempre explorando novas ferramentas e frameworks para expandir meus conhecimentos e habilidades.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="lg" onClick={() => scrollToSection('contato')} className="bg-white text-black hover:bg-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
              Entre em Contato <Mail className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.section>
      );
    };

    export default SobreMimSection;