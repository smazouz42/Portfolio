import Image from 'next/image'
import Navbar from './components/navbar'
import { useState } from 'react';
import Project from './components/project';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Assuming GitHub, LinkedIn, and Codeforces are from FontAwesome

export default function Home() {
  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 70 },


    // Add more skills as needed
  ];
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      technologies: 'React, Node.js, MongoDB',
      image: '/pingpong.avif', // e.g. '/project1.png
      githubLink: 'https://github.com/smazouz42',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: 'React, Node.js, MongoDB',
      image: '/pingpong.avif', // e.g. '/project1.png
      githubLink: 'https://github.com/smazouz42',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: 'React, Node.js, MongoDB',
      image: '/pingpong.avif', // e.g. '/project1.png
      githubLink: 'https://github.com/smazouz42',
    },
    // Add more projects as needed
  ];
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <main >
      <section className='bg-white'>
        <Navbar />
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Said Mazouz
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Developer And Problem Solver.
          </h3>
          <p className="text-md py-5 leading-9 text-gray-800 dark:text-gray-200 ">
            I am a web developer and passionate problem solver. With a keen
            interest in creating impactful and user-friendly websites,
            I thrive on turning ideas into functional and aesthetically pleasing
            digital experiences. Through a combination of creativity and technical expertise,
            I enjoy tackling challenges and finding innovative solutions. My goal is to contribute to the ever-evolving world of web development,
            making a positive impact through code and continuous learning.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <FaGithub />
            <FaLinkedin />
            <FaCode />
          </div>
        </div>
        <div className=''>
          <Image
            src="/smazouz.png"
            alt="hero"
            width={350}
            height={350}
            className="mx-auto bg-gradient-to-b from-teal-500 rounded-full"
          />
        </div>
      </section>
      <section className="bg-white">
        {/* ... your existing code ... */}

        {/* Skills Section */}
        <div className="p-10 py-10">
          <h3 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
            My Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {skill.name}
                </p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-2 mb-4 overflow-hidden text-xs bg-teal-200 rounded">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="portfolio-container">
          <h3 className='text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl'>My Projects</h3>
          <div className="flex overflow-x-auto space-x-4 p-4">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
