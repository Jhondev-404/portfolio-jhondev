import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-black py-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Jhonatan. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Desenvolvido com React, TailwindCSS e muito café.
          </p>
        </footer>
      );
    };

    export default Footer;