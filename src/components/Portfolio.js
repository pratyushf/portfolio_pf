import React from "react";
import { useState } from "react";
import Bootbox from "../port/Bootbox - Google Chrome 2023-06-30 10-35-50 (1).mp4";
import CloneTube from "../port/CloneTube-Youtube Clone (1).mp4";
import Course_Carrier from "../port/Course_Carrier (1).mp4";
import Foodie from "../port/Foodie-The Food Delivery - Google Chrome 2023-06-30 10-43-32 (1).mp4";
import GourmetGo from "../port/GourmetGo - The Food App - Google Chrome 2023-06-30 11-15-01 (1).mp4";
import PwdGen from "../port/Password Generator - Google Chrome 2023-06-30 10-48-09.mp4";
import ReactRep from "../port/React-Reporter _ One stop Destination for Daily-News and 2 more pages - Personal - Microsoft_ Edge 2023-06-30 11-21-05 (1).mp4";
import Sunny from "../port/Sunny-The Weather App - Google Chrome 2023-04-26 17-32-00.mp4";
import Spotify from "../port/Spotify - Your favourite music is here - Google Chrome 2023-06-30 10-58-07.mp4";
import Wordy from "../port/Wordy - Your personal Text Editor and 1 more page - Personal - Microsoft_ Edge 2023-06-30 11-24-25.mp4";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const portfolios = [
    {
      id: 1,
      projectname: "Bootbox",
      src: Bootbox,
    },
    {
      id: 2,
      projectname: "CloneTube",
      src: CloneTube,
    },
    {
      id: 3,
      projectname: "Course_Carrier",
      src: Course_Carrier,
    },
    {
      id: 4,
      projectname: "Foodie",
      src: Foodie,
    },
    {
      id: 5,
      projectname: "GourmetGo",
      src: GourmetGo,
    },
    {
      id: 6,
      projectname: "Password Generator",
      src: PwdGen,
    },
    {
      id: 7,
      projectname: "React Reporter : The News App",
      src: ReactRep,
    },
    {
      id: 8,
      projectname: "Spotify Clone",
      src: Spotify,
    },
    {
      id: 9,
      projectname: "Sunny- The Weather App",
      src: Sunny,
    },
    {
      id: 10,
      projectname: "Wordy - Text Editor",
      src: Wordy,
    },
  ];

  return (
    <div
      id="Portfolio"
      name="portfolio"
      className=" pt-20 h-max bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-contain"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Projects of Portfolio
          </p>
          <p className=" py-6">Checkout Some of My Work Right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, projectname }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <video
                autoPlay={isHovered}
                src={src}
                loop
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className=" rounded-md hover:scale-105 transition-opacity duration-300"
              ></video>
              <p className=" text-center pt-1 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                {projectname}
              </p>
              <div className=" flex items-center justify-center">
                <button className=" w-1/2 px-6 py-1 m-4 duration-200 hover:scale-250 hover:bg-orange-500 rounded-xl">
                  Demo
                </button>
                <button className=" w-1/2 px-6 py-1 m-4 hover:bg-orange-500 rounded-xl">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
