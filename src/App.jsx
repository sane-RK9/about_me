import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Github, Linkedin, ChevronRight, ExternalLink, Mail } from 'lucide-react';

const AboutMe = () => {
  const [activeProject, setActiveProject] = useState(null);

  const skills = [
    "Python", "Java", "C", "Django", "TensorFlow", "JAX", "Docker", "Git", 
    "Electronics", "Circuit Design"
  ];

  const projects = [
    {
      title: "pdf_summarizer",
      description: "A Django application that analyzes PDF documents and generates validated citations. Built using RoBERTa for embeddings, BART for summarization, and Milvus for similarity search.",
      tech: ["Django", "RoBERTa", "BART", "Milvus"]
    },
    {
      title: "Mother AI",
      description: "An ambitious AI system that combines a custom OS, microprocessor, and specialized hardware, capable of advanced tasks such as sensory processing and simulation.",
      tech: ["Custom OS", "Hardware Design", "AI", "Simulation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-16 px-4 shadow-lg relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg opacity-90">
            A passionate technologist building the future with code
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Hi, I'm <span className="font-semibold text-primary">Your Name</span>, 
              a 19-year-old passionate about technology, coding, and making a difference. 
              I am currently 180 cm tall and weigh 57 kg, striving to build a stronger version of myself.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Hobbies & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Fitness (I plan to bulk this winter)",
                "Playing Chess",
                "Enjoying Football",
                "Exploring the world of simulations and AI",
                "Listening to music"
              ].map((hobby, index) => (
                <li key={index} 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">{hobby}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle>My Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="skill"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Current Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card p-4 rounded-lg transition-all duration-200 ${
                  activeProject === index ? 'bg-primary/10' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="bg-primary/10 text-primary-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              In the future, I plan to create an open-source personal assistant app called
              <span className="font-semibold text-primary"> Automate This</span>, which will help automate 
              daily tasks using natural language processing.
            </p>
            <Button className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-accent text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <p className="text-lg font-semibold">Connect with me</p>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
