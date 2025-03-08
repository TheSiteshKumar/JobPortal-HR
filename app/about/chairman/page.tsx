"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ChairmanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80")',
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
                Chairman's Desk
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                A Message from Our Chairman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="text-xl font-medium text-gray-900 mb-6">
                      Dear esteemed colleagues, partners, and patrons,
                    </p>
                    <p className="mb-4">
                      In our ever-evolving world of business, the driving force
                      behind every innovation, every progress, and every leap we
                      make is human capital. At Ascensive HR Consultant Pvt Ltd
                      (AHRC), we have always been at the forefront of nurturing
                      talent and fostering growth.
                    </p>
                    <p className="mb-4">
                      Our journey has been marked by continuous innovation,
                      unwavering commitment to excellence, and a deep
                      understanding of the evolving needs of both businesses and
                      professionals. We take pride in our role as catalysts of
                      growth, helping organizations build strong teams and
                      individuals realize their potential.
                    </p>
                    <p className="mb-4">
                      In today's dynamic business landscape, the importance of
                      efficient human resource management cannot be overstated.
                      Organizations need partners who understand their unique
                      challenges and can provide tailored solutions. This is
                      where AHRC steps in, offering comprehensive HR solutions
                      that drive organizational success.
                    </p>
                    <p className="mb-4">
                      Our approach combines industry expertise with
                      technological innovation, ensuring that we deliver value
                      at every step. From talent acquisition to workforce
                      management, our solutions are designed to meet the
                      evolving needs of modern businesses.
                    </p>
                    <p className="mb-6">
                      As we look to the future, we remain committed to our
                      mission of transforming the HR landscape through
                      technology-driven solutions and personalized service
                      excellence. We invite you to partner with us in this
                      journey of growth and success.
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            Abhijit Chatterjee
                          </p>
                          <p className="text-[#e31e24] font-medium">
                            Chairman & CEO
                          </p>
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
                            href="mailto:chairman@ahrc.com"
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
                <div className="order-1 lg:order-2">
                  <div className="sticky top-24">
                    <div className="aspect-square rounded-xl overflow-hidden mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                        alt="Abhijit Chatterjee - Chairman & CEO"
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
                        <Link href="/about/director">
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-600 hover:text-[#e31e24]"
                          >
                            Director's Desk
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
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
