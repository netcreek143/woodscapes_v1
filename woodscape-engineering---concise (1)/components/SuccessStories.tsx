import React from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const projects = [
    {
      title: 'ABC Infrastructure',
      industry: 'Real Estate',
      location: 'Central Texas',
      timeline: 'Jan 2024 - Jun 2024',
      result: 'Delivered 20% cost savings through process optimization.',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'YB Retail Group',
      industry: 'Retail',
      location: 'Austin, TX',
      timeline: 'Mar 2024 - Aug 2024',
      result: 'Improved customer engagement by 35%.',
      img: 'https://images.unsplash.com/photo-1582037928769-181f242afcf8?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'LMN Tech Solutions',
      industry: 'Technology',
      location: 'Dallas, TX',
      timeline: 'Feb 2024 - May 2024',
      result: 'Reduced system downtime by 50%.',
      img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h4 className="text-primary text-sm font-bold uppercase mb-2">Project Highlights</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We work with clients across industries to deliver high-quality construction and interior solutions that meet their specific operational needs and brand standards.
            </p>
          </div>
          <div className="hidden md:flex gap-2 mb-2">
            <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="h-72 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="space-y-3 text-sm text-gray-600 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Industry :</span>
                    <span>{project.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Location :</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Timeline :</span>
                    <span>{project.timeline}</span>
                  </div>
                </div>
                <div className="border-l-2 border-green-500 pl-4 mb-8">
                  <p className="text-xs font-bold text-gray-900 leading-relaxed">
                    {project.result}
                  </p>
                </div>
                <button className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-4 hover:bg-primary transition-colors">
                  View Case Study
                  <span className="bg-primary group-hover:bg-white group-hover:text-primary text-white p-0.5 transition-colors">
                    <ArrowUpRight size={12} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;