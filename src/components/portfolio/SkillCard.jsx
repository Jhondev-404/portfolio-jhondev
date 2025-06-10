import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
    import SkillIcon from '@/components/portfolio/SkillIcon';

    const SkillCard = ({ title, skills, icon }) => (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)" }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-gray-800 border-gray-700 shadow-lg h-full">
          <CardHeader className="flex flex-row items-center space-x-3 pb-4">
            {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
            <CardTitle className="text-xl text-white">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-300 flex items-center text-sm">
                  <SkillIcon name={skill.name} />
                  <span>{skill.name} {skill.level && <span className="text-xs text-gray-500 ml-1">({skill.level})</span>}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    );

    export default SkillCard;