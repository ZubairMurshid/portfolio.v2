import Hero from '@/components/Hero';
import AboutSnapshot from '@/components/AboutSnapshot';
import VisualMap from '@/components/VisualMap';
import ProjectSpotlight from '@/components/ProjectSpotlight';
import RadarChart from '@/components/RadarChart';

const mainSkills = [
  { name: 'Java', value: 85 },
  { name: 'Python', value: 80 },
  { name: 'Web Dev', value: 85 },
  { name: 'Database', value: 80 },
  { name: 'Security', value: 75 },
  { name: 'Teamwork', value: 90 }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      <div className="container mx-auto px-6">
        <AboutSnapshot />
        
        <section className="py-20">
          <h2 className="text-center font-display text-4xl font-bold mb-12">What I Do</h2>
          <VisualMap />
        </section>

        <ProjectSpotlight />

        <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-text-secondary mb-8 text-lg">
              A balanced mix of software engineering fundamentals and emerging security practices.
              Constantly expanding my stack with modern tools.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Technical Skills" value={15} suffix="+" />
              <Stat label="Major Projects" value={5} suffix="+" />
              <Stat label="Avg. Grade" value={82} suffix="%" />
              <Stat label="Commitment" value={100} suffix="%" />
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <RadarChart skills={mainSkills} />
          </div>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="p-4 rounded-xl bg-bg-secondary border border-accent-blue/10">
      <div className="text-3xl font-bold text-accent-blue font-display mb-1">
        {value}{suffix}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
}
