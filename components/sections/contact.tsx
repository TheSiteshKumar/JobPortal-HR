'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Upload, FileText, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 lg:p-8 flex flex-col justify-center h-full">
              <div className="max-w-lg mx-auto w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Get In Touch, Say Hello!</h2>
                <p className="text-gray-600 mb-6 md:mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-11 md:h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="h-11 md:h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-11 md:h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[100px] md:min-h-[120px] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-11 md:h-12 bg-[#e31e24] hover:bg-[#c91920] text-white"
                  >
                    Send Message
                  </Button>
                </form>

                {/* Divider with "or" */}
                <div className="relative my-6 md:my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">or</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center items-center gap-4 md:gap-6">
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-50 hover:bg-[#e31e24] transition-colors duration-200 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-50 hover:bg-[#e31e24] transition-colors duration-200 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-50 hover:bg-[#e31e24] transition-colors duration-200 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-50 hover:bg-[#e31e24] transition-colors duration-200 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between h-full space-y-6 md:space-y-8">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Contact Information</h3>
                  <div className="space-y-4 md:space-y-6">
                    <a href="mailto:connect.ahrc@aimetr.com" className="flex items-start gap-3 md:gap-4 group">
                      <div className="p-2.5 md:p-3 rounded-lg bg-red-50 group-hover:bg-[#e31e24] transition-colors duration-200">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#e31e24] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email Us</p>
                        <p className="text-gray-600 text-sm md:text-base">connect.ahrc@aimetr.com</p>
                      </div>
                    </a>

                    <a href="tel:6292318395" className="flex items-start gap-3 md:gap-4 group">
                      <div className="p-2.5 md:p-3 rounded-lg bg-red-50 group-hover:bg-[#e31e24] transition-colors duration-200">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#e31e24] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Call Us</p>
                        <p className="text-gray-600 text-sm md:text-base">+91 6292318395</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2.5 md:p-3 rounded-lg bg-red-50">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#e31e24]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Visit Us</p>
                        <p className="text-gray-600 text-sm md:text-base">
                          The Meridian, 6th floor, Room No. 04, Block EP and GP,
                          <br />
                          Premises No. E-2/5, Sector-V, Salt Lake City,
                          <br />
                          Beside Webel Bhavan, Kolkata-700091
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Quick Links</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Link href="/upload-resume">
                      <Button 
                        variant="outline"
                        className="w-full justify-between hover:bg-[#e31e24] hover:text-white group h-12 md:h-14"
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <Upload className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-sm md:text-base">Upload your <span className="text-[#e31e24] group-hover:text-white">RESUME</span></span>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </Button>
                    </Link>

                    <Button 
                      variant="outline"
                      className="w-full justify-between hover:bg-[#e31e24] hover:text-white group h-12 md:h-14"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <FileText className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base">View <span className="text-[#e31e24] group-hover:text-white">Job Opportunities</span></span>
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[250px] md:h-[300px] rounded-xl overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.262923939712!2d88.43349247475705!3d22.56926763309349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f836e41783%3A0x7db5a375e474f29!2sAscensive%20HR%20Consultants%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738024261840!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}