"use client"
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export const HeroSection = () => {
  return (
    <section className="px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:order-1 order-2 place-self-center text-center sm:text-left lg:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {""}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Parakh',
                1000,
                'Fullstack Developer',
                1000,
                'Mobile Developer',
                1000,
                'Freelancer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione mollitia recusandae quam adipisci ullam vel rem, ipsam facere suscipit architecto autem harum possimus iste ad nulla perferendis? Porro, a.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-3 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 lg:mt-0">
              <span className='black bg-[#121212] hover:bg-slate-800 rounded-full px-8 py-3'>Download CV</span>
            </button>
          </div>
        </div>
        <div className="lg:order-2 order-1 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover"
              fill
              style={{
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
