import React from 'react';
import { Target, Lightbulb, CheckCircle2, ArrowUpRight } from 'lucide-react';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Featured Case Study</h2>
          <p className="text-gray-500 text-sm">A closer look at how our engineering-led approach transformed a client's space.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 border-b border-gray-100 pb-12">
          <div className="space-y-4">
            <Target className="text-primary w-10 h-10 stroke-1" />
            <h3 className="font-bold text-xl">Challenge</h3>
            <p className="text-sm text-gray-500 leading-relaxed">The client required a fast-track interior solution while maintaining strict quality, safety, and budget constraints across multiple teams.</p>
          </div>
          <div className="space-y-4">
            <Lightbulb className="text-primary w-10 h-10 stroke-1" />
            <h3 className="font-bold text-xl">Solution</h3>
            <p className="text-sm text-gray-500 leading-relaxed">We implemented engineering-first planning, transparent costing, and a single project manager to ensure smooth coordination.</p>
          </div>
          <div className="space-y-4">
            <CheckCircle2 className="text-primary w-10 h-10 stroke-1" />
            <h3 className="font-bold text-xl">Outcome</h3>
            <p className="text-sm text-gray-500 leading-relaxed">The project was delivered on time with zero safety incidents and exceeded client expectations in both quality and functionality.</p>
          </div>
        </div>

        {/* Before / After Images */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="relative group overflow-hidden">
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase z-10">Before</span>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Before Construction" 
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
            />
          </div>
          <div className="relative group overflow-hidden">
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase z-10">After</span>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
              alt="After Construction" 
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="bg-gray-900 text-white p-12 md:p-16 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
          {/* Decorative faint huge quote mark */}
          <div className="absolute top-0 left-0 text-gray-800 text-[200px] font-serif leading-none opacity-20 select-none">“</div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif text-red-200 mb-6">Client Experience</h3>
            <p className="text-gray-300 leading-relaxed italic text-lg mb-6">
              "Woodscape delivered exactly what they promised. Communication was clear and consistent throughout the project. Execution was disciplined, structured, and well managed at every stage."
            </p>
            <div>
              <p className="font-bold text-white">Akshay - LMN Tech Solutions</p>
              <div className="flex gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-start md:items-end md:text-right">
             <h3 className="text-3xl font-serif mb-4">Request a <br/>Similar Estimate</h3>
             <p className="text-gray-400 text-sm mb-6 max-w-xs">Planning a project? Let's discuss your requirements and deliver a solution tailored to your space.</p>
             <button className="bg-white text-black px-6 py-3 font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
                Get an Estimate
                <span className="bg-primary text-white p-1">
                  <ArrowUpRight size={14} />
                </span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;