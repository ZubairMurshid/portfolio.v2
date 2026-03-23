import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="lead text-2xl text-accent-blue font-light mb-8">
            Passionate Computer Science undergraduate specializing in full-stack development and AI-driven solutions.
          </p>
          
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I am currently pursuing my Bachelor of Science in Computer Science at the Informatics Institute of Technology. 
            My academic journey has equipped me with a solid foundation in Object-Oriented Programming (Java, Python), modern full-stack web technologies (JavaScript, React, Node.js), and relational database design.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed mb-12">
            I excel at working in collaborative environments and delivering solutions in team settings. 
            Currently, I am getting hands-on experience designing predictive modeling pipelines and expanding my expertise in cloud computing infrastructure (AWS) and containerization while seeking a Software Engineering Internship.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <HighlightBox icon="💻" title="Full-Stack Engineering" desc="Java, React, and Node.js architectures" />
            <HighlightBox icon="🧠" title="AI Integration" desc="Building predictive modeling pipelines" />
            <HighlightBox icon="🔄" title="Agile Collaboration" desc="Team leadership and testing principles" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightBox({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-bg-secondary border border-accent-blue/10 hover:border-accent-blue/30 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-text-secondary">{desc}</p>
    </div>
  );
}
