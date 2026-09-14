import technologiesData from '../data/technologies.json';
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
  const technologies = technologiesData as Technology[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={selectedStack.some((t) => t.id === tech.id)}
          onAdd={() => onAdd(tech)}
        />
      ))}
    </div>
  );
}