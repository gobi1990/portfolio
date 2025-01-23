import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="text-center mb-16">
        <div className="relative w-48 h-48 mx-auto mb-4">
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-dark-primary">Your Name</h1>
        <p className="text-xl text-dark-onBackground mb-8">Mobile App Developer</p>
        <Link
          href="/contact"
          className="bg-dark-primary hover:bg-dark-secondary text-dark-onPrimary font-bold py-2 px-4 rounded transition-colors"
        >
          Get in Touch
        </Link>
      </section>
      <section className="w-full max-w-3xl glass-effect p-8">
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
    </div>
  )
}