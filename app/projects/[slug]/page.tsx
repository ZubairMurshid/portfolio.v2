import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // In a real app, fetch data based on slug. Mocking for now.
  const isEventLK = params.slug === 'eventlk';

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <Link href="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-blue mb-8 transition-colors">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <div className="glass-panel p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          {isEventLK ? 'EventLK' : 'Project Detail'}
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full font-bold text-sm">
            In Development
          </span>
          <span className="px-4 py-2 bg-bg-tertiary rounded-full font-bold text-sm">
            2025 - 2026
          </span>
        </div>

        <p className="text-xl leading-relaxed text-text-secondary mb-12 max-w-3xl">
          {isEventLK 
            ? "Comprehensive intelligent event management system designed specifically for university clubs and societies, featuring AI-driven recommendations and automated workflows."
            : "Project description placeholder."}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Key Features</h3>
            <ul className="space-y-3 text-text-secondary list-disc pl-5">
              <li>AI-powered venue and theme recommendations</li>
              <li>Role-based dashboards for different user types</li>
              <li>QR-based attendance tracking system</li>
              <li>Predictive budget optimization models</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'MySQL', 'AI/ML', 'React'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-bg-tertiary border border-white/10 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
