import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const CTAFooter: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white text-center relative overflow-hidden">
        {/* Abstract overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-50 skew-x-12 scale-150"></div>
        
        <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Get an Expert Now!</h2>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-sm">Transform your ideas into reality with expert guidance, precise execution, and personalized solutions tailored to your space. From planning to handover, we ensure clarity, quality, and results you can trust.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-black text-white px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors border border-white/20">
                    <Phone size={16} /> Connect to an Expert <span className="text-primary ml-1">↗</span>
                </button>
                <button className="bg-black text-white px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors border border-white/20">
                    <MessageCircle size={16} /> Reach us via Whatsapp <span className="text-primary ml-1">↗</span>
                </button>
                <button className="bg-black text-white px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors border border-white/20">
                    <Mail size={16} /> Get an estimate <span className="text-primary ml-1">↗</span>
                </button>
            </div>
        </div>
    </section>
  );
};

export default CTAFooter;