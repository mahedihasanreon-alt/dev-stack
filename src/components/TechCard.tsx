import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="tech-card bg-white rounded-2xl p-5 border border-gray-200 flex flex-col">
     
      <div className="flex justify-between items-start">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://via.placeholder.com/40?text=?")
          }
        />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.badge}
        </span>
      </div>

      
      <h3 className="font-bold text-lg mt-4 text-gray-900">{tech.name}</h3>

      
      <p className="text-sm text-gray-500 mt-2 flex-grow leading-relaxed">
        {tech.description}
      </p>

      
      <div className="flex items-center justify-between text-xs mt-4 mb-4">
        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-gray-700 font-semibold">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full text-sm font-semibold py-2.5 rounded-lg transition ${
          isAdded
            ? "bg-pink-50 text-pink-500 cursor-not-allowed border border-pink-200"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}