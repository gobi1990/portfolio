"use client";


import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects/page'
import Contact from './contact/page'
import { useCallback, useRef, useState } from 'react'
import CustomButton from './components/customButton'

import { useScroll } from "./ScrollContext";
import { CircleArrowRight, Download } from 'lucide-react';
import { Project } from './data/projects';
import PopupModal from './components/modal/popupModal';

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

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    selectedProjectRef.current = null;
  }, []);

  return (
    <div className="flex flex-col items-center">
      <section className="text-center mb-16">
        <div className="relative w-48 h-48 mx-auto mb-4"> 
          <Image
            src="/portfolio-image.jpeg"
            alt="porfolio image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          
         </div>
        <h1 className="text-4xl font-bold mb-4 text-dark-primary">Gobishankar Annalingam</h1>
        <p className="text-xl text-dark-onBackground mb-8">Mobile App Developer | Game Developer | Front-end Developer</p>
        
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <CustomButton title="Resume" icon={<Download className="w-5 h-5 mr-2"  />} onClick={() => scrollToSection(projectsRef)}/>
        <CustomButton title="Get In Touch" icon={<CircleArrowRight className="w-5 h-5 mr-2"  />} onClick={() => scrollToSection(contactRef)}/>

        </div>
      </section>
      <section className="w-full max-w-6xl glass-effect p-8">
        <h2 className="text-2xl font-bold mb-4 text-dark-secondary">About Me</h2>
        <p className="text-dark-onBackground mb-8">
        As a dedicated & passionate Mobile App | Game | Unity | XR Developer with 8 years of experience in the software industry, I bring a rich skillset to the team, specializing in Mobile App Development , VR/XR Development, Game Design & Development and 3D Modeling.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-dark-secondary">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React Native', 'Flutter', 'Unity3D', 'Kotlin', 'JavaScript', 'TypeScript', 'UI/UX Design'].map((skill) => (
            <div key={skill} className="bg-dark-surface rounded-lg p-3 text-center text-dark-onSurface">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section ref={projectsRef} className="mt-20 w-full max-w-6xl glass-effect p-8">
      <Projects onProjectClick={handleProjectClick} />
      </section>
      <section ref={contactRef} className="mt-20 w-full max-w-3xl p-8">
        <Contact />
      </section>
      <PopupModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProjectRef.current} />
    </div>
  )
}