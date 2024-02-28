// pages/About.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../design/Card';
const About = () => {

  return (
    <div className="background-professionals bg-black bg-cover bg-center min-h-screen pt-10 px-7 items-center justify-center relative">
    <Card className={"relative z-10"}>
      <p className='text-white fantasy-font text-7xl text-center mb-3'>About Me</p>
      <p className='text-white font-sans text-4xl text-center'>
      I hold a Bachelor's Degree in Information Technology from STI College - Balagtas. Throughout my four years in college, I focused on programming, initiating with the development of small-scale projects such as a rock-paper-scissors game, a mini login system, a Point of Sale (POS) system, and a checklist system. After completing college, I began working as a Junior Software Engineer. My daily responsibilities involve developing webpages, handling both the front-end and backend aspects. I am a hardworking individual. If there is anything I am unfamiliar with in the realm of new technology, within my profession or job, I strive to learn it through thorough research.
      </p>
    </Card>
    </div>
  );
};

export default About;