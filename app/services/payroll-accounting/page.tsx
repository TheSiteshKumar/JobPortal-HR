'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Calculator,
  FileText,
  Shield,
  Clock,
  ChartBar,
  Users2,
  Building2,
  CheckCircle,
  LineChart,
  Wallet,
  FileCheck,
  BadgeCheck,
  Settings,
  BookOpen,
  Lock,
  BarChart4,
  HandshakeIcon
} from 'lucide-react';

export default function PayrollAccountingPage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payroll Accounting Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive payroll management solutions to streamline your operations and ensure compliance
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
                icon: Calculator,
                title: 'Accurate Processing',
                description: 'Precise payroll calculations with multi-level verification'
              },
              {
                icon: Shield,
                title: 'Compliance Assured',
                description: 'Up-to-date with latest statutory requirements and regulations'
              },
              {
                icon: Clock,
                title: 'Timely Execution',
                description: 'On-time processing and disbursement of salaries'
              },
              {
                icon: ChartBar,
                title: 'Cost Optimization',
                description: 'Reduced operational costs and improved efficiency'
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

      {/* Service Features */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Service Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Wallet,
                  title: 'Salary Processing',
                  features: [
                    'Accurate salary calculations',
                    'Multiple payment cycles support',
                    'Bank file generation',
                    'Pay slip generation'
                  ]
                },
                {
                  icon: FileCheck,
                  title: 'Statutory Compliance',
                  features: [
                    'PF/ESI management',
                    'Professional tax filing',
                    'TDS calculations',
                    'Returns filing'
                  ]
                },
                {
                  icon: LineChart,
                  title: 'Reporting & Analytics',
                  features: [
                    'Customized MIS reports',
                    'Variance analysis',
                    'Cost center reporting',
                    'Trend analysis'
                  ]
                }
              ].map((service, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 p-3 bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#e31e24]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#e31e24]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {[
              {
                step: '01',
                title: 'Data Collection',
                description: 'Gathering employee data and payroll inputs'
              },
              {
                step: '02',
                title: 'Validation',
                description: 'Multi-level verification of input data'
              },
              {
                step: '03',
                title: 'Processing',
                description: 'Salary calculation and statutory deductions'
              },
              {
                step: '04',
                title: 'Compliance',
                description: 'Statutory compliance and documentation'
              },
              {
                step: '05',
                title: 'Disbursement',
                description: 'Salary transfer and pay slip generation'
              },
              {
                step: '06',
                title: 'Reporting',
                description: 'MIS reports and analytics'
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

      {/* Additional Services */}
      <div className="bg-gray-50 py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: 'Payroll Consulting',
                  description: 'Expert advice on payroll structure optimization and policy development'
                },
                {
                  icon: Lock,
                  title: 'Data Security',
                  description: 'Robust security measures to protect sensitive payroll information'
                },
                {
                  icon: BarChart4,
                  title: 'Expense Management',
                  description: 'Streamlined processing of employee expenses and reimbursements'
                },
                {
                  icon: Settings,
                  title: 'System Integration',
                  description: 'Seamless integration with existing HRMS and accounting systems'
                },
                {
                  icon: HandshakeIcon,
                  title: 'Vendor Management',
                  description: 'Coordination with banks and other service providers'
                },
                {
                  icon: BadgeCheck,
                  title: 'Audit Support',
                  description: 'Comprehensive support during internal and statutory audits'
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
      </div>

      {/* Compliance Coverage */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Statutory Compliance</h3>
              <ul className="space-y-3">
                {[
                  'Provident Fund (PF) management',
                  'Employee State Insurance (ESI)',
                  'Professional Tax compliance',
                  'Labor law compliance'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#e31e24] mt-0.5" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Tax Compliance</h3>
              <ul className="space-y-3">
                {[
                  'TDS calculation and deposit',
                  'Form 16/16A generation',
                  'Quarterly TDS returns',
                  'Annual returns filing'
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

      {/* CTA Section */}
      <div className="bg-[#e31e24] text-white py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Payroll?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle your payroll while you focus on growing your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-[#e31e24] hover:bg-gray-100">
                Request Demo
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