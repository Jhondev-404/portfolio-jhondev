import React from 'react';
    import SectionWrapper from '@/components/portfolio/SectionWrapper';
    import { Lightbulb } from 'lucide-react';

    const CuriosidadesSection = () => {
      return (
        <SectionWrapper id="curiosidades" title="Curiosidades" icon={<Lightbulb className="h-8 w-8 mb-2 text-white" />}>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-300 max-w-2xl mx-auto">
            <li>Sempre fui fascinado por como a tecnologia pode resolver problemas complexos e simplificar o dia a dia.</li>
            <li>Nas horas vagas, gosto de explorar novas distribuições Linux e aprender sobre segurança da informação.</li>
            <li>Participo ativamente de comunidades online e fóruns de desenvolvimento para trocar conhecimento.</li>
            <li>Acredito que a colaboração e o aprendizado contínuo são chaves para o sucesso na área de TI.</li>
            <li>Tenho interesse em desenvolvimento mobile e pretendo estudar React Native ou Flutter no futuro.</li>
          </ul>
        </SectionWrapper>
      );
    };

    export default CuriosidadesSection;