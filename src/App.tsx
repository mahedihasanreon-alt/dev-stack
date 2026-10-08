import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import type { Technology } from "./types";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to load");
        const data: Technology[] = await res.json();
        setTechnologies(data);
      } catch (err) {
        console.error(err);
        toast.error("Could not load technologies.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("All technologies removed.");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500 text-sm font-medium">
            Loading technologies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <MainLayout
        technologies={technologies}
        stack={stack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
}