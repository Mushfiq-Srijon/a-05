import { X } from 'lucide-react';
import type { Technology } from '../types';

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: () => void;
  onRemove?: () => void;
  isInStack?: boolean;
}

const getBadgeColor = (color?: string) => {
  const colors: Record<string, string> = {
    'orange': 'bg-orange-100 text-orange-700',
    'blue': 'bg-blue-100 text-blue-700',
    'teal': 'bg-teal-100 text-teal-700',
    'green': 'bg-green-100 text-green-700',
    'red': 'bg-red-100 text-red-700',
  };
  return colors[color || 'blue'] || 'bg-gray-100 text-gray-700';
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner-Friendly':
      return 'bg-green-50 text-green-700';
    case 'Intermediate':
      return 'bg-yellow-50 text-yellow-700';
    case 'Advanced':
      return 'bg-red-50 text-red-700';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

export default function TechnologyCard({
  tech,
  isAdded,
  onAdd,
  onRemove,
  isInStack = false,
}: TechnologyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full border border-gray-100">
      {/* Top: Badge and Remove Button */}
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${getBadgeColor(tech.badgeColor)}`}>
          {tech.badge}
        </span>
        {isInStack && onRemove && (
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Icon */}
      <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-4" />

      {/* Name */}
      <h3 className="text-xl font-bold text-dark-btn mb-2">{tech.name}</h3>

      {/* Category Chip */}
      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
        {tech.category}
      </span>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {tech.description}
      </p>

      {/* Bottom: Difficulty and Rating */}
      <div className="flex justify-between items-center mb-6">
        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getDifficultyColor(tech.difficulty)}`}>
          {tech.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="font-semibold text-gray-900">{tech.rating}</span>
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg font-semibold transition ${
          isAdded
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-dark-btn text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}