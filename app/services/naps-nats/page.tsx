'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  GraduationCap,
  BookOpen,
  Trophy,
  Target,
  Users2,
  Building2,
  Briefcase,
  FileCheck,
  HandshakeIcon,
  ScrollText,
  BadgeCheck,
  Lightbulb,
  Brain,
  Award,
  CheckCircle,
  Settings,
  LineChart
} from 'lucide-react';

export default function NapsNatsPage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NAPS/NATS Implementation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for National Apprenticeship Promotion Scheme (NAPS) and National Apprenticeship Training Scheme (NATS) implementation
            </p>
          </div>
        </div>
      </div>

      {/* Scheme Overview */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#e31e24]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NAPS</h3>
              <p className="text-gray-600 mb-4">
                The National Apprenticeship Promotion Scheme is a government initiative to promote apprenticeship training, offering financial incentives to employers for engaging apprentices.
              </p>
              <ul className="space-y-2">
                {[
                  'Government shares 25% of prescribed stipend',
                  'Basic training cost support up to ₹7,500',
                  'Applicable for all sectors',
                  'Promotes skill development'
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#e31e24]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#e31e24]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NATS</h3>
              <p className="text-gray-600 mb-4">
                The National Apprenticeship Training Scheme provides opportunities for practical training to graduates and diploma holders in engineering/technology.
              </p>
              <ul className="space-y-2">
                {[
                  'One-year training program',
                  'Monthly stipend support',
                  'Industry exposure',
                  'Skill enhancement opportunities'
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#e31e24]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
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
                icon: Trophy,
                title: 'Skill Development',
                description: 'Enhance workforce capabilities through structured training programs'
              },
              {
                icon: Target,
                title: 'Cost Optimization',
                description: 'Government incentives and support for training implementation'
              },
              {
                icon: BadgeCheck,
                title: 'Compliance Support',
                description: 'Complete assistance with regulatory requirements and documentation'
              },
              {
                icon: Lightbulb,
                title: 'Innovation Focus',
                description: 'Fresh talent bringing new perspectives to your organization'
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

      {/* Implementation Process */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Assessment',
                  description: 'Evaluate organizational needs and scheme applicability'
                },
                {
                  step: '02',
                  title: 'Documentation',
                  description: 'Complete registration and compliance documentation'
                },
                {
                  step: '03',
                  title: 'Program Design',
                  description: 'Develop structured training programs and curricula'
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'Execute training programs with continuous monitoring'
                },
                {
                  step: '05',
                  title: 'Review & Report',
                  description: 'Regular assessment and compliance reporting'
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

      {/* Our Services */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ScrollText,
                title: 'Documentation Support',
                description: 'Complete assistance with registration, contracts, and compliance documents'
              },
              {
                icon: Brain,
                title: 'Training Program Design',
                description: 'Customized curriculum development aligned with industry standards'
              },
              {
                icon: Users2,
                title: 'Apprentice Management',
                description: 'End-to-end management of apprentice recruitment and training'
              },
              {
                icon: LineChart,
                title: 'Performance Monitoring',
                description: 'Regular assessment and progress tracking of apprentices'
              },
              {
                icon: HandshakeIcon,
                title: 'Stakeholder Coordination',
                description: 'Liaison with government bodies and training partners'
              },
              {
                icon: Award,
                title: 'Certification Support',
                description: 'Assistance with final assessment and certification process'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-[#e31e24]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">For Organizations</h3>
                <ul className="space-y-3">
                  {[
                    'Registered under Apprentices Act, 1961',
                    'Valid business registration',
                    'Adequate training infrastructure',
                    'Qualified training supervisors'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e31e24] mt-0.5" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">For Apprentices</h3>
                <ul className="space-y-3">
                  {[
                    'Age between 14-21 years for NAPS',
                    'Engineering graduates/diploma holders for NATS',
                    'Minimum educational qualifications as per trade',
                    'Physical fitness for chosen trade'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e31e24] mt-0.5" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#e31e24] text-white py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Implement NAPS/NATS?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you navigate the apprenticeship implementation process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                Download Information Pack
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