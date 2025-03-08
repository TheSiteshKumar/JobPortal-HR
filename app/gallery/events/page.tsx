'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Calendar, Users } from 'lucide-react';

const events = [
  {
    title: 'Annual Conference 2023',
    date: 'December 15, 2023',
    description: 'Our annual conference bringing together industry leaders and experts.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80',
    attendees: 200
  },
  {
    title: 'HR Tech Summit',
    date: 'October 5, 2023',
    description: 'Exploring the latest innovations in HR technology.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2000&q=80',
    attendees: 150
  },
  {
    title: 'Employee Awards Night',
    date: 'September 20, 2023',
    description: 'Celebrating excellence and outstanding achievements.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80',
    attendees: 300
  },
  {
    title: 'Leadership Summit',
    date: 'August 12, 2023',
    description: 'Strategic planning and leadership development workshop.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80',
    attendees: 80
  }
];

export default function CorporateEventsPage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Corporate Events</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Highlights from our most memorable corporate gatherings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees} Attendees
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button className="bg-[#e31e24] hover:bg-[#c91920] text-white">
                      View Gallery
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}