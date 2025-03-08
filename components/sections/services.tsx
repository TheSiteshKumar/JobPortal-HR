'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users2, UserPlus, GraduationCap, Calculator } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Flexi Staffing',
    description: 'Flexible workforce solutions to meet your dynamic business needs. Scale your team up or down with skilled temporary staff.',
    icon: Users2,
    features: ['Temporary staffing', 'Contract workers', 'Seasonal workforce', 'Quick scaling'],
    link: '/services/flexi-staffing'
  },
  {
    title: 'Direct Placement',
    description: 'End-to-end permanent recruitment solutions for mid to senior-level positions across industries.',
    icon: UserPlus,
    features: ['Permanent hiring', 'Executive search', 'Industry specialists', 'Talent assessment'],
    link: '/services/direct-placement'
  },
  {
    title: 'NAPS/NATS',
    description: 'National Apprenticeship Promotion Scheme (NAPS) and National Apprenticeship Training Scheme (NATS) implementation.',
    icon: GraduationCap,
    features: ['Apprenticeship programs', 'Training coordination', 'Government compliance', 'Skill development'],
    link: '/services/naps-nats'
  },
  {
    title: 'Payroll Accounting',
    description: 'Comprehensive payroll management and accounting services for businesses of all sizes.',
    icon: Calculator,
    features: ['Payroll processing', 'Tax compliance', 'Benefits administration', 'Statutory reporting'],
    link: '/services/payroll-accounting'
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive HR solutions tailored to meet your business needs and drive organizational success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-red-50 rounded-lg w-14 h-14 flex items-center justify-center group-hover:bg-[#e31e24] transition-colors duration-200">
                    <service.icon className="w-7 h-7 text-[#e31e24] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href={service.link}>
                      <Button 
                        variant="ghost" 
                        className="w-full text-[#e31e24] hover:text-white hover:bg-[#e31e24] transition-colors duration-200"
                      >
                        Learn More
                      </Button>
                    </Link>
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