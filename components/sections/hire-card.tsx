'use client';

import { Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HireCard() {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-5 md:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Hire Top Talent</h2>
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 lg:mb-8">
        Access our curated pool of pre-screened candidates and revolutionize your hiring process.
      </p>
      
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 bg-red-50 rounded-lg shrink-0">
            <Users className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#e31e24]" />
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-sm md:text-base">Smart Matching</h3>
            <p className="text-xs md:text-sm text-gray-600">AI-powered candidate matching with 95% accuracy</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 bg-red-50 rounded-lg shrink-0">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#e31e24]" />
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-sm md:text-base">Quality Guaranteed</h3>
            <p className="text-xs md:text-sm text-gray-600">Pre-screened candidates ready for interviews</p>
          </div>
        </div>
      </div>
      
      <Button className="w-full mt-4 md:mt-6 lg:mt-8 bg-[#e31e24] hover:bg-[#c91920] text-white h-11 md:h-12 text-sm md:text-base">
        Start Hiring Now
      </Button>
    </div>
  );
}