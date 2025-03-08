'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';

const mediaItems = [
  {
    title: 'AHRC Launches Innovative HR Tech Platform',
    publication: 'Tech Business Daily',
    date: 'December 15, 2023',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80',
    excerpt: 'Leading HR consultancy firm AHRC introduces AI-powered recruitment platform, revolutionizing the hiring process.',
    link: '#'
  },
  {
    title: 'Transforming Workforce Management',
    publication: 'HR Magazine',
    date: 'November 28, 2023',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=2000&q=80',
    excerpt: 'Interview with AHRC leadership on the future of workforce management and emerging HR trends.',
    link: '#'
  },
  {
    title: 'AHRC Wins Excellence Award',
    publication: 'Business Standard',
    date: 'October 10, 2023',
    image: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=2000&q=80',
    excerpt: 'AHRC recognized for outstanding contribution to HR consulting and innovation at the Annual Business Awards.',
    link: '#'
  },
  {
    title: "Expanding Horizons: AHRC's Growth Story",
    publication: 'Enterprise Weekly',
    date: 'September 5, 2023',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=2000&q=80',
    excerpt: 'Feature story on AHRC\'s journey from a local consultancy to a national HR solutions provider.',
    link: '#'
  }
];

export default function MediaCoveragePage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Media Coverage</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Our presence and recognition in the media
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage Grid */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Newspaper className="w-4 h-4" />
                        {item.publication}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Button 
                      className="bg-[#e31e24] hover:bg-[#c91920] text-white"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Read Full Article
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}