import technologiesData from '../data/technologies.json';
import { useEffect, useState } from 'react';
import type { Technology } from '../types';
import TechnologyCard from './TechnologyCard';

interface TechnologiesGridProps {
  selectedStack: Technology[];
  onAdd: (tech: Technology) => void;
}

export default function TechnologiesGrid({
  selectedStack,
  onAdd,
}: TechnologiesGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTechnologies(technologiesData as Technology[]);
      setLoading(false);
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-accent" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={selectedStack.some((item) => item.id === tech.id)}
          onAdd={() => onAdd(tech)}
        />
      ))}
    </div>
  );
}