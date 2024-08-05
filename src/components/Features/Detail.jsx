import React from 'react';
import Slider from 'react-slick';
import './slider_theme.css';
import './slider.css';
import { features } from '../../constants/data';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-customFontEn text-center mt-14">
          Easily Build{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>

      <div className="slider-container mt-16">
        <Slider {...settings}>
          {features.map((item, idx) => (
            <div key={idx}>
              <div className="gap-8 p-8 border border-neutral-500 rounded-2xl bg-neutral-900">
                <div className="flex justify-center items-center">
                  <div className="relative w-1/2 h-[300px] overflow-hidden rounded-lg shadow-black shadow-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-1/2 ">
                    <div className="flex">
                      <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-indigo-700 justify-center items-center rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="mt-1 pb-4 text-xl font-customFontKr">
                          {item.text}
                        </h5>
                        <p className="text-base text-neutral-500 font-customFontEn">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;
