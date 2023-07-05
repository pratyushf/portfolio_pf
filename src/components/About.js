import React from "react";

const About = () => {
  return (
    <div
      id="About"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24 pb-32"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl mt-20">
          I am Pratyush Fekarikar, a highly motivated and dedicated Full Stack
          Web Developer with a strong passion for creating impactful web
          applications. I have a well-rounded skill set that includes
          proficiency in front-end technologies such as HTML, CSS, JavaScript,
          and React JS, as well as back-end technologies like Node.js,
          Express.js, and MongoDB. With experience in Java, SAP ABAP, SQL, and
          cloud technologies like Microsoft Azure, I possess a versatile skill
          set that allows me to tackle diverse software development projects. I
          am committed to continuous learning, attention to detail, and thrive
          in collaborative teamwork environments.
        </p>
        <br />
        <p className=" text-xl">
          Throughout my academic and professional journey, I have gained
          valuable experience in web development. I completed my Bachelor of
          Engineering in Mechanical Engineering and further expanded my
          knowledge through training at Infosys Limited, where I focused on SAP
          ABAP, Java programming, and Oracle database management. Additionally,
          I have participated in technical internships that provided hands-on
          experience in engineering and manufacturing processes. With a strong
          focus on delivering high-quality solutions, I am dedicated to
          leveraging my skills and expertise to create seamless and
          user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
