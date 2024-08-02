import React from 'react';
import { features } from '../../constants/data';

const FeaturesSection = () => {
  return (
    <div className="mt-32 border-b border-neutral-700">
      <div className="">
        <span className="bg-neutral-800 text-indigo-500 rounded-full h-8 text font-medium px-4 py-1 uppercase block w-fit m-auto mb-20">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-customFontEn text-center">
          Easily Build{' '}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div>
          {features.map((item, idx) => (
            <div key={idx}>{item.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
