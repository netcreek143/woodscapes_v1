import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Commercial Construction */}
      <div className="grid md:grid-cols-2">
        <div className="h-[500px] md:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop" 
            alt="Commercial Construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 leading-tight">
            Commercial <br /> Construction
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-md">
            End-to-end commercial builds with strict cost control, regulatory compliance, and milestone-based delivery.
          </p>
          <ul className="space-y-3 mb-10">
            {['RCC and shell works', 'BOQ management', 'MEP coordination', 'Approvals'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                <span className="text-primary bg-red-50 p-0.5 rounded-full"><Check size={14} /></span>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-black text-white pl-6 pr-2 py-3 flex items-center gap-6 hover:bg-gray-800 transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Request Construction Estimate</span>
              <span className="bg-primary text-white w-8 h-8 flex items-center justify-center">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Commercial Interiors - Layout Flipped (Image Left, Content Right) */}
      <div className="grid md:grid-cols-2">
        <div className="h-[500px] md:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Commercial Interiors" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 leading-tight">
            Commercial <br /> Interiors
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-md">
            Turnkey office, retail, and hospitality interiors designed to perform, impress, and open on schedule.
          </p>
          <ul className="space-y-3 mb-10">
            {['Fit-outs and joinery', 'FF&E procurement', 'Brand compliance', 'Fast delivery'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                <span className="text-primary bg-red-50 p-0.5 rounded-full"><Check size={14} /></span>
                {item}
              </li>
            ))}
          </ul>
          <div>
             <button className="bg-black text-white pl-6 pr-2 py-3 flex items-center gap-6 hover:bg-gray-800 transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Request Interiors Estimate</span>
              <span className="bg-primary text-white w-8 h-8 flex items-center justify-center">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;