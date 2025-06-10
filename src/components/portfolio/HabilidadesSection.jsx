import React from 'react';
    import SectionWrapper from '@/components/portfolio/SectionWrapper';
    import SkillCard from '@/components/portfolio/SkillCard';
    import { Code, User, Brain, Briefcase } from 'lucide-react';

    const HabilidadesSection = () => {
      const linguagens = [
        { name: "JavaScript", level: "Intermediário" },
        { name: "Python", level: "Básico" },
        { name: "Java", level: "Cursando" }
      ];

      const frontendSkills = [
        { name: "HTML5", level: "Avançado" },
        { name: "CSS3", level: "Avançado" },
        { name: "React", level: "Iniciante" },
        { name: "TailwindCSS", level: "Intermediário" }
      ];

      const backendDbSkills = [
        { name: "Node.js", level: "Estudando" },
        { name: "SQL", level: "Básico" },
        { name: "MongoDB", level: "Noções" }
      ];

      const toolsSkills = [
        { name: "Git", level: "Intermediário" },
        { name: "GitHub", level: "Intermediário" },
        { name: "VS Code", level: "Avançado" },
        { name: "Figma", level: "Básico" },
        { name: "Scrum", level: "Conhecimento" }
      ];

      return (
        <SectionWrapper id="habilidades" title="Habilidades Técnicas" icon={<Code className="h-8 w-8 mb-2 text-white" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SkillCard title="Linguagens de Programação" skills={linguagens} icon={<Code />} />
            <SkillCard title="Frontend" skills={frontendSkills} icon={<User />} />
            <SkillCard title="Backend & Banco de Dados" skills={backendDbSkills} icon={<Brain />} />
            <SkillCard title="Ferramentas e Metodologias" skills={toolsSkills} icon={<Briefcase />} />
          </div>
        </SectionWrapper>
      );
    };

    export default HabilidadesSection;