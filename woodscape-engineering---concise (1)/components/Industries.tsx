import React from 'react';
import { Briefcase, ShoppingCart, Coffee, Hotel, HeartPulse, GraduationCap } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { icon: <Briefcase size={32} />, title: "Corporate Offices", desc: "Optimizing office environments for productivity and collaboration." },
    { icon: <ShoppingCart size={32} />, title: "Retail", desc: "Enhancing customer engagement and seamless shopping experiences." },
    { icon: <Coffee size={32} />, title: "Restaurants", desc: "Improving operational efficiency to elevate dining satisfaction." },
    { icon: <Hotel size={32} />, title: "Hospitality", desc: "Creating welcoming spaces that exceed guest expectations." },
    { icon: <HeartPulse size={32} />, title: "Healthcare", desc: "Supporting patient care with innovative facility solutions." },
    { icon: <GraduationCap size={32} />, title: "Institutions", desc: "Delivering tailored services for educational and public sectors." },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Industries Served</h2>
          <p className="text-gray-500 max-w-2xl text-sm">We serve a wide range of industries with solutions designed to meet their unique operational needs. Our focus is on efficiency, experience, and long-term value across every sector.</p>
        </div>
        
        <div className="container mx-auto px-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-gray-100 divide-gray-100">
            {industries.slice(0, 3).map((ind, i) => (
              <div key={i} className="p-8 md:p-12 hover:bg-gray-50 transition-colors group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 stroke-[1.5]">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-gray-100 divide-gray-100">
            {industries.slice(3, 6).map((ind, i) => (
              <div key={i} className="p-8 md:p-12 hover:bg-gray-50 transition-colors group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 stroke-[1.5]">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Full Width Image Strip */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Industries;