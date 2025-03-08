'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users2, Target, TrendingUp, Clock, Building2, Shield, FileCheck, HandshakeIcon } from 'lucide-react';

export default function FlexiStaffingPage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexi Staffing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your workforce efficiently with our flexible staffing solutions. Get access to skilled temporary staff when you need them.
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
                icon: Target,
                title: 'Rapid Scaling',
                description: 'Quickly scale your workforce up or down based on business demands'
              },
              {
                icon: Clock,
                title: 'Time Efficiency',
                description: 'Save time with pre-screened candidates ready to start immediately'
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Reduce employment risks with compliant staffing solutions'
              },
              {
                icon: TrendingUp,
                title: 'Cost Optimization',
                description: 'Optimize staffing costs while maintaining productivity'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Requirements Analysis',
                  description: 'We analyze your staffing needs and create a customized plan'
                },
                {
                  step: '02',
                  title: 'Candidate Selection',
                  description: 'Our experts select and screen the best candidates for your needs'
                },
                {
                  step: '03',
                  title: 'Deployment & Support',
                  description: 'Quick deployment with ongoing support and management'
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

      {/* Features */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users2,
                title: 'Temporary Staffing',
                description: 'Access skilled temporary staff for short-term projects and seasonal demands'
              },
              {
                icon: Building2,
                title: 'Contract Workers',
                description: 'Hire specialized contractors for specific projects or roles'
              },
              {
                icon: Clock,
                title: 'Quick Scaling',
                description: 'Rapidly scale your workforce up or down based on business needs'
              },
              {
                icon: Shield,
                title: 'Compliance Management',
                description: 'Ensure all staffing arrangements meet legal and regulatory requirements'
              },
              {
                icon: FileCheck,
                title: 'Performance Tracking',
                description: 'Monitor and evaluate temporary staff performance effectively'
              },
              {
                icon: HandshakeIcon,
                title: 'Dedicated Support',
                description: '24/7 support for all your staffing needs and concerns'
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#e31e24]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#e31e24] text-white py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Workforce?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our flexible staffing solutions today
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