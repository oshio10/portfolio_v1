import Head from 'next/head';
import { getCVData } from '@/utils/data';
import { CVData } from '@/types/cv';

export default function Home() {
  const cvData: CVData = getCVData();
  
  return (
    <>
      <Head>
        <title>{cvData.personal.name} - Portfolio</title>
        <meta name="description" content={`Portfolio website of ${cvData.personal.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">{cvData.personal.name.split(' ')[0]}</span>
              <span className="text-xl font-semibold text-gray-700">{` ${cvData.personal.name.split(' ')[1]}`}</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#experience" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                <a href="#education" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Education</a>
                <a href="#skills" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section id="about" className="mb-20">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 md:w-2/5">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-bold mb-2">{cvData.personal.name}</h1>
                      <p className="text-xl text-blue-100 mb-8">{cvData.personal.title}</p>
                      <div className="space-y-2 mb-6">
                        <p className="flex items-center">
                          <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a8 8 0 01-3.757 5.243z" clipRule="evenodd" />
                          </svg>
                          {cvData.personal.location}
                        </p>
                        <p className="flex items-center">
                          <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          {cvData.personal.email}
                        </p>
                        <p className="flex items-center">
                          <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {cvData.personal.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      {cvData.personal.social.github && (
                        <a href={cvData.personal.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      {cvData.personal.social.linkedin && (
                        <a href={cvData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      )}
                      {cvData.personal.social.twitter && (
                        <a href={cvData.personal.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-3/5">
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{cvData.personal.bio}</p>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.languages.map((lang, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {lang.language} ({lang.proficiency})
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.interests.map((interest, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Work Experience</h2>
            <div className="space-y-12">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{exp.position}</h3>
                      <p className="text-lg">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-500">{exp.date}</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Education Section */}
          <section id="education" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Education</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {cvData.education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{edu.institution}</h3>
                  <p className="text-lg mb-2">{edu.degree}</p>
                  <p className="text-gray-500 mb-4">{edu.date}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Skills</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {cvData.skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cvData.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {project.link && (
                    <div className="px-6 py-3 bg-gray-50 border-t">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Contact Me</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-gray-700 mb-4">
                    I'm always open to discussing new projects, opportunities, or collaborations.
                  </p>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href={`mailto:${cvData.personal.email}`} className="text-blue-600 hover:underline">
                        {cvData.personal.email}
                      </a>
                    </p>
                    <p className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {cvData.personal.phone}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {cvData.personal.location}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {cvData.personal.social.github && (
                      <a 
                        href={cvData.personal.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
                        aria-label="GitHub"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {cvData.personal.social.linkedin && (
                      <a 
                        href={cvData.personal.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                    )}
                    {cvData.personal.social.twitter && (
                      <a 
                        href={cvData.personal.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"
                        aria-label="Twitter"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
