"use client";


import Image from 'next/image'
import Projects from './projects/page'
import Contact from './contact/page'
import { useCallback, useEffect, useRef, useState } from 'react'
import CustomButton from './components/customButton'
import { inter, poppins, poppinsMedium } from './utils/fonts'
import { useScroll } from "./ScrollContext";
import { CircleArrowRight, Download , Github, Linkedin} from 'lucide-react';
import { Project } from './data/projects';
import PopupModal from './components/modal/popupModal';
import { Analytics } from "@vercel/analytics/react"
import {  SKILLS, STRINGS } from './constants/strings';

export default function Home() {
  const { homeRef, projectsRef, contactRef } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedProjectRef = useRef<Project | null>(null);


  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    selectedProjectRef.current = project;
    setIsModalOpen(true);
  }, []);

  const resumeDownload = () => {
  
  const fileId= process.env.NEXT_PUBLIC_RESUME_ID
  const fileUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download`; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    selectedProjectRef.current = null;
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center">
      <section ref={homeRef} className="text-center mb-16">
      <div className="relative w-48 h-48 mx-auto mb-4 border-2 border-white rounded-full overflow-hidden">
      <Analytics />
      <Image
      src="/portfolio-image.jpeg"
      alt="portfolio image"
      layout="fill" 
      objectFit="cover"
      className="rounded-full"
        />
       </div>
        <h1 className="text-4xl font-bold mb-4 text-dark-primary">Gobishankar Annalingam</h1>
        <p className="text-xl text-dark-onBackground mb-8">Mobile App Developer | Game Developer | Front-end Developer</p>
        
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <CustomButton title="Resume" icon={<Download className="w-5 h-5 mr-2"  />} onClick={resumeDownload}/>
        <CustomButton 
            title="LinkedIn" 
            icon={<Linkedin className="w-5 h-5 mr-2" />}
            onClick={() => window.open('https://www.linkedin.com/in/annamgobi1990/', '_blank')}
          />
          <CustomButton 
            title="Github" 
            icon={<Github className="w-5 h-5 mr-2" />}
            onClick={() => window.open('https://github.com/gobi1990', '_blank')}
          />
          <CustomButton title="Get In Touch" icon={<CircleArrowRight className="w-5 h-5 mr-2"  />} onClick={() => scrollToSection(contactRef)}/>
        </div>
      </section>
      <section className="w-full max-w-6xl glass-effect p-8">
        <h2 className={`text-2xl font-bold mb-4 text-dark-secondary ${poppins.className}`}>About Me</h2>
        <p className={`text-dark-onBackground mb-8 ${poppinsMedium.className} `}>
        {STRINGS.PORT_DESCRIPTION}
        </p>
        <h2 className="text-2xl font-bold mb-4 text-dark-secondary">Skills</h2>
        <div className="grid md:grid-cols-6 gap-4">
          {SKILLS.map((skill) => (
            <div key={skill} className={ `bg-dark-surface glass-effect rounded-lg p-3 text-center text-dark-onSurface ${poppinsMedium.className} ` }>
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section ref={projectsRef} className="mt-20 w-full max-w-6xl glass-effect p-8">
      <Projects  />
      </section>
      <section ref={contactRef} className="mt-20 w-full max-w-3xl p-8">
        <Contact />
      </section>
      <PopupModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProjectRef.current} />
    </div>
  )
}