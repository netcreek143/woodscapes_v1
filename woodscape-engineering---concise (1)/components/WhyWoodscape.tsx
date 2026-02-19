import React from 'react';
import { Ruler, DollarSign, UserCheck, ShieldCheck } from 'lucide-react';

const WhyWoodscape: React.FC = () => {
  const features = [
    { 
      icon: <Ruler size={40} className="text-primary stroke-1" />, 
      title: "Engineering-First Planning", 
      desc: "Every project begins with technical accuracy and detailed execution planning."
    },
    { 
      icon: <DollarSign size={40} className="text-primary stroke-1" />, 
      title: "Transparent Costing", 
      desc: "Clear pricing with no hidden charges, ensuring complete financial clarity."
    },
    { 
      icon: <UserCheck size={40} className="text-primary stroke-1" />, 
      title: "Single PM Ownership", 
      desc: "One dedicated project manager from start to finish for seamless coordination."
    },
     { 
      icon: <ShieldCheck size={40} className="text-primary stroke-1" />, 
      title: "Safety Compliance", 
      desc: "Strict adherence to HSE protocols ensures zero safety incidents on site."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Why Woodscape</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          Our approach combines engineering precision, transparent processes, and long-term partnership to deliver dependable project outcomes.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center border border-red-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default WhyWoodscape;