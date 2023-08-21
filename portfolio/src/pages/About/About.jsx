import React from "react";
import "./About.css";
import Img from "../../assets/ama.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Img} alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
            Hello there! I'm Amandeep. I have done B.tech in mechanical branch from Indus Institue of Engineering and Technology 
            (Kurukshetra University). 
            I am a versatile MERN stack web 
            developer with a mission to bring 
            innovative ideas to life through 
            seamless digital experiences. 
            I've mastered a range of technologies including HTML, CSS, 
            JavaScript, React.js, and Next.js, as well as backend technologies Node.js Express.js and Database mongoDB. This dual expertise enables me to create holistic solutions that elevate user engagement and business goals.With a strong foundation in the MERN technology stack, I specialize in creating robust, responsive, and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
