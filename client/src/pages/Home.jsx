import React, { useEffect } from "react";
import Card from "../design/Card";
import CardWithImage from "../design/CardWithImage";
import myPic from "../assets/profile2.jpg";
import myFbPic from "../assets/fb-profile.jpg";
import myIgPic from "../assets/ig-profile.jpg";
import myTiktokPic from "../assets/tiktok-profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import MyHtml from "../assets/programming_languages/html5.png";
import MyJavaScript from "../assets/programming_languages/javascript.png";
import MyCss from "../assets/programming_languages/css-3.png";
import MyPhp from "../assets/programming_languages/php.png";
import MyReact from "../assets/programming_languages/react.png";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="wrapper" style={{ overflow: "hidden" }}>
      <div
        className=" bg-[#040D12] bg-cover bg-center flex items-center justify-center min-h-screen"
        id="homeContainer"
      >
        <main className=" mx-auto">
          <main className="grid grid-cols-1 md:grid-cols-2 items-center sm:py-10 md:py-16 lg:py-24 xl:py-32 2xl:py-40">
            <section
              data-aos="fade-right"
              className="md:col-span-1 md:mt-5 fantasy-font text-center md:text-right mobile-animate"
            >
              <h1 className="text-6xl text-white mb-4">Paulo Garcia</h1>
              <p className="text-4xl fantasy-font text-white md:order-last">
                A Web Developer
              </p>
              <p className="text-4xl fantasy-font text-white md:order-last">
                A Mobile Developer
              </p>
              <p className="text-4xl fantasy-font text-white md:order-last">
                An Artist
              </p>
              <p className="text-4xl fantasy-font text-white md:order-last">
                A Dreamer
              </p>
            </section>
            <section
              className="md:col-span-1 order-first md:order-none flex items-center justify-center md:justify-start"
              data-aos="fade-left"
            >
              <img
                src={myPic}
                alt=""
                className="object-cover w-96 h-96 rounded-md mx-auto md:mx-0 mobile-animate md:order-last"
              />
            </section>
          </main>
        </main>
      </div>

      <div
        className=" bg-[#092635] bg-cover bg-center flex items-center justify-center min-h-screen py-10"
        id="aboutContainer"
      >
        <div className="relative z-10" data-aos="fade-up" data-aos-delay="200">
          <p className="text-white fantasy-font text-7xl text-center mb-3">
            About Me
          </p>
          <p className="text-white font-sans px-7 4xl sm:text-2x1  md:text-3xl lg:text-4xl xl:text-5xl text-center">
            I have a Bachelor's Degree in Information Technology from STI
            College - Balagtas. During my four years in college, I focused on
            programming. I started with small projects like a
            rock-paper-scissors game, a mini login system, a Point of Sale (POS)
            system, and a checklist system. After college, I got a job as a
            Junior Software Engineer. My job involves developing webpages, both
            the front-end and backend parts. I work hard and if there's
            something new I need to learn for my job, I do thorough research to
            learn it.
          </p>
          <main className=" mx-auto">
            <p className="text-white fantasy-font text-5xl text-center mb-3 m-10">
              Skills
            </p>
            <main className="grid grid-cols-1 md:grid-cols-2 items-center">
              <section
                className="md:col-span-1 order-first md:order-none flex items-center justify-center md:justify-end"
                data-aos="fade-left"
              >
                <img
                  src={myPic}
                  alt=""
                  className="object-cover w-96 h-96 rounded-md mx-auto md:mx-0 mobile-animate md:order-last"
                />
              </section>
              <section
                data-aos="fade-right"
                className="md:col-span-1 md:mt-5 fantasy-font text-center md:text-left mobile-animate"
              >
                <h1 className="text-6xl text-white mb-4">Programming</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-1">
                  <img
                    src={MyReact}
                    alt=""
                    className="order-5 w-16 h-16 object-contain"
                  />
                  <img
                    src={MyPhp}
                    alt=""
                    className="order-4 w-16 h-16 object-contain"
                  />
                  <img
                    src={MyJavaScript}
                    alt=""
                    className="order-3 w-16 h-16 object-contain"
                  />
                  <img
                    src={MyCss}
                    alt=""
                    className="order-2 w-16 h-16 object-contain"
                  />
                  <img
                    src={MyHtml}
                    alt=""
                    className="order-1 w-16 h-16 object-contain"
                  />
                </div>
              </section>
            </main>
          </main>
        </div>
      </div>
      <div
        className="bg-[#1B4242] bg-cover bg-center flex justify-center items-center min-h-screen"
        id="socialmediaContainer"
      >
        <div className="z-10">
          <h1
            className="text-6xl text-white fantasy-font text-center font-semibold mb-4 mt-0 py-5 z-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            My Social Media Accounts
          </h1>
          <div className="flex justify-center mb-4 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <section data-aos="fade-up" data-aos-delay="200">
                <CardWithImage
                  imageSrc={myFbPic}
                  title="Paul Owens"
                  link="https://www.facebook.com/june.tala.5"
                  buttonClass="text-white font-semibold bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2"
                  cardStyle="max-w-xs mx-auto"
                >
                  View Facebook
                </CardWithImage>
              </section>
              <section data-aos="fade-up" data-aos-delay="250">
                <CardWithImage
                  imageSrc={myIgPic}
                  title="paulomorphism"
                  link="https://www.instagram.com/paulomorphism/"
                  buttonClass="text-white font-semibold bg-[#C13584] hover:bg-[#C13584]/90 focus:ring-4 focus:outline-none focus:ring-[#C13584]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#C13584]/55 mb-2"
                  cardStyle="max-w-xs mx-auto"
                >
                  View Instagram
                </CardWithImage>
              </section>
              <section data-aos="fade-up" data-aos-delay="300">
                <CardWithImage
                  imageSrc={myTiktokPic}
                  title="plwns28"
                  link="https://www.tiktok.com/@plwns28"
                  buttonClass="text-black font-semibold bg-[#00f2ea] hover:bg-[#00f2ea]/90 focus:ring-4 focus:outline-none focus:ring-[#00f2ea]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#00f2ea]/55 mb-2"
                  cardStyle="max-w-xs mx-auto"
                >
                  View TikTok
                </CardWithImage>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
