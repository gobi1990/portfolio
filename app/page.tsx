"use client";


import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects/page'
import Contact from './contact/page'
import { useRef } from 'react'

import { useScroll } from "./ScrollContext";
import { Download } from 'lucide-react';
import BusinessCard from './components/businessCard'

export default function Home() {
  const { homeRef, projectsRef, contactRef } = useScroll();

  return (
    <div className="flex flex-col items-center">
      <section className="text-center mb-16">
        <div className="relative w-48 h-48 mx-auto mb-4"> 
          <Image
            src="/placeholder.svg"
            alt="porfolio image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          
         </div>
        {/* <div className="relative w-48 h-48">
          <BusinessCard />
          </div> */}
        <h1 className="text-4xl font-bold mb-4 text-dark-primary">Gobishankar Annalingam</h1>
        <p className="text-xl text-dark-onBackground mb-8">Mobile App Developer | Game Developer | Front-end Developer</p>
        
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <Link
          href="/contact"
          className="inline-flex items-center bg-dark-primary hover:bg-dark-secondary text-dark-onPrimary font-bold py-2 px-4 rounded transition-colors"
        >
          <Download  className="w-5 h-5 mr-2" />
          Download Resume
        </Link>
        <Link
          href="/contact"
          className="bg-dark-primary hover:bg-dark-secondary text-dark-onPrimary font-bold py-2 px-4 rounded transition-colors"
        >
          Get in Touch
        </Link>
        </div>
      </section>
      <section className="w-full max-w-6xl glass-effect p-8">
        <h2 className="text-2xl font-bold mb-4 text-dark-secondary">About Me</h2>
        <p className="text-dark-onBackground mb-8">
          I'm a passionate mobile app developer with expertise in creating intuitive and engaging user experiences.
          With a strong background in both iOS and Android development, I bring ideas to life through clean,
          efficient code and beautiful design.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-dark-secondary">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React Native', 'Swift', 'Kotlin', 'JavaScript', 'TypeScript', 'UI/UX Design'].map((skill) => (
            <div key={skill} className="bg-dark-surface rounded-lg p-3 text-center text-dark-onSurface">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section ref={projectsRef} className="mt-20 w-full max-w-6xl glass-effect p-8">
        <Projects />
      </section>
      <section ref={contactRef} className="mt-20 w-full max-w-3xl p-8">
        <Contact />
      </section>
    </div>
  )
}