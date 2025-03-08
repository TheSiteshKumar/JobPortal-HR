'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HomeIcon, Briefcase, HeadphonesIcon, ClipboardListIcon, UserIcon, Building2, CarIcon, ChefHatIcon, WrenchIcon, CodeIcon, ShoppingBagIcon } from 'lucide-react';

const jobCategories = [
  {
    title: 'Work from Home',
    icon: HomeIcon,
    activeJobs: 78,
    isNew: true,
  },
  {
    title: 'Accountant',
    icon: Briefcase,
    activeJobs: 987,
  },
  {
    title: 'BPO / Customer Care',
    icon: HeadphonesIcon,
    activeJobs: 2955,
  },
  {
    title: 'Data Entry / Back Office',
    icon: ClipboardListIcon,
    activeJobs: 2616,
  },
  {
    title: 'Sales / Marketing',
    icon: UserIcon,
    activeJobs: 873,
  },
  {
    title: 'Receptionist / Front Office',
    icon: UserIcon,
    activeJobs: 57,
  },
  {
    title: 'Hospitality Executives',
    icon: Building2,
    activeJobs: 26,
  },
  {
    title: 'Delivery',
    icon: CarIcon,
    activeJobs: 17,
  },
  {
    title: 'Cook / Chef',
    icon: ChefHatIcon,
    activeJobs: 16,
  },
  {
    title: 'Driver',
    icon: CarIcon,
    activeJobs: 0,
  },
  {
    title: 'Beauticians / Spa',
    icon: UserIcon,
    activeJobs: 5,
  },
  {
    title: 'Mechanic',
    icon: WrenchIcon,
    activeJobs: 41,
    isNew: true,
  },
  {
    title: 'IT Software Engineer',
    icon: CodeIcon,
    activeJobs: 845,
    isNew: true,
  },
  {
    title: 'Retail / Store Executive',
    icon: ShoppingBagIcon,
    activeJobs: 48,
    isNew: true,
  },
];

export function JobCategories() {
  return (
    <section id="top-roles" className="py-16 bg-gray-50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Job Roles</h2>
              <p className="text-gray-600 mt-2">Explore opportunities across various industries</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="hidden md:flex">
                Browse All Categories
              </Button>
              <Select>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {jobCategories.map((category, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  {category.isNew && (
                    <Badge className="absolute top-2 right-2 bg-red-500">New</Badge>
                  )}
                  <div className="mb-4 p-3 bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-200">
                    <category.icon className="w-6 h-6 text-gray-600 group-hover:text-[#e31e24] transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-[#e31e24]">
                    {category.activeJobs.toLocaleString()} Active Jobs
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">Browse All Categories</Button>
          </div>
        </div>
      </div>
    </section>
  );
}