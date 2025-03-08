'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Building2, Users2, GraduationCap, Calculator, Code } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Ascensive HR</h3>
              <p className="text-sm leading-relaxed">
                Transform your workforce with our innovative HR solutions. We connect talent with opportunity, fostering growth and success.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-[#e31e24] transition-colors duration-200 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#e31e24] transition-colors duration-200 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    Our Services
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e31e24] transition-colors duration-200 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    Job Openings
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#e31e24] transition-colors duration-200 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e31e24] transition-colors duration-200 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Users2 className="w-4 h-4 text-[#e31e24]" />
                  Flexi Staffing
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-[#e31e24]" />
                  Direct Placement
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-[#e31e24]" />
                  NAPS/NATS
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Calculator className="w-4 h-4 text-[#e31e24]" />
                  Payroll Accounting
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Stay updated with our latest opportunities and news.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-[#e31e24] hover:bg-[#c91920] text-white">
                  Subscribe
                </Button>
              </div>
              <div className="mt-6 space-y-3">
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-sm hover:text-[#e31e24] transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  contact@example.com
                </a>
                <a href="tel:9876543210" className="flex items-center gap-2 text-sm hover:text-[#e31e24] transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  +91 9876543210
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Near Infotech Plaza, Bengaluru-560102</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-sm text-center md:text-left">
                © {new Date().getFullYear()} Ascensive HR Consultants Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="px-2">|</span>
                <Code className="w-4 h-4 text-[#e31e24]" />
                <span className="px-2">Developed by</span>
                <a 
                  href="https://siteshkumar.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#e31e24] hover:text-white transition-colors duration-200 font-medium"
                >
                  Sitesh Kumar
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#e31e24] transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}