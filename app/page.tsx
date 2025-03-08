'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { JobCategories } from '@/components/sections/job-categories';
import { PopularRoles } from '@/components/sections/popular-roles';
import { Services } from '@/components/sections/services';
import { Leadership } from '@/components/sections/leadership';
import { JobListings } from '@/components/sections/job-listings';
import { Testimonials } from '@/components/sections/testimonials';
import { Clients } from '@/components/sections/clients';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <JobCategories />
      <PopularRoles />
      <JobListings />
      <Services />
      <Leadership />
      <Testimonials />
      <Clients />
      <ContactSection />
    </>
  );
}