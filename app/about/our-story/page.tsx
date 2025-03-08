'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, Target, Users2, Award, Building2, ChartBar, Globe2, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Established AHRC with a vision to transform HR solutions'
  },
  {
    year: '2012',
    title: 'Market Expansion',
    description: 'Extended operations to major metropolitan cities'
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Launched AI-powered recruitment platform'
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Received multiple awards for HR excellence'
  },
  {
    year: '2020',
    title: 'Global Presence',
    description: 'Expanded operations internationally'
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Launched state-of-the-art innovation center'
  }
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                A Journey of Innovation and Excellence in HR Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 mb-6">
                    To be the global leader in innovative HR solutions, transforming how organizations manage and develop their human capital while creating meaningful career opportunities for professionals worldwide.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                      <span className="text-gray-600">Global leadership in HR solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                      <span className="text-gray-600">Innovation in talent management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                      <span className="text-gray-600">Creating career opportunities</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#e31e24]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To deliver exceptional HR solutions that empower organizations to achieve their full potential through strategic talent acquisition, development, and management, while fostering a culture of innovation and excellence.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24] mt-2" />
                      <span className="text-gray-600">Excellence in service delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24] mt-2" />
                      <span className="text-gray-600">Strategic talent solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24] mt-2" />
                      <span className="text-gray-600">Continuous innovation</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">
                A timeline of growth, innovation, and excellence
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex justify-center">
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'ml-[50%] pl-8'}`}>
                      <Card className="inline-block p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-[#e31e24] mb-2">{milestone.year}</h3>
                        <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-[#e31e24] rounded-full z-10">
                      <div className="h-3 w-3 bg-white rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide our actions and decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users2,
                  title: 'People First',
                  description: 'We prioritize the success and well-being of our clients and employees'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in everything we do'
                },
                {
                  icon: Globe2,
                  title: 'Innovation',
                  description: 'We embrace change and drive innovation in HR solutions'
                },
                {
                  icon: Building2,
                  title: 'Integrity',
                  description: 'We conduct business with the highest ethical standards'
                }
              ].map((value, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-[#e31e24]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of our story as we continue to innovate and transform the HR landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                View Careers
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