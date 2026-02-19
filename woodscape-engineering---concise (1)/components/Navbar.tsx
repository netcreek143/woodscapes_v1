import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
             <span className="text-white font-bold text-xl">W</span>
          </div>
          <div className="text-white leading-tight">
            <h1 className="font-bold text-lg uppercase tracking-wide">Woodscape</h1>
            <p className="text-[10px] text-gray-300 tracking-wider uppercase">Engineering</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#" className="text-primary hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Projects</a>
          <a href="#" className="hover:text-primary transition-colors">Industries</a>
          <a href="#" className="hover:text-primary transition-colors">Why Woodscape</a>
          <a href="#" className="hover:text-primary transition-colors">Case Studies</a>
          
          <button className="bg-transparent border border-white/40 px-6 py-2.5 hover:bg-white hover:text-black transition-all flex items-center gap-2 group">
            <span className="font-medium tracking-wide">Request Estimate</span>
            <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 p-6 flex flex-col gap-4 text-white">
          <a href="#" className="py-2 border-b border-gray-800 text-primary">Home</a>
          <a href="#" className="py-2 border-b border-gray-800">Services</a>
          <a href="#" className="py-2 border-b border-gray-800">Projects</a>
          <a href="#" className="py-2 border-b border-gray-800">Industries</a>
          <button className="bg-primary text-white py-3 mt-2 rounded w-full font-bold">
            Request Estimate
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;