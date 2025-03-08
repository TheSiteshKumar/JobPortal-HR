"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function DirectorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Director's Desk
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                A Message from Our Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="order-1">
                  <div className="sticky top-24">
                    <div className="aspect-square rounded-xl overflow-hidden mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                        alt="Koushik Bhattacharyya - Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Card className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Quick Links
                      </h3>
                      <div className="space-y-2">
                        <Link href="/about">
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-600 hover:text-[#e31e24]"
                          >
                            About AHRC
                          </Button>
                        </Link>
                        <Link href="/about/chairman">
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-600 hover:text-[#e31e24]"
                          >
                            Chairman's Desk
                          </Button>
                        </Link>
                        <Link href="/services">
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-600 hover:text-[#e31e24]"
                          >
                            Our Services
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="lg:col-span-2 order-2">
                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="text-xl font-medium text-gray-900 mb-6">
                      Dear Friends,
                    </p>
                    <p className="mb-4">
                      Greetings from Ascensive HR Consultants (AHRC), where
                      talent meets opportunity and aspirations take flight. As
                      the Director of this dynamic staffing organisation, it is
                      my pleasure to extend a warm greeting to all our clients,
                      partners, and the talented individuals who form the
                      backbone of our success.
                    </p>
                    <p className="mb-4">
                      In today's rapidly evolving business landscape, we
                      understand the critical role that human capital plays in
                      organizational success. Our commitment to excellence,
                      coupled with our innovative approach to HR solutions, has
                      enabled us to create lasting value for our stakeholders.
                    </p>
                    <p className="mb-4">
                      At AHRC, we believe in building long-term partnerships
                      based on trust, transparency, and mutual growth. Our
                      comprehensive suite of services is designed to address the
                      diverse needs of modern businesses, from talent
                      acquisition to workforce management and beyond.
                    </p>
                    <p className="mb-4">
                      Innovation is at the heart of everything we do. We
                      continuously invest in technology and processes to enhance
                      our service delivery and create better outcomes for our
                      clients. Our team of experienced professionals brings deep
                      industry knowledge and a commitment to excellence in every
                      engagement.
                    </p>
                    <p className="mb-6">
                      We look forward to continuing our journey of excellence
                      and innovation, helping businesses thrive through
                      strategic HR partnerships. Thank you for your trust in
                      AHRC.
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            Koushik Bhattacharyya
                          </p>
                          <p className="text-[#e31e24] font-medium">Director</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Ascensive HR Consultants Pvt. Ltd.
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-[#e31e24] transition-colors"
                            aria-label="LinkedIn profile"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                          <a
                            href="mailto:director@ahrc.com"
                            className="text-gray-400 hover:text-[#e31e24] transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
