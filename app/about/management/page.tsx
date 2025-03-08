"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Users2, Target, Award, Building2 } from "lucide-react";
import Link from "next/link";

const managementTeam = [
  {
    name: "Your Name",
    position: "Chairman and CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    description: "Leading AHRC with vision and innovation",
    bio: "With over 25 years of experience in HR and business leadership, Abhijit has been instrumental in establishing AHRC as a leading HR solutions provider.",
    expertise: [
      "Strategic Leadership",
      "Business Development",
      "Organizational Development",
    ],
    social: {
      linkedin: "#",
      email: "mailto:chairman@ahrc.com",
    },
    link: "/about/chairman",
  },
  {
    name: "Another Name",
    position: "Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    description: "Spearheading strategic initiatives",
    bio: "Koushik brings 20+ years of expertise in HR consulting and talent management, driving innovation in HR solutions.",
    expertise: ["HR Strategy", "Talent Management", "Business Operations"],
    social: {
      linkedin: "#",
      email: "mailto:director@ahrc.com",
    },
    link: "/about/director",
  },
  {
    name: "Priya Sharma",
    position: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description: "Managing operations and delivery excellence",
    bio: "Priya oversees the operational excellence of AHRC, ensuring seamless service delivery and client satisfaction.",
    expertise: [
      "Operations Management",
      "Process Optimization",
      "Client Relations",
    ],
    social: {
      linkedin: "#",
      email: "mailto:coo@ahrc.com",
    },
  },
  {
    name: "Rajesh Kumar",
    position: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    description: "Driving technological innovation",
    bio: "Rajesh leads the technology initiatives at AHRC, implementing cutting-edge solutions for HR management.",
    expertise: ["Technology Strategy", "Digital Transformation", "Innovation"],
    social: {
      linkedin: "#",
      email: "mailto:cto@ahrc.com",
    },
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80")',
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
                Management Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries driving our mission forward
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Users2,
                  label: "Combined Experience",
                  value: "75+ Years",
                },
                { icon: Target, label: "Projects Delivered", value: "1000+" },
                { icon: Award, label: "Industry Awards", value: "25+" },
                {
                  icon: Building2,
                  label: "Global Presence",
                  value: "10+ Countries",
                },
              ].map((stat, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <stat.icon className="w-6 h-6 text-[#e31e24]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementTeam.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      <div className="md:w-1/3">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-[#e31e24] font-medium">
                            {member.position}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {member.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-[#e31e24] transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={member.social.email}
                            className="text-gray-400 hover:text-[#e31e24] transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <p className="text-gray-600 mb-4">{member.bio}</p>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">
                            Areas of Expertise:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        {member.link && (
                          <Link href={member.link}>
                            <Button
                              variant="link"
                              className="mt-4 text-[#e31e24] hover:text-[#c91920] p-0 h-auto"
                            >
                              View Full Profile →
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e31e24]">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of a dynamic team driving innovation in HR solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#e31e24] hover:bg-gray-100"
              >
                View Open Positions
              </Button>
              <Button
                size="lg"
                className="bg-[#c91920] hover:bg-[#b31419] text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
