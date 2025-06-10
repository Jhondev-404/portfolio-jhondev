import React from 'react';
    import SectionWrapper from '@/components/portfolio/SectionWrapper';
    import ProjectCard from '@/components/portfolio/ProjectCard';
    import { Briefcase } from 'lucide-react';

    const ProjetosSection = () => {
      return (
        <SectionWrapper id="projetos" title="Projetos e Experiências" icon={<Briefcase className="h-8 w-8 mb-2 text-white" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Sistema de Gerenciamento de Tarefas"
              description="Um aplicativo web simples para organizar tarefas diárias, desenvolvido com HTML, CSS , React e JavaScript puro. Foco na manipulação do DOM e lógica de frontend."
              tags={["HTML", "CSS", "JavaScript", "React"]}
              imageUrl="src/components/portfolio/img/tumbgerenciador.png"
              liveLink="https://jhondev-404.github.io/Gerenciador-de-Tarefas/"
              repoLink="https://github.com/Jhondev-404/Gerenciador-de-Tarefas"
            />
          
               
            <ProjectCard
              title=" Meu Diário de Projetos"
              description="Aplicação web com autenticação onde usuários podem registrar, editar e organizar seus próprios projetos pessoais. Cada usuário possui um espaço privado, com segurança e design moderno. O app oferece funcionalidades completas de CRUD (criar, ler, atualizar, deletar), filtro de busca e interface responsiva."
              tags={["JavaScript", "HTML", "CSS","React"]}
              imageUrl="src/components/portfolio/img/novatumb.png"
              liveLink="https://jhondev-404.github.io/meu-diario-de-projetos/#/login"
              repoLink="https://github.com/Jhondev-404/meu-diario-de-projetos"

            />

            <ProjectCard
              title="Implementação De Uma API"
              description="Site de busca de personagens do universo Rick and Morty, integrando uma API pública para exibir informações em tempo real com filtros interativos."
              tags={['HTML', 'CSS','JavaScript']}
              imageUrl="src/components/portfolio/img/teste1.png"
              liveLink=" https://jhondev-404.github.io/Rick-and-Morty-search/"
              repoLink="https://github.com/Jhondev-404/Rick-and-Morty-search"
            />


              <ProjectCard
                title="Projeto em Construção 🚧"
                description="Um novo projeto está em desenvolvimento. Em breve estará disponível aqui com todos os detalhes e funcionalidades."
                tags={["Em breve"]}
                imageUrl="src/components/portfolio/img/Aviso de construção em progresso.png" 
                liveLink="#"
                repoLink="#"
              />




          </div>
          <p className="mt-8 text-center text-gray-400">
            Mais projetos e contribuições podem ser encontrados no meu <a href="https://github.com/Jhondev-404" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">GitHub</a>.
          </p>
        </SectionWrapper>
      );
    };
    
    export default ProjetosSection;
    