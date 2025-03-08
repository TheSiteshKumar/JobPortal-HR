'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, Laptop, CodeIcon, Cog, Users2, Database, BrainCircuit, Network, CloudCog, BarChart4, Cpu, Shield, ArrowRight, ChevronLeft, ChevronRight, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const popularRoles = [
  {
    title: 'Full Stack Developer',
    count: '20.8K+',
    icon: Terminal,
    trend: '+12% from last month'
  },
  {
    title: 'Mobile / App Developer',
    count: '2.9K+',
    icon: Laptop,
    trend: '+8% from last month'
  },
  {
    title: 'Front End Developer',
    count: '4.7K+',
    icon: CodeIcon,
    trend: '+15% from last month'
  },
  {
    title: 'DevOps Engineer',
    count: '2.8K+',
    icon: Cog,
    trend: '+20% from last month'
  },
  {
    title: 'Engineering Manager',
    count: '1.5K+',
    icon: Users2,
    trend: '+5% from last month'
  },
  {
    title: 'Technical Lead',
    count: '11.2K+',
    icon: Database,
    trend: '+10% from last month'
  },
  {
    title: 'AI/ML Engineer',
    count: '3.2K+',
    icon: BrainCircuit,
    trend: '+25% from last month'
  },
  {
    title: 'Data Scientist',
    count: '4.1K+',
    icon: Network,
    trend: '+18% from last month'
  },
  {
    title: 'Cloud Architect',
    count: '2.4K+',
    icon: CloudCog,
    trend: '+15% from last month'
  },
  {
    title: 'Data Analyst',
    count: '5.6K+',
    icon: BarChart4,
    trend: '+10% from last month'
  },
  {
    title: 'Embedded Engineer',
    count: '1.8K+',
    icon: Cpu,
    trend: '+7% from last month'
  },
  {
    title: 'Security Engineer',
    count: '2.2K+',
    icon: Shield,
    trend: '+22% from last month'
  }
];

export function PopularRoles() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const totalSlides = Math.ceil(popularRoles.length / 3);

  return (
    <section id="popular-roles" className="py-20 bg-gray-50/50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover jobs across popular roles
              </h2>
              <p className="text-lg text-gray-600">
                Select a role and we'll show you relevant jobs for it! Our AI-powered matching system ensures the perfect fit.
              </p>
              <Button 
                className="mt-6 bg-[#e31e24] hover:bg-[#c91920] text-white"
              >
                View All Roles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="lg:w-2/3 relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {Array.from({ length: Math.ceil(popularRoles.length / 3) }).map((_, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="flex-none w-full grid grid-cols-1 md:grid-cols-3 gap-4 mx-4"
                    >
                      {popularRoles.slice(pageIndex * 3, (pageIndex + 1) * 3).map((role, index) => (
                        <Card 
                          key={index}
                          className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#e31e24]/20"
                        >
                          <div className="p-6">
                            <div className="flex flex-col gap-4">
                              <div className="p-3 bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-200">
                                <role.icon className="w-6 h-6 text-gray-600 group-hover:text-[#e31e24]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-[#e31e24] transition-colors duration-200">
                                  {role.title}
                                </h3>
                                <p className="text-[#e31e24] font-medium mt-1">
                                  {role.count} Jobs
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {role.trend}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                                    style={{
                                      backgroundImage: `url(https://source.unsplash.com/random/100x100?portrait&${i})`,
                                      backgroundSize: 'cover'
                                    }}
                                  />
                                ))}
                              </div>
                              <LineChart className="w-4 h-4 text-green-500" />
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#e31e24] transition-colors duration-200 focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#e31e24] transition-colors duration-200 focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-[#e31e24]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}