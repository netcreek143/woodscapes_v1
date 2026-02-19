import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f19] text-gray-400 py-16 text-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="leading-tight">
                <h1 className="font-bold text-white text-base uppercase tracking-wide">Woodscape</h1>
            </div>
          </div>
          <div className="flex gap-4">
             <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-primary hover:text-white transition-colors"><Facebook size={16} /></a>
             <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-primary hover:text-white transition-colors"><Twitter size={16} /></a>
             <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-primary hover:text-white transition-colors"><Linkedin size={16} /></a>
             <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-primary hover:text-white transition-colors"><Instagram size={16} /></a>
          </div>
          <p className="text-xs leading-relaxed max-w-xs text-gray-500">
            Engineering-led interior and fit-out solutions designed for performance, safety, and long-term value. We partner with businesses to deliver spaces that are efficient, compliant, and built to last.
          </p>
        </div>

        {/* Quick Links */}
        <div>
           <h4 className="text-white font-bold mb-6">Quick Links</h4>
           <ul className="space-y-3">
             <li><a href="#" className="hover:text-primary transition-colors">Commercial Construction</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Commercial Interiors</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Delivery Process</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Industries Served</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Why Woodscape</a></li>
           </ul>
        </div>

         {/* More Links */}
        <div>
           <h4 className="text-white font-bold mb-6 invisible md:visible">More Links</h4>
           <ul className="space-y-3">
             <li><a href="#" className="hover:text-primary transition-colors">Case Study</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Founder Message</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Client Stories</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Estimation Form</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Process Submission</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
           </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Get in Touch</h4>
          <div className="space-y-4">
             <div>
                <span className="block text-gray-500 text-xs">Email :</span>
                <a href="mailto:admin@mekark.com" className="text-white hover:text-primary">admin@woodscape.com</a>
             </div>
             <div>
                <span className="block text-gray-500 text-xs">Phone :</span>
                <a href="tel:+919790924754" className="text-white hover:text-primary">+91 97909 24754</a>
             </div>
             <div>
                <span className="block text-gray-500 text-xs">Location:</span>
                <span className="text-white">15,62nd street, Ashok Nagar,<br/>Chennai-600083</span>
             </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
         <p>© 2024 Woodscape. All rights reserved.</p>
         <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;