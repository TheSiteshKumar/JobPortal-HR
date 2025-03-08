'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Users2, 
  Target, 
  TrendingUp, 
  Clock, 
  Building2, 
  Shield, 
  FileCheck, 
  Handshake,
  Search,
  UserCheck,
  Award,
  Briefcase,
  LineChart,
  Settings,
  CheckCircle
} from 'lucide-react';

export default function DirectPlacementPage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Direct Placement Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect permanent talent for your organization with our comprehensive direct placement services.
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Expert Talent Search',
                description: 'Access to a vast network of pre-screened, qualified candidates'
              },
              {
                icon: UserCheck,
                title: 'Perfect Match',
                description: 'Advanced matching algorithms to ensure cultural and skill fit'
              },
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: 'Thorough vetting process with replacement guarantee'
              },
              {
                icon: Clock,
                title: 'Quick Turnaround',
                description: 'Efficient hiring process with rapid candidate presentation'
              }
            ].map((benefit, index) => (
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

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Recruitment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Requirements Analysis',
                  description: 'In-depth understanding of your hiring needs and company culture'
                },
                {
                  step: '02',
                  title: 'Candidate Sourcing',
                  description: 'Strategic talent search using multiple channels and our vast network'
                },
                {
                  step: '03',
                  title: 'Screening & Assessment',
                  description: 'Rigorous evaluation process including technical and cultural fit assessment'
                },
                {
                  step: '04',
                  title: 'Placement & Follow-up',
                  description: 'Smooth onboarding support and regular follow-ups'
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
      </div>

      {/* Industry Expertise */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Technology & IT',
                description: 'From software developers to IT managers, we source the best tech talent'
              },
              {
                icon: LineChart,
                title: 'Finance & Banking',
                description: 'Expert placement for finance professionals and banking executives'
              },
              {
                icon: Settings,
                title: 'Manufacturing',
                description: 'Technical and managerial roles for manufacturing sector'
              },
              {
                icon: Briefcase,
                title: 'Sales & Marketing',
                description: 'Top performers in sales, marketing, and business development'
              },
              {
                icon: Award,
                title: 'Healthcare',
                description: 'Specialized recruitment for healthcare professionals'
              },
              {
                icon: Users2,
                title: 'HR & Operations',
                description: 'Strategic hiring for HR and operations management'
              }
            ].map((industry, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-[#e31e24]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Direct Placement Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Extensive Network',
                  description: 'Access to a vast pool of pre-screened candidates across industries'
                },
                {
                  title: 'Industry Expertise',
                  description: 'Deep understanding of various sectors and their specific requirements'
                },
                {
                  title: 'Quality Assurance',
                  description: 'Rigorous screening process ensuring only the best candidates'
                },
                {
                  title: 'Cost-Effective',
                  description: 'Competitive pricing with excellent ROI on your recruitment investment'
                },
                {
                  title: 'Time Savings',
                  description: 'Efficient process reducing time-to-hire significantly'
                },
                {
                  title: 'Long-term Success',
                  description: 'Focus on cultural fit for lasting placements'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-[#e31e24]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#e31e24] text-white py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Hire?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you build your dream team with top talent
            </p>
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
      </div>
    </div>
  );
}