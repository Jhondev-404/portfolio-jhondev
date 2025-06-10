import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, imageUrl, liveLink, repoLink }) => (
  <motion.div
    whileHover={{
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)"
    }}
    transition={{ duration: 0.3 }}
  >
    <Card className="bg-gray-800 border-gray-700 overflow-hidden shadow-xl h-full flex flex-col">
      <div className="relative h-56 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400 pt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-3 p-4 bg-gray-800/50">
        {liveLink && liveLink !== "#" && (
          <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Ver Online</a>
          </Button>
        )}
        {repoLink && repoLink !== "#" && (
          <Button variant="ghost" asChild className="text-white hover:bg-gray-700">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Código Fonte
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  </motion.div>
);

export default ProjectCard;
