import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "Delivery Timelines", answer: "Delivery timelines are defined during the planning stage based on project scope and complexity. Fixed milestones are shared upfront to ensure predictable and on-time delivery." },
    { question: "Pricing", answer: "We offer transparent pricing models tailored to your project needs, with detailed breakdowns provided before any commitment." },
    { question: "Approvals", answer: "We handle all necessary regulatory approvals and permits as part of our comprehensive service package." },
    { question: "Warranty", answer: "All our projects come with a standard warranty period covering workmanship and materials for your peace of mind." },
    { question: "Safety", answer: "We maintain strict HSE compliance on all sites with zero tolerance for safety violations." },
    { question: "Payment Schedule", answer: "Payment schedules are linked to project milestones, ensuring you only pay for completed and verified work." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 mb-16 text-sm">Find answers to common questions about our process, timelines, pricing, and project execution.</p>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-sm">
              <button 
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className={`w-full text-left p-6 flex justify-between items-center transition-colors ${openIndex === index ? 'bg-white' : 'hover:bg-gray-50'}`}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>{faq.question}</span>
                {openIndex === index ? 
                  <ArrowDownLeft className="text-primary" /> : 
                  <ArrowUpRight className="text-gray-400" />
                }
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-transparent">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;