import { FiX } from "react-icons/fi";
import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function Sidebar({ stack, onRemove, onRemoveAll }: SidebarProps) {
  return (
    <aside className="lg:w-80 shrink-0">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-24">
       
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
          <p className="text-xs text-gray-500 mt-1">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>

        
        {stack.length === 0 ? (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 px-4 text-center">
            <p className="text-sm text-gray-400">Your stack is empty</p>
            <p className="text-xs text-gray-400 mt-1">
              Add technologies from the list
            </p>
          </div>
        ) : (
          <>
           
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto pr-1">
              {stack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7 object-contain"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/28?text=?")
                      }
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {tech.name}
                      </p>
                      <p className="text-xs text-gray-500">{tech.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(tech.id)}
                    className="text-gray-400 hover:text-red-500 transition p-1"
                    aria-label={`Remove ${tech.name}`}
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>

           
            <button
              onClick={onRemoveAll}
              className="w-full mt-4 text-sm font-semibold text-pink-500 border border-pink-200 py-2 rounded-lg hover:bg-pink-50 transition"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}