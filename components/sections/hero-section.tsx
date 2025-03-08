"use client";

import { Search, MapPin, Building2, Users, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HireCard } from "./hire-card";

export function HeroSection() {
  return (
    <section id="find-jobs" className="relative min-h-[calc(100vh-64px)] mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center py-8 md:py-12">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Find Your Dream Career
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 text-gray-200">
                Connect directly with leading companies and access thousands of
                exclusive job opportunities. Your next career move starts here.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full mb-4">
                <Button
                  size="lg"
                  className="bg-[#e31e24] hover:bg-[#c91920] text-white h-11 md:h-12 px-6 md:px-8 text-sm md:text-base w-full sm:w-1/2"
                >
                  Find Dream Job
                </Button>

                <Link href="/upload-resume" className="w-full sm:w-1/2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-[#e31e24] border-[#e31e24] hover:bg-[#e31e24] hover:text-white h-11 md:h-12 px-6 md:px-8 flex items-center gap-2 group text-sm md:text-base w-full"
                  >
                    <Upload className="h-4 w-4 md:h-5 md:w-5 text-[#e31e24] group-hover:text-white" />
                    Upload Resume
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">10k+ Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">50k+ Jobs</span>
                </div>
              </div>

              {/* Search Box */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-1 border-b sm:border-b-0 sm:border-r border-gray-200">
                    <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                    <Input
                      placeholder="Enter skills / designations / companies"
                      className="border-0 h-12 md:h-14 pl-10 md:pl-12 pr-4 text-sm md:text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="border-b sm:border-b-0 sm:border-r border-gray-200">
                      <Select>
                        <SelectTrigger className="border-0 h-12 md:h-14 w-full sm:w-[180px] md:w-[200px] focus:ring-0 text-sm md:text-base">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 shrink-0" />
                            <SelectValue placeholder="Select location" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      size="lg"
                      className="h-12 md:h-14 px-6 md:px-8 bg-[#e31e24] hover:bg-[#c91920] text-white rounded-none sm:rounded-r-lg text-sm md:text-base"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <HireCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
