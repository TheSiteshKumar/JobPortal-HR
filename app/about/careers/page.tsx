'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Building2, IndianRupee, Briefcase, Clock, Users2, Target, Award, Rocket, Heart, Laptop } from 'lucide-react';

const openings = [
  {
    title: 'Senior HR Consultant',
    department: 'Consulting',
    location: 'Mumbai',
    type: 'Full Time',
    experience: '5-8 years',
    salary: '12-18 LPA',
    posted: '2 days ago',
    urgent: true
  },
  {
    title: 'Technical Recruiter',
    department: 'Recruitment',
    location: 'Bangalore',
    type: 'Full Time',
    experience: '3-5 years',
    salary: '8-12 LPA',
    posted: '1 week ago',
    featured: true
  },
  {
    title: 'HR Analytics Specialist',
    department: 'Analytics',
    location: 'Hyderabad',
    type: 'Full Time',
    experience: '4-6 years',
    salary: '10-15 LPA',
    posted: '3 days ago'
  },
  {
    title: 'Payroll Manager',
    department: 'Operations',
    location: 'Delhi',
    type: 'Full Time',
    experience: '5-7 years',
    salary: '12-16 LPA',
    posted: '1 day ago',
    urgent: true
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Career Growth',
    description: 'Clear career progression paths and development opportunities'
  },
  {
    icon: Award,
    title: 'Learning & Development',
    description: 'Continuous learning through training programs and certifications'
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Comprehensive health insurance for you and your family'
  },
  {
    icon: Laptop,
    title: 'Work Flexibility',
    description: 'Flexible work arrangements and work-life balance'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Build your career with a leader in HR solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search jobs..."
                  className="pl-10"
                />
              </div>
              <Button className="bg-[#e31e24] hover:bg-[#c91920] text-white">
                Search
              </Button>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex gap-2">
                          {job.urgent && (
                            <Badge className="bg-red-100 text-red-600 hover:bg-red-100">Urgent</Badge>
                          )}
                          {job.featured && (
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">Featured</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-4 h-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline">View Details</Button>
                      <Button className="bg-[#e31e24] hover:bg-[#c91920] text-white">Apply Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
              <p className="text-lg text-gray-600">
                Discover the benefits of being part of our team
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

      {/* Culture Section */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-6">
                  At AHRC, we foster a culture of innovation, collaboration, and continuous learning. Our diverse and inclusive workplace encourages creativity and personal growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Team Members', value: '200+' },
                    { label: 'Nationalities', value: '15+' },
                    { label: 'Avg. Tenure', value: '4.5 years' },
                    { label: 'Training Hours/Year', value: '100+' }
                  ].map((stat, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-[#e31e24]">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-15${index + 1}?auto=format&fit=crop&w=400&h=400&q=80`}
                      alt={`Office culture ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e31e24]">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the next step in your career journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                View All Openings
              </Button>
              <Button size="lg" className="bg-[#c91920] hover:bg-[#b31419] text-white">
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}