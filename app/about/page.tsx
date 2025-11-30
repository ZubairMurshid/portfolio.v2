import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="lead text-2xl text-accent-blue font-light mb-8">
            Passionate Computer Science undergraduate with strong skills in programming, databases, and system design.
          </p>
          
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I am currently pursuing my Bachelor of Science in Computer Science at the Informatics Institute of Technology. 
            My academic journey has equipped me with a solid foundation in software development, web technologies, and security principles.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed mb-12">
            I excel at working in collaborative environments and delivering solutions in team settings. 
            Currently, I am expanding my expertise in cybersecurity while seeking an industry placement to apply my technical abilities 
            to real-world projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <HighlightBox icon="🎓" title="Academic Excellence" desc="Strong foundation in CS fundamentals" />
            <HighlightBox icon="🔒" title="Security Focus" desc="Expanding cybersecurity expertise" />
            <HighlightBox icon="👥" title="Team Player" desc="Collaborative problem solver" />
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
