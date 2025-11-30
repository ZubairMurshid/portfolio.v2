import React from 'react';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <h1 className="text-5xl font-display font-bold mb-16">Experience & Education</h1>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <h2 className="text-2xl font-bold text-accent-blue mb-8 border-b border-accent-blue/20 pb-4">Education</h2>
          <div className="space-y-12">
            <TimelineItem 
              year="2025 - Present"
              title="BSc (Hons) Computer Science"
              company="Informatics Institute of Technology"
              desc="Deepening expertise in cybersecurity, databases, and advanced software engineering. Year 2 in progress."
            />
            <TimelineItem 
              year="2022"
              title="Foundation Certificate in Higher Education"
              company="Informatics Institute of Technology"
              desc="Built strong academic base in programming, IT, mathematics, and data handling."
            />
             <TimelineItem 
              year="2010 - 2021"
              title="GCE Ordinary Levels"
              company="Amal International School"
              desc="Strong results in English (A), Mathematics (A), Islam (A), Literature (A)."
            />
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h2 className="text-2xl font-bold text-accent-blue mb-8 border-b border-accent-blue/20 pb-4">Volunteer Experience</h2>
          <div className="space-y-12">
            <TimelineItem 
              year="2025"
              title="Industry Outreach Member"
              company="iX 25"
              desc="Contributed to industry engagement and outreach activities, supporting collaboration between students and professionals."
            />
            <TimelineItem 
              year="2025"
              title="Industry Outreach Member"
              company="ModelX"
              desc="Played a key role in organizing events and facilitating meaningful industry interactions."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, company, desc }: { year: string, title: string, company: string, desc: string }) {
  return (
    <div className="relative pl-8 border-l-2 border-accent-blue/20">
      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-bg-primary border-4 border-accent-blue" />
      <span className="inline-block px-3 py-1 bg-accent-blue text-white text-xs font-bold rounded-full mb-2">
        {year}
      </span>
      <h3 className="text-xl font-bold font-display">{title}</h3>
      <h4 className="text-accent-blue font-medium mb-2">{company}</h4>
      <p className="text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
