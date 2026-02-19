import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const ClientStories: React.FC = () => {
  const stories = [
    { name: "John Doe", role: "CEO, TechFirm", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Sarah Smith", role: "Manager, RetailCo", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Michael Brown", role: "Director, HotelGrp", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Client Stories</h2>
        <p className="text-gray-500 text-sm">Real experiences from clients who trusted Woodscape to deliver with precision.</p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="relative aspect-[3/4] group overflow-hidden rounded-sm cursor-pointer">
            <img 
              src={story.img} 
              alt={story.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
               <h4 className="text-xl font-bold">{story.name}</h4>
               <p className="text-sm text-gray-300">{story.role}</p>
            </div>

            <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white backdrop-blur-sm">
              <VolumeX size={16} />
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientStories;