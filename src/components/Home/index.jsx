import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Workflow from './Workflow';
import Pricing from './Pricing';
import Testimonial from './Testimonial';

const index = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Pricing />
        <Testimonial />
      </div>
    </div>
  );
};

export default index;
