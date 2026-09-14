import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesGrid from './components/TechnologiesGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import type { Technology } from './types';

export default function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    if (selectedStack.some((t) => t.id === tech.id)) {
      toast.warning(`⚠️ ${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`✓ ${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  const handleRemoveFromStack = (id: string) => {
    const tech = selectedStack.find((t) => t.id === id);
    setSelectedStack(selectedStack.filter((t) => t.id !== id));
    if (tech) {
      toast.info(`✕ ${tech.name} removed from your stack`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('❌ All technologies removed from your stack', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Main Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-btn mb-2">
              Explore the{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-gray-600">
              Pick one technology per category to build your ideal stack
            </p>
          </div>

          {/* Grid + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Technology Grid (2 columns on desktop) */}
            <div className="lg:col-span-2">
              <TechnologiesGrid selectedStack={selectedStack} onAdd={handleAddToStack} />
            </div>

            {/* Right: Your Stack Sidebar */}
            <div>
              <YourStack
                stack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}