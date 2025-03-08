'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Trophy, Star, Medal, Crown, Target, Users2, ThumbsUp } from 'lucide-react';

const awards = [
  {
    year: '2023',
    title: 'Best HR Solutions Provider',
    organization: 'Global HR Excellence Awards',
    description: 'Recognized for innovative HR solutions and exceptional service delivery',
    icon: Trophy
  },
  {
    year: '2022',
    title: 'Innovation in HR Technology',
    organization: 'Tech HR Summit',
    description: 'Awarded for breakthrough HR technology implementations',
    icon: Star
  },
  {
    year: '2022',
    title: 'Excellence in Talent Acquisition',
    organization: 'National HR Network',
    description: 'Distinguished for outstanding recruitment practices',
    icon: Medal
  },
  {
    year: '2021',
    title: 'Best Employment Solutions',
    organization: 'Business Excellence Awards',
    description: 'Recognized for comprehensive employment solutions',
    icon: Crown
  }
];

const achievements = [
  {
    metric: '10K+',
    label: 'Successful Placements',
    icon: Users2
  },
  {
    metric: '95%',
    label: 'Client Satisfaction',
    icon: ThumbsUp
  },
  {
    metric: '25+',
    label: 'Industry Awards',
    icon: Award
  },
  {
    metric: '100%',
    label: 'Growth YoY',
    icon: Target
  }
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Awards & Recognition</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Celebrating excellence in HR solutions and service delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-[#e31e24]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{achievement.metric}</p>
                      <p className="text-sm text-gray-600">{achievement.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
              <p className="text-lg text-gray-600">
                Our commitment to excellence recognized by industry leaders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="p-4 bg-red-50 rounded-lg h-fit">
                      <award.icon className="w-8 h-8 text-[#e31e24]" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-red-50 text-[#e31e24] rounded-full text-sm font-medium mb-2">
                        {award.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-[#e31e24] font-medium mb-2">{award.organization}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
              <p className="text-lg text-gray-600">
                Maintaining highest standards through professional certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'ISO 9001:2015',
                  description: 'Quality Management System',
                  validUntil: 'Valid until 2025',
                  image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=100&h=100&q=80'
                },
                {
                  title: 'ISO 27001',
                  description: 'Information Security Management',
                  validUntil: 'Valid until 2024',
                  image: 'https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=100&h=100&q=80'
                },
                {
                  title: 'Great Place to Work',
                  description: 'Workplace Culture Certification',
                  validUntil: 'Valid until 2024',
                  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=100&h=100&q=80'
                }
              ].map((cert, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-20 h-20 mx-auto rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <p className="text-sm text-[#e31e24]">{cert.validUntil}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e31e24]">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Experience Excellence</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with an award-winning HR solutions provider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                View Our Services
              </Button>
              <Button size="lg" className="bg-[#c91920] hover:bg-[#b31419] text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}