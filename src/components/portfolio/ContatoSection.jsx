import React from 'react';
    import SectionWrapper from '@/components/portfolio/SectionWrapper';
    import ContactLink from '@/components/portfolio/ContactLink';
    import { Mail, Linkedin, Github } from 'lucide-react';

    const ContatoSection = () => {
      return (
        <SectionWrapper id="contato" title="Contato" icon={<Mail className="h-8 w-8 mb-2 text-white" />}>
          <p className="text-xl text-gray-300 max-w-xl mx-auto text-center mb-12">
            Estou animado para conectar e discutir oportunidades! Sinta-se à vontade para entrar em contato através dos canais abaixo.
          </p>
          <div className="flex justify-center space-x-8">
            <ContactLink href="mailto:jhonata555romero@gmail.com" icon={<Mail />} label="Email" />
            <ContactLink href="https://www.linkedin.com/in/jhonatan-romero-20983b2ba/" icon={<Linkedin />} label="LinkedIn" />
            <ContactLink href="https://github.com/Jhondev-404" icon={<Github />} label="GitHub" />
          </div>
        </SectionWrapper>
      );
    };

    export default ContatoSection;