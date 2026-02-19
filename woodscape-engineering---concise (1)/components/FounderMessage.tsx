import React from 'react';
import { Play } from 'lucide-react';

const FounderMessage: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] bg-black overflow-hidden group">
      <img 
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
        alt="Founder background" 
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent opacity-80 mb-4 tracking-tight">
          FOUNDER
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-widest uppercase">
          MESSAGE
        </h3>
        
        <button className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-pink-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-8">
           <Play fill="white" className="text-white ml-1" size={32} />
        </button>

        <p className="text-white text-sm max-w-md leading-relaxed font-medium">
          A message from our founder on vision, values, and the commitment that drives every Woodscape project forward.
        </p>
        <p className="text-primary text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">
          Founder's Perspective
        </p>
      </div>
    </section>
  );
};

export default FounderMessage;