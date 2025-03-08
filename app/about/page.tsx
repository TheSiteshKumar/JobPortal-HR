'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users2, Target, Building2, Award, ChartBar, Factory, ShoppingBag, Database, Truck, HardHat, Briefcase, Network, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const managementTeam = [
  {
    name: 'Your Name',
    position: 'Chairman and CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Leading AHRC with vision and innovation',
    social: {
      linkedin: '#',
      email: 'mailto:chairman@ahrc.com'
    },
    link: '/about/chairman'
  },
  {
    name: 'Another Name',
    position: 'Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'Spearheading strategic initiatives',
    social: {
      linkedin: '#',
      email: 'mailto:director@ahrc.com'
    },
    link: '/about/director'
  }
];

const industries = [
  { icon: Factory, name: 'Manufacturing', count: '500+' },
  { icon: Database, name: 'IT & Technology', count: '300+' },
  { icon: ShoppingBag, name: 'Retail', count: '400+' },
  { icon: Truck, name: 'Logistics', count: '200+' },
  { icon: HardHat, name: 'Construction', count: '150+' },
  { icon: Briefcase, name: 'Banking & Finance', count: '250+' },
  { icon: Network, name: 'Telecom', count: '100+' },
  { icon: Building2, name: 'Real Estate', count: '120+' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Reduced height */}
      <section className="relative py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About AHRC</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming businesses through innovative HR solutions since 2010
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About AHRC Section - Condensed */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
                <p className="text-gray-600 mb-6">
                  Ascensive HR Consultants (AHRC) is a leading HR solutions provider, dedicated to transforming businesses through innovative human resource management. With over a decade of experience, we've established ourselves as a trusted partner for organizations seeking excellence in HR services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Users2 className="w-5 h-5 text-[#e31e24]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">10K+</h4>
                      <p className="text-sm text-gray-600">Placements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Building2 className="w-5 h-5 text-[#e31e24]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">500+</h4>
                      <p className="text-sm text-gray-600">Clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Target className="w-5 h-5 text-[#e31e24]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">95%</h4>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Award className="w-5 h-5 text-[#e31e24]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">12+</h4>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#e31e24]/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Management Team</h2>
              <p className="text-gray-600">Meet the visionaries driving our mission forward</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managementTeam.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6 flex gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-[#e31e24] font-medium">{member.position}</p>
                      <p className="text-sm text-gray-600 mt-2">{member.description}</p>
                      <div className="flex gap-2 mt-4">
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.social.email} className="text-gray-400 hover:text-[#e31e24] transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                      {member.link && (
                        <Link href={member.link}>
                          <Button variant="link" className="mt-2 p-0 h-auto text-[#e31e24] hover:text-[#c91920]">
                            View Message →
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Industries We Serve</h2>
              <p className="text-gray-600">Delivering specialized HR solutions across diverse sectors</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-3 mx-auto w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-red-50 transition-colors">
                    <industry.icon className="w-5 h-5 text-gray-600 group-hover:text-[#e31e24]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{industry.name}</h3>
                  <p className="text-[#e31e24] text-sm">{industry.count} Companies</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Condensed */}
      <section className="py-12 bg-[#e31e24]">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Workforce?</h2>
            <p className="text-lg mb-6 opacity-90">Partner with us for innovative HR solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                Schedule a Consultation
              </Button>
              <Button size="lg" className="bg-[#c91920] hover:bg-[#b31419] text-white">
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}