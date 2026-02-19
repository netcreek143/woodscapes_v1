import React from 'react';

const DeliveryProcess: React.FC = () => {
  const steps = [
    { title: "Discovery and site study in 48 hours", active: true },
    { title: "BOQ and costing in 5 days", active: false },
    { title: "Mobilisation and approvals", active: false },
    { title: "Build with weekly dashboards", active: false },
    { title: "Handover and warranty", active: false }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
           <h4 className="text-primary text-sm font-bold uppercase mb-2">Streamlined</h4>
           <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Delivery Process</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] md:h-[500px] w-full bg-gray-200">
             <img 
               src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2127&auto=format&fit=crop" 
               alt="Process" 
               className="w-full h-full object-cover" 
             />
          </div>

          <div className="space-y-4">
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Our delivery process ensures every project moves smoothly from start to finish, beginning with rapid discovery and detailed costing, followed by efficient mobilisation, transparent build tracking, and concluding with timely handover backed by warranty support.
            </p>

            <div className="space-y-2">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-5 border ${step.active ? 'border-none shadow-lg bg-white z-10 relative' : 'border-gray-100 bg-gray-50 text-gray-500'}`}
                >
                  <span className={`font-medium ${step.active ? 'text-black font-bold' : ''}`}>{step.title}</span>
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold ${step.active ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">Typical fit-outs delivered in 8 to 14 weeks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;