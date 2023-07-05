import React from "react";
import azure from "../img/azure.png";
import bootstrap from "../img/bootstrap.png";
import css from "../img/css.png";
import express from "../img/express-js.png";
import github from "../img/github.png";
import htmll from "../img/html.png";
import JavaScript from "../img/javascript.png";
import mongo from "../img/mongo.jpeg";
import react from "../img/react.png";
import sap from "../img/sap.png";
import node from "../img/node.png";
import tailwind from "../img/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: htmll,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React Js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: node,
      title: "Node Js",
      style: "shadow-green-800",
    },
    {
      id: 8,
      src: azure,
      title: "MS Azure",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: sap,
      title: "SAP ABAP",
      style: "shadow-gray-200",
    },
    {
      id: 10,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-purple-500",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-200",
    },
    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div id="Skills" className=" pt-20 bg-gradient-to-b from-gray-800 to-black py-8">
      <div className="max-w-screen-lg mx-auto p-4 text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skill Set
          </p>
          <p className="py-6">Technologies that I have worked on:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              style={{ minWidth: "150px" }}
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
