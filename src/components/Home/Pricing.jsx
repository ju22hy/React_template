import React from 'react';
import { pricingOptions, subscribeLinks } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-tight font-customFontEn font-normal">
        Pricing
      </h2>

      <div className="flex flex-wrap pt-6">
        {pricingOptions.map((option, idx) => (
          <div key={idx} className="p-2 w-full sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-lg">
              <p className="text-4xl font-customFontEn mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-r from-rose-400 to-rose-500 text-transparent bg-clip-text text-base mb-4 ml-2 tracking-tighter font-semibold opacity-70">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight font-customFontEn">
                  /Month
                </span>
              </p>
              <ul>
                {option.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="mt-8 flex items-center gap-2 font-customFontEn "
                  >
                    <CheckCircle2 className="text-indigo-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={option.link}
                className="flex justify-center items-center w-full py-2 border border-indigo-700 rounded-lg mt-20 font-customFontEn hover:bg-indigo-700 hover:text-white transition duration-300"
              >
                Subsribe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
