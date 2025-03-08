// components/ui/navigation/menuItems.tsx

// Jobs Sub-Menu
export const jobsItems = [
  {
    id: 'search-jobs',
    label: 'Search Jobs',
    href: '/jobs/search',
    icon: 'Search'
  },
  {
    id: 'jobs-by-location',
    label: 'Jobs by Location',
    href: '/jobs/location',
    icon: 'MapPin'
  },
  {
    id: 'jobs-by-company',
    label: 'Jobs by Company',
    href: '/jobs/company',
    icon: 'Building2'
  },
  {
    id: 'featured-jobs',
    label: 'Featured Jobs',
    href: '/jobs/featured',
    icon: 'Star'
  }
];

// About Sub-Menu
export const aboutItems = [
  {
    id: 'our-story',
    label: 'Our Story',
    href: '/about/our-story',
    icon: 'BookOpen'
  },
  {
    id: 'management',
    label: 'Management Team',
    href: '/about/management',
    icon: 'Users2'
  },
  {
    id: 'chairman',
    label: "Chairman's Desk",
    href: '/about/chairman',
    icon: 'UserPlus'
  },
  {
    id: 'director',
    label: "Director's Desk",
    href: '/about/director',
    icon: 'User'
  },
  {
    id: 'awards',
    label: 'Awards',
    href: '/about/awards',
    icon: 'Award'
  },
  {
    id: 'partners',
    label: 'Partners',
    href: '/about/partners',
    icon: 'Handshake'
  },
  {
    id: 'careers',
    label: 'Careers',
    href: '/about/careers',
    icon: 'Briefcase'
  }
];

// Services Sub-Menu
export const servicesItems = [
  {
    id: 'flexi-staffing',
    label: 'Flexi Staffing',
    href: '/services/flexi-staffing',
    icon: 'Users'
  },
  {
    id: 'direct-placement',
    label: 'Direct Placement',
    href: '/services/direct-placement',
    icon: 'UserPlus'
  },
  {
    id: 'naps-nats',
    label: 'NAPS/NATS',
    href: '/services/naps-nats',
    icon: 'GraduationCap'
  },
  {
    id: 'payroll-accounting',
    label: 'Payroll Accounting',
    href: '/services/payroll-accounting',
    icon: 'Calculator'
  }
];

// Gallery Sub-Menu
export const galleryItems = [
  {
    id: 'corporate-events',
    label: 'Corporate Events',
    href: '/gallery/events',
    icon: 'Calendar'
  },
  {
    id: 'office-life',
    label: 'Office Life',
    href: '/gallery/office',
    icon: 'Building'
  },
  {
    id: 'video-gallery',
    label: 'Video Gallery',
    href: '/gallery/videos',
    icon: 'Video'
  },
  {
    id: 'media-coverage',
    label: 'Media Coverage',
    href: '/gallery/media',
    icon: 'Newspaper'
  }
];

// Main Menu Configuration
export const menuItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: 'Home'
  },
  {
    id: 'jobs',
    label: 'Jobs',
    href: '#',
    icon: 'Briefcase',
    children: jobsItems
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: 'Info',
    children: aboutItems
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    icon: 'Settings',
    children: servicesItems
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/gallery',
    icon: 'Image',
    children: galleryItems
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    icon: 'Phone'
  }
];