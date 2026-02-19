import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const EstimateForm: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Quick Estimate Form</h2>
        <p className="text-gray-400 text-sm mb-12">Request an initial estimate for your upcoming project. Designed to give you clarity on scope and budget. No commitments, just informed next steps.</p>
        
        <form className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
             <input type="text" placeholder="Name" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
             <input type="text" placeholder="Phone Number" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
             <input type="text" placeholder="Company" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
             <input type="email" placeholder="Email" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
             <select className="bg-[#1a1a1a] text-gray-400 border border-gray-800 p-4 w-full focus:border-primary outline-none appearance-none">
               <option>Service</option>
               <option>Construction</option>
               <option>Interiors</option>
             </select>
             <input type="text" placeholder="Sq.ft" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
             <select className="bg-[#1a1a1a] text-gray-400 border border-gray-800 p-4 w-full focus:border-primary outline-none appearance-none">
               <option>Budget</option>
               <option>$10k - $50k</option>
               <option>$50k - $100k</option>
               <option>$100k+</option>
             </select>
             <input type="text" placeholder="Project Location" className="bg-[#1a1a1a] text-white border border-gray-800 p-4 w-full focus:border-primary outline-none" />
          </div>
          
          <div className="flex justify-end mt-8">
            <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-12 transition-colors flex items-center gap-2">
              Request Estimate
              <ArrowUpRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EstimateForm;