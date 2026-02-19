import React from 'react';
import WhyWoodscape from './components/WhyWoodscape';
import FounderMessage from './components/FounderMessage';
import ClientStories from './components/ClientStories';
import EstimateForm from './components/EstimateForm';
import FAQ from './components/FAQ';
import CTAFooter from './components/CTAFooter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <WhyWoodscape />
      <FounderMessage />
      <ClientStories />
      <EstimateForm />
      <FAQ />
      <CTAFooter />
      <Footer />
    </div>
  );
};

export default App;