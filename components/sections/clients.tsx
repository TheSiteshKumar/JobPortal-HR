'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const clients = [
  {
    name: 'Delhivery',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Blue Dart',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'BigBasket',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Blinkit',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'City Style',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Amazon',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Flipkart',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Myntra',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Swiggy',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  },
  {
    name: 'Zomato',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/07/delhivery-logo.jpg'
  }
];

const AUTOPLAY_INTERVAL = 3000;

export function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    let intervalId: NodeJS.Timeout | null = null;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const startAutoplay = () => {
      intervalId = setInterval(autoplay, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
      if (intervalId) clearInterval(intervalId);
    };

    // Start autoplay
    startAutoplay();

    // Stop autoplay on user interaction
    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off('pointerDown', stopAutoplay);
      emblaApi.off('pointerUp', startAutoplay);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Valuable Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </div>

          <div className="relative px-4 mb-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8 py-4">
                {clients.map((client, index) => (
                  <div 
                    key={index}
                    className="flex-[0_0_200px] min-w-0 relative group"
                  >
                    <div className="relative h-24 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#e31e24]/20">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-auto h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full w-10 h-10 border border-gray-200 hover:bg-[#e31e24] hover:text-white transition-colors ${
                  !prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous clients"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button 
                variant="outline" 
                className="min-w-[200px] hover:bg-[#e31e24] hover:text-white transition-colors"
              >
                View All Clients
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`rounded-full w-10 h-10 border border-gray-200 hover:bg-[#e31e24] hover:text-white transition-colors ${
                  !nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next clients"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}