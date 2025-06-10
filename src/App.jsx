import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/portfolio/Header';
    import Footer from '@/components/portfolio/Footer';
    import SobreMimSection from '@/components/portfolio/SobreMimSection';
    import HabilidadesSection from '@/components/portfolio/HabilidadesSection';
    import ProjetosSection from '@/components/portfolio/ProjetosSection';
    import CuriosidadesSection from '@/components/portfolio/CuriosidadesSection';
    import ContatoSection from '@/components/portfolio/ContatoSection';
    import { User, Code, Briefcase, Lightbulb, Mail } from 'lucide-react';

    const App = () => {
      const sections = [
        { id: 'sobre', title: 'Sobre Mim', icon: <User className="h-6 w-6" /> },
        { id: 'habilidades', title: 'Habilidades Técnicas', icon: <Code className="h-6 w-6" /> },
        { id: 'projetos', title: 'Projetos e Experiências', icon: <Briefcase className="h-6 w-6" /> },
        { id: 'curiosidades', title: 'Curiosidades', icon: <Lightbulb className="h-6 w-6" /> },
        { id: 'contato', title: 'Contato', icon: <Mail className="h-6 w-6" /> },
      ];

      const [activeSection, setActiveSection] = React.useState('sobre');

      function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(id);
        }
      }
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col font-sans">
          <Header sections={sections.map(s => ({id: s.id, title: s.title}))} activeSection={activeSection} scrollToSection={scrollToSection} />
          <main className="container mx-auto px-6 py-12 flex-grow">
            <SobreMimSection scrollToSection={scrollToSection} />
            <HabilidadesSection />
            <ProjetosSection />
            <CuriosidadesSection />
            <ContatoSection />
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    };

    export default App;