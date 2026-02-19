import React from 'react';
import { Settings, Handshake, Timer, ShieldCheck } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { 
      icon: <Settings className="text-primary w-12 h-12 mb-8 stroke-[1]" />, 
      value: "50+", 
      label: "Years",
      isHighlight: true
    },
    { 
      icon: <Handshake className="text-primary w-12 h-12 mb-8 stroke-[1]" />, 
      value: "100+", 
      label: "Projects",
      isHighlight: false
    },
    { 
      icon: <Timer className="text-primary w-12 h-12 mb-8 stroke-[1]" />, 
      value: "99%", 
      label: "On-Time Delivery",
      isHighlight: false
    },
    { 
      icon: <ShieldCheck className="text-primary w-12 h-12 mb-8 stroke-[1]" />, 
      value: "HSE", 
      label: "Compliant",
      isHighlight: false
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative h-72 w-full">
              {/* Border Background Layer */}
              <div 
                className={`absolute inset-0 ${stat.isHighlight ? 'bg-gradient-to-b from-red-400 via-red-200 to-transparent' : 'bg-gray-200'}`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)'
                }}
              ></div>
              
              {/* White Content Layer */}
              <div 
                className="absolute inset-[1px] bg-white flex flex-col justify-center px-8"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)'
                }}
              >
                 <div className="mb-4">
                   {stat.icon}
                 </div>
                 <h4 className="text-6xl font-medium text-black mb-2 tracking-tight">{stat.value}</h4>
                 <p className="text-black text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;