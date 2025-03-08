'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

const leaders = [
  {
    name: 'Abhijit Chatterjee',
    title: 'Chairman',
    company: 'Ascensive HR Consultants Pvt. Ltd.',
    message: 'Dear esteemed colleagues, partners, and patrons,',
    content: 'In our ever-evolving world of business, the driving force behind every innovation, every progress, and every leap we make is human capital. At Ascensive HR Consultant Pvt Ltd (AHRC), we have always been at the forefront of nurturing talent and fostering growth. Today, I am both delighted and proud to introduce our new venture, AHRC.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'mailto:chairman@ahrc.com'
    }
  },
  {
    name: 'Koushik Bhattacharyya',
    title: 'Director',
    company: 'Ascensive HR Consultants Pvt. Ltd.',
    message: 'Dear Friends,',
    content: 'Greetings from Ascensive HR Consultants (AHRC), where talent meets opportunity and aspirations take flight. As the Director of this dynamic staffing organisation, it is my pleasure to extend a warm greeting to all our clients, partners, and the talented individuals who form the backbone of our success.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'mailto:director@ahrc.com'
    }
  }
];

export function Leadership() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving our mission to transform the HR landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {leaders.map((leader, index) => (
              <Card key={index} className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-[#e31e24] font-medium">{leader.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{leader.company}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <a href={leader.social.twitter} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={leader.social.facebook} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href={leader.social.linkedin} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={leader.social.email} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 italic mb-4">{leader.message}</p>
                        <p className="text-gray-600">{leader.content}</p>
                      </div>
                      <Button 
                        variant="link" 
                        className="mt-4 text-[#e31e24] hover:text-[#c91920] p-0 h-auto font-medium"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}