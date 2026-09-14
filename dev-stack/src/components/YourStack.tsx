import type { Technology } from '../types';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-24 border border-gray-100">
      <h2 className="text-2xl font-bold text-dark-btn mb-2">
        Your Stack
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {stack.length} {stack.length === 1 ? 'technology selected' : 'technologies selected'} yet
      </p>

      {stack.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-gray-400">∅</span>
          </div>
          <p className="text-gray-600 font-medium mb-2">Your stack is empty</p>
          <p className="text-gray-500 text-sm">
            Pick one technology per category to build your ideal stack
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-between border border-gray-200"
              >
                <div className="flex items-center gap-3 flex-1">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-red-500 hover:text-red-700 transition ml-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={onRemoveAll}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-semibold text-sm"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}