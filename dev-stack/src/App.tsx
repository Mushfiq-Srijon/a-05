import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TechnologiesGrid from './components/TechnologiesGrid';
import YourStack from './components/YourStack';
import type { Technology } from './types';
import './App.css';

function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setSelectedStack((currentStack) => [
      ...currentStack.filter((item) => item.category !== technology.category),
      technology,
    ]);
  };

  const removeFromStack = (id: string) => {
    setSelectedStack((currentStack) => currentStack.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-6 py-16" id="technologies">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-dark-btn">Explore Technologies</h2>
            <p className="text-gray-600 mt-2">Choose one technology from each category for your stack.</p>
          </div>
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <TechnologiesGrid selectedStack={selectedStack} onAdd={addToStack} />
            <YourStack
              stack={selectedStack}
              onRemove={removeFromStack}
              onRemoveAll={() => setSelectedStack([])}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
