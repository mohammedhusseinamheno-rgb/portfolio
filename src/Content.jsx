import React from 'react';
import './index.css'
import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaMapMarker, FaEnvelope, FaCode, FaPaintBrush, FaChartLine, FaTimes } from "react-icons/fa"


// Images for services
import designImg from "./assets/Design.webp"
import programmingImg from "./assets/programming.jpg"
import monitoringImg from "./assets/Monitoring.webp"



const services = [
  {
    id: 1,
    name: "Front-end",
    icon: <FaCode />,
    description: "Building responsive, fast, and interactive user interfaces using modern frameworks like React and Tailwind CSS. Focused on clean code and smooth user experience.",
    image: programmingImg, // swap with your real image
  },
  {
    id: 2,
    name: "Designing",
    icon: <FaPaintBrush />,
    description: "Crafting visual concepts, layouts, and branding that communicate ideas clearly and leave a lasting impression. From wireframes to polished UI.",
    image: designImg, // swap with your real image
  },
  {
    id: 3,
    name: "Page Monitoring",
    icon: <FaChartLine />,
    description: "Monitoring your sites, business page and make contact with your customers, ensuring optimal performance and engagement. Providing insights and analytics to help you make informed decisions.",
    image: monitoringImg, // swap with your real image
  },
]

const Content = () => {
  const [activeService, setActiveService] = useState(null)

  return (
    <content className="content w-full h-full flex flex-col items-center justify-center gap-8">
        <section id="intro" className="intro p-8 gap-y-2 h-screen md:w-1/2 flex justify-center flex-col items-start">
            <p className="text-2xl font-mono text-left text-sky-400">
            Holla amigo, i'm
            </p>
            <h1 className="text-3xl font-poppins text-left font-bold">Mohammed Hussein</h1>
            <h2 className="text-1xl md:text-2xl font-mono text-left">Graduated engineer, passionate about design and development.</h2>
            <div className="socials flex justify-around flex gap-2 text-1xl font-poppins text-left w-full ">
                <a href="https://www.instagram.com/964.m7md/" target="_blank" rel="noopener noreferrer" className="hover:bg-orange-600 rounded bg-sky-500 text-base text-1xl md:text-2xl p-2 w-1/3 hover:scale-102 hover:text-white flex-col"><FaInstagram /> Instagram</a>
                <a href="https://www.linkedin.com/in/mohammed-hussein-amheno-604494407?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://www.linkedin.com/in/mohammed-hussein-amheno-604494407" target="_blank" rel="noopener noreferrer" className="hover:bg-white hover:text-sky-800 rounded bg-sky-500 text-1xl md:text-2xl text-base p-2 w-1/3 hover:scale-102"><FaLinkedin /> Linkedin</a>
                <a href="https://www.youtube.com/@eng.m7" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 hover:text-white rounded bg-sky-500 text-base text-1xl md:text-2xl p-2 w-1/3 hover:scale-102"><FaYoutube /> YouTube</a>
            </div>
        </section>

        <section id="about" className="about p-8 gap-2 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">About Me</h1>
            <p className="text-1xl md:text-2xl font-sans text-justify">
            I am a recent graduate in engineering, with a strong passion for design and development. I have a keen interest in creating innovative solutions and bringing ideas to life through technology. My background in engineering has provided me with a solid foundation in problem-solving and critical thinking, which I apply to my work in design and development. I am constantly seeking new challenges and opportunities to grow my skills and contribute to meaningful projects.
            </p>
        </section>

        <section id="services" className="services p-8 gap-4 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">Services</h1>
            <p className="text-1xl md:text-2xl font-sans text-justify">
            I offer a range of services to help bring your ideas to life, Whether you need a website, page monitoring, designs, or other digital solutions, I'm here to assist you every step of the way.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full mt-4">
            {services.map((service) => (
                <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="file bg-elevated border border-border rounded-xl p-6 w-full md:w-56 h-36 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-500"
                >
                <span className="text-4xl text-white">{service.icon}</span>
                <p className="font-mono text-lg text-text-primary text-center text-sky-500">{service.name}</p>
                </div>
            ))}
            </div>
        </section>

        <section id="contact" className="contact p-8 gap-2 h-screen w-full md:w-1/2 flex justify-center flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-poppins text-left font-bold text-sky-500 underline underline-offset-6">Contact</h1>
            <p className="text-1xl md:text-2xl font-sans text-justify">
            If you have any questions or would like to discuss a project, please feel free to reach out to me. I am always happy to connect with new people and explore potential collaborations.
            </p>
            <div className="socials flex flex-col justify-around gap-2 text-1xl md:text-2xl font-sans text-left w-full padding-2">
                <p className='flex flex-row text-center gap-2 justify-start items-center'><FaDiscord /> 7medi</p>
                <p className='flex flex-row text-center gap-2 items-center'><FaEnvelope /> mohammedhusseinamheno@gmail.com</p>
                <p className='flex flex-row text-center gap-2 justify-start items-center'><FaMapMarker /> IRAQ - BAGHDAD</p>
            </div>
        </section>

        {/* Service Modal */}
        {activeService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-elevated border border-border rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative p-6">
            <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-2xl text-text-primary hover:text-red-500 cursor-pointer transition-colors duration-200"
            >
                <FaTimes />
            </button>

            <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                <span className="text-3xl text-sky-500">{activeService.icon}</span>
                <h2 className="text-2xl font-poppins font-bold text-text-primary">{activeService.name}</h2>
                </div>

                <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full rounded-lg object-cover h-30 md:h-80"
                />

                <p className="font-mono text-text-muted leading-relaxed">
                {activeService.description}
                </p>
            </div>
            </div>
        </div>
        )}
    </content>
  );
};

export default Content;