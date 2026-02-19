import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Commercial Building" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6 pt-20">
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
            Commercial <br />
            Construction and <br />
            Interiors
          </h1>
          {/* Removed red border line as requested */}
          <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
            From shell works to turnkey interiors, we build designed-for-performance commercial spaces with engineering discipline and predictable timelines.
          </p>
          <div className="pt-8">
            <button className="bg-white text-black pl-6 pr-2 py-2 flex items-center gap-6 hover:bg-gray-100 transition-colors">
              <span className="font-bold text-sm uppercase tracking-wider">View Projects</span>
              <span className="bg-primary text-white w-8 h-8 flex items-center justify-center">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Quote Form */}
        <div className="hidden md:block bg-black/50 backdrop-blur-md p-10 rounded-none border border-white/10 max-w-md ml-auto shadow-2xl">
          <h3 className="text-white text-3xl font-serif mb-8">Get a quote</h3>
          <form className="space-y-5">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary text-black placeholder-gray-500"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Mobile Number" 
                className="w-full bg-white px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary text-black placeholder-gray-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email (Optional)" 
                className="w-full bg-white px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary text-black placeholder-gray-500"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                rows={3}
                className="w-full bg-white px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary resize-none text-black placeholder-gray-500"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 hover:bg-red-700 transition-colors flex justify-between px-6 items-center mt-2">
              <span>Submit</span>
              <ArrowUpRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;