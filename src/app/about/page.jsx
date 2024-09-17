import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mb-10 flex flex-col lg:flex-row text-center md:text-left md:gap-[100px]">
      <div className="flex-1 flex flex-col gap-8">
        <h2 className="text-btn text-3xl font-bold">About Agency</h2>
        <h1 className="text-[44px] md:text-[54px] font-bold leading-tight">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[18px] md:text-[20px]">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold text-btn">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold text-btn">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold text-btn">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] lg:h-auto lg:flex-1">
        <Image
          src="/about.png"
          alt="hero"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
