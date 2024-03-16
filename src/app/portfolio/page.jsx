"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-purple-400 to-blue-200",
    title: "Modern AI Chat App UI/UX Design",
    desc: "Introducing a modern AI chat app UI/UX design built with the latest updates of React. This cutting-edge design features stunning animations, attractive visuals, and a sleek interface to provide users with an immersive chatting experience. Leveraging various components and assets, this project showcases the best of modern design principles and React capabilities.",
    img: "/brainwave.png",
    link: "https://github.com/SujalRaunak/Brainwave-modern-react-UI-UX.git",
  },
  {
    id: 2,
    color: "from-blue-300 to-teal-200",
    title: "HooBank - Modern Banking UI/UX Design",
    desc: "Introducing HooBank, a modern banking UI/UX design crafted to provide a seamless and intuitive banking experience. With support for various payment methods including PayPal and more, HooBank offers a responsive and feature-rich platform for managing finances. This React app utilizes stunning images from Figma design, along with captivating color gradients and shadow effects to enhance its visual appeal.",
    img: "/hoobank.png",
    link: "https://github.com/SujalRaunak/bank-react-website.git",
  },
  {
    id: 3,
    color: "from-brown-100 to-yellow-300",
    title: "Modern Japanese Sushi Restaurant Landing Page",
    desc: "Welcome to the latest addition to the market, a modern Japanese Sushi Restaurant landing page designed to captivate visitors with its stunning UI/UX design, abundant animations, and eye-catching elements. This project incorporates HTML, CSS, and JavaScript to create a user-friendly experience that showcases the elegance and sophistication of Japanese cuisine.",
    img: "/sushi_restaurant.png",
    link: "https://github.com/SujalRaunak/sushi-restaurant-UI-UX.git",
  },
  {
    id: 4,
    color: "from-brown-200 to-brown-100",
    title: "SUMZ - Article Summarization React App",
    desc: "SUMZ is a React app designed to simplify the process of summarizing articles using RapidAPI. With SUMZ, users can easily summarize any article by providing its link, allowing for quick access to key information. This project showcases the integration of React with RapidAPI to create a streamlined and efficient article summarization tool.",
    img: "/react_api.png",
    link: "https://github.com/SujalRaunak/AI-Summarizer-RapidAPI.git",
  },
  {
    id: 5,
    color: "from-blue-100 to-purple-300",
    title: "Online Coaching Center Frontend UI/UX Design",
    desc: "Empower your online coaching center with a stunning frontend UI/UX design crafted to engage and inspire learners. This project is built with HTML, CSS, and jQuery to offer seamless color transitions, captivating hover effects, and responsive design.",
    img: "/skool.png",
    link: "https://github.com/SujalRaunak/Educationcenter.git",
  },
  {
    id: 6,
    color: "from-purple-300 to-blue-300",
    title: "World Tour Travel Company Frontend UI/UX Design",
    desc: "Embark on a journey of exploration and adventure with the World Tour Travel Company's frontend UI/UX design. Crafted with HTML, CSS, and jQuery, this project offers immersive hover effects, dynamic functionalities on click, responsive design, captivating fonts, stunning destinations, an eye-catching video on the homepage, and interactive calendars for selecting dates.",
    img: "/worldtour.png",
    link: "https://github.com/SujalRaunak/Travel-world-tour.git",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-400" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-10 text-black">
                  <h1 className="text-sm font-bold md:text-2xl lg:text-3xl xl:text-5xl text-center ">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-60 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[420px] gap-3 item-center px:4 lg:px-10 ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-70 md:w-80 lg:w-[1000px] lg:text-md xl:w-[500px] text-justify px-4 md:px-4 lg:px-4 xl:px-4">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <button className="p-2 text-sm md:p-2 md:text-sm lg:p-3 lg:text-md bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-pink-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-40">
        <h1 className="text-5xl ">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer
            "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;