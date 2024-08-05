import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-8 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-medium text-center">
        AceDot Build Tools <br />
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className=" text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-base mb:text-sm">
        이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던
        위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니,
        위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과
        가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이
        아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로
        별빛이 봅니다.
      </p>

      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={` font-customFontEn border border-neutral-500 py-1 px-4 rounded-lg ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/2">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/2">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
