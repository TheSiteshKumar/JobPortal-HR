'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Heart } from 'lucide-react';

const photos = [
  {
    title: 'Team Building Activities',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    description: 'Building stronger bonds through fun activities'
  },
  {
    title: 'Office Celebrations',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
    description: 'Celebrating milestones and achievements together'
  },
  {
    title: 'Collaborative Workspace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    description: 'Our modern and inspiring work environment'
  },
  {
    title: 'Training Sessions',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
    description: 'Continuous learning and development'
  },
  {
    title: 'Casual Friday',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80',
    description: 'Embracing work-life balance'
  },
  {
    title: 'Brainstorming Sessions',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80',
    description: 'Innovation through collaboration'
  }
];

export default function OfficeLifePage() {
  return (
    <div className="py-16 md:py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Office Life</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                A glimpse into our vibrant workplace culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        className="text-white border-white hover:bg-white hover:text-gray-900"
                      >
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-600">{photo.description}</p>
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