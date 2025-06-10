import React from 'react';
    import { Code, Database, Wind, Settings, Figma, GitMerge, Users, Brain, Server, Cloud, Shield, Smartphone, MonitorPlay, Palette, Type, FileJson, FileCode, Coffee, Zap, Rss } from 'lucide-react';

    const iconMap = {
      DEFAULT: <Code className="h-5 w-5" />,
      JAVASCRIPT: <FileCode className="h-5 w-5 text-yellow-400" />,
      PYTHON: <FileCode className="h-5 w-5 text-blue-400" />,
      JAVA: <Coffee className="h-5 w-5 text-orange-400" />,
      HTML5: <FileCode className="h-5 w-5 text-orange-600" />,
      CSS3: <Palette className="h-5 w-5 text-blue-500" />,
      REACT: <Zap className="h-5 w-5 text-cyan-400" />,
      TAILWINDCSS: <Wind className="h-5 w-5 text-teal-400" />,
      NODEJS: <Server className="h-5 w-5 text-green-500" />,
      SQL: <Database className="h-5 w-5 text-indigo-400" />,
      MONGODB: <Database className="h-5 w-5 text-green-400" />,
      GIT: <GitMerge className="h-5 w-5 text-red-500" />,
      GITHUB: <GitMerge className="h-5 w-5" />,
      VSCODE: <MonitorPlay className="h-5 w-5 text-blue-500" />,
      FIGMA: <Figma className="h-5 w-5" />,
      SCRUM: <Users className="h-5 w-5 text-purple-400" />,
    };
    
    const SkillIcon = ({ name }) => {
      const normalizedName = name.toUpperCase().replace(/\s+/g, '').replace(/[().]/g, '');
      const IconComponent = iconMap[normalizedName] || iconMap.DEFAULT;
      return React.cloneElement(IconComponent, { className: `${IconComponent.props.className || ''} mr-2 flex-shrink-0` });
    };

    export default SkillIcon;