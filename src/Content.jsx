import React from 'react';
import './index.css'
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaMapMarker, FaEnvelope } from "react-icons/fa"

const Content = () => {
  return (
    <content className="content w-full h-full flex flex-col items-center justify-center gap-8">
        <section id="intro" className="intro p-8 gap-y-2 h-screen md:w-1/2 flex justify-center flex-col items-start">
            <p className="text-2xl font-mono text-left text-sky-400">
            Holla amigo, i'm
            </p>
            <h1 className="text-3xl font-poppins text-left font-bold">Mohammed Hussein</h1>
            <h2 className="text-1xl md:text-2xl font-mono text-left">Graduated engineer, passionate about design and development.</h2>
            <div className="socials flex justify-around flex gap-2 text-1xl font-poppins text-left w-full ">
                <a href="https://www.instagram.com/964.m7md/" target="_blank" rel="noopener noreferrer" className="hover:bg-orange-500 rounded bg-sky-500 text-base text-1xl md:text-2xl p-2 w-1/3 hover:scale-102 hover:text-white flex-col"><FaInstagram /> Instagram</a>
                <a href="https://www.linkedin.com/in/mohammed-hussein-amheno-604494407?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://www.linkedin.com/in/mohammed-hussein-amheno-604494407" target="_blank" rel="noopener noreferrer" className="hover:bg-white hover:text-sky-800 rounded bg-sky-500 text-1xl md:text-2xl text-base p-2 w-1/3 hover:scale-102"><FaLinkedin /> Linkedin</a>
                <a href="https://www.youtube.com/@eng.m7" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 hover:text-white rounded bg-sky-500 text-base text-1xl md:text-2xl p-2 w-1/3 hover:scale-101"><FaYoutube /> YouTube</a>
            </div>
        </section>
        <section id="about" className="about p-8 gap-2 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">About Me</h1>
            <p className="text-1xl md:text-2xl font-sans text-justify">
            I am a recent graduate in engineering, with a strong passion for design and development. I have a keen interest in creating innovative solutions and bringing ideas to life through technology. My background in engineering has provided me with a solid foundation in problem-solving and critical thinking, which I apply to my work in design and development. I am constantly seeking new challenges and opportunities to grow my skills and contribute to meaningful projects.
            </p>
        </section>
        <section id="services" className="services p-8 gap-2 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">Services</h1>
            <p className="text-1xl md:text-2xl font-mono text-justify">
            I offer a range of services to help bring your ideas to life, Whether you need a website, page monitoring, designs, or other digital solutions, I'm here to assist you every step of the way.
            </p>
        </section>
        <section id="contact" className="contact p-8 gap-2 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">Contact</h1>
            <p className="text-1xl md:text-2xl font-sans text-justify">
            If you have any questions or would like to discuss a project, please feel free to reach out to me. I am always happy to connect with new people and explore potential collaborations.
            </p>
            <div className="socials flex flex-col justify-around  gap-2 text-1xl md:text-2xl font-sans text-left w-full padding-2">
                <p className=' flex flex-row text-center gap-2 align-center justify-start items-center'><FaDiscord /> 7medi</p>
                <p className=' flex flex-row text-center gap-2 items-center'><FaEnvelope /> mohammedhusseinamheno@gmail.com</p>
                <p className=' flex flex-row text-center gap-2 align-center justify-start items-center'><FaMapMarker /> IRAQ - BAGHDAD</p>
            </div>
        </section>
    </content>
  );
};

export default Content;
