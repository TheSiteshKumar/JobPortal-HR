'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Ascensive HR has transformed our hiring process. Their AI-powered matching system helped us find perfect candidates quickly and efficiently.",
    author: "Sarah Chen",
    position: "Head of Talent Acquisition",
    company: "TechVision Global",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    companyLogo: "https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    quote: "The level of professionalism and understanding of our industry-specific needs sets them apart. They've become an invaluable partner in our growth journey.",
    author: "Michael Rodriguez",
    position: "CEO",
    company: "InnovateTech Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    quote: "Their comprehensive HR solutions have streamlined our operations and improved employee satisfaction significantly. A true game-changer for our organization.",
    author: "Priya Sharma",
    position: "HR Director",
    company: "Global Innovations Ltd",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
    companyLogo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 4,
    quote: "The talent pool they provided was exceptional. Each candidate was thoroughly vetted and matched our requirements perfectly. Highly recommended!",
    author: "David Park",
    position: "CTO",
    company: "FutureTech Systems",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                    <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300">
                      <div className="p-6 md:p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <Quote className="w-10 h-10 text-[#e31e24]/20" />
                        </div>
                        
                        <p className="text-gray-600 mb-6 flex-grow">
                          "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.position}
                            </p>
                          </div>

                          <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img
                              src={testimonial.companyLogo}
                              alt={testimonial.company}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mt-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-current text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
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

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
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