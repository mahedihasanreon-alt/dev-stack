import TechList from "./TechList";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import type { Technology } from "../types";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function MainLayout({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: MainLayoutProps) {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Explore the Technologies
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <TechList
              technologies={technologies}
              stack={stack}
              onAdd={onAdd}
            />
          </div>
          <Sidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}