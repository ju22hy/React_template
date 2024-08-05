import React from 'react';
import { testimonials } from '../../constants/data';

const Testimonial = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-tight font-customFontEn font-normal">
        What People are saying
      </h2>

      <div className="flex flex-wrap pt-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="p-4 w-full lg:w-1/3 sm:w-1/2">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-8 py-6">
              <p className="text-start text-base font-customFontKr mb-6 font-thin tracking-wide text-neutral-100">
                {testimonial.text}
              </p>
              <div className="flex ">
                <div className="w-13 h-13 mr-5 border border-neutral-100 rounded-full flex justify-center items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                </div>
                <div>
                  <h5 className="font-customFontEn text-neutral-300 font-light tracking-tight opacity-90">
                    {testimonial.user}
                  </h5>
                  <span className="font-customFontEn text-neutral-300 font-light tracking-tighter text-sm opacity-35 italic">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
