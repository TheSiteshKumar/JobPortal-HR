'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Users2, Globe2, Award, HandshakeIcon, Rocket, Target, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Technology Partner',
    description: 'Providing cutting-edge HR technology solutions'
  },
  {
    name: 'Global Innovations Ltd',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Strategic Partner',
    description: 'Collaborating on international recruitment solutions'
  },
  {
    name: 'Future Skills Institute',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Training Partner',
    description: 'Expert training and skill development programs'
  },
  {
    name: 'HR Analytics Pro',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Analytics Partner',
    description: 'Advanced HR analytics and insights'
  }
];

const benefits = [
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Access to international markets and opportunities'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Cutting-edge solutions and technologies'
  },
  {
    icon: Target,
    title: 'Strategic Growth',
    description: 'Accelerated business expansion'
  },
  {
    icon: HandshakeIcon,
    title: 'Collaboration',
    description: 'Shared expertise and resources'
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Partners</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Building strong partnerships for innovative HR solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partners</h2>
              <p className="text-lg text-gray-600">
                Collaborating with industry leaders to deliver excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                        <p className="text-sm text-[#e31e24]">{partner.type}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4 text-[#e31e24] hover:text-white hover:bg-[#e31e24] group"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
              <p className="text-lg text-gray-600">
                Unlock growth opportunities through strategic collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#e31e24]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Process</h2>
              <p className="text-lg text-gray-600">
                Simple steps to establish a successful partnership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Initial Contact',
                  description: 'Reach out to discuss partnership opportunities'
                },
                {
                  step: '02',
                  title: 'Assessment',
                  description: 'Evaluate mutual benefits and alignment'
                },
                {
                  step: '03',
                  title: 'Agreement',
                  description: 'Finalize partnership terms and conditions'
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'Launch and grow the partnership'
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-[#e31e24]/10 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e31e24]">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our network of strategic partners and grow together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                Partnership Guide
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