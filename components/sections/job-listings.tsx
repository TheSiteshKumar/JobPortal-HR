'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, MapPin, Building2, IndianRupee, Briefcase, Clock, ArrowUpRight, Filter } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Bangalore',
    salary: '25-35 LPA',
    type: 'Full Time',
    experience: '5-8 years',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    posted: '2 days ago',
    urgent: true,
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    title: 'HR Manager',
    company: 'Global Innovations Ltd',
    location: 'Mumbai',
    salary: '18-25 LPA',
    type: 'Full Time',
    experience: '8-12 years',
    skills: ['Talent Acquisition', 'Employee Relations', 'HR Analytics'],
    posted: '1 day ago',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech Systems',
    location: 'Hyderabad',
    salary: '20-30 LPA',
    type: 'Remote',
    experience: '3-6 years',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    posted: '3 days ago',
    urgent: true,
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Delhi NCR',
    salary: '28-40 LPA',
    type: 'Hybrid',
    experience: '6-10 years',
    skills: ['Product Strategy', 'Agile', 'Data Analytics'],
    posted: '5 days ago',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

const locations = ['All Locations', 'Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai'];
const jobTypes = ['All Types', 'Full Time', 'Part Time', 'Contract', 'Remote', 'Hybrid'];
const experienceLevels = ['All Experience', '0-2 years', '2-5 years', '5-8 years', '8+ years'];

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedExperience, setSelectedExperience] = useState('All Experience');

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Job Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities that match your skills and aspirations
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#e31e24] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex gap-2">
                          {job.urgent && (
                            <Badge className="bg-red-100 text-red-600 hover:bg-red-100">Urgent</Badge>
                          )}
                          {job.featured && (
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">Featured</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-4 h-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-100 text-gray-600 hover:bg-gray-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button
                          className="bg-[#e31e24] hover:bg-[#c91920] text-white"
                        >
                          Apply Now <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="ghost" className="text-gray-500">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" className="min-w-[200px]">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}