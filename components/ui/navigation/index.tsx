'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Upload, Menu, X, ChevronDown, Home, Briefcase, Info, Settings, Image, Phone } from 'lucide-react';
import { menuItems } from './menuItems';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubMenu = (menuId: string) => {
    setOpenSubMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Home: <Home className="w-5 h-5" />,
      Briefcase: <Briefcase className="w-5 h-5" />,
      Info: <Info className="w-5 h-5" />,
      Settings: <Settings className="w-5 h-5" />,
      Image: <Image className="w-5 h-5" />,
      Phone: <Phone className="w-5 h-5" />
    };
    return icons[iconName] || null;
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <nav className="relative px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-[#e31e24]">AHRC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#e31e24]"
                    : "text-gray-600 hover:text-[#e31e24]"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#e31e24] hover:bg-gray-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upload Resume Button */}
        <div className="flex items-center gap-4">
          <Link href="/upload-resume">
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 border-[#e31e24] text-[#e31e24] hover:bg-[#e31e24] hover:text-white"
            >
              <Upload className="w-4 h-4" />
              Upload Resume
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl">
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-[#e31e24]">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  {menuItems.map((item) => (
                    <div key={item.id} className="mb-2">
                      <button
                        onClick={() => item.children && toggleSubMenu(item.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-lg",
                          pathname === item.href
                            ? "bg-red-50 text-[#e31e24]"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          {getIcon(item.icon)}
                          {item.label}
                        </div>
                        {item.children && (
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openSubMenus.includes(item.id) && "rotate-180"
                            )} 
                          />
                        )}
                      </button>
                      {item.children && (
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            openSubMenus.includes(item.id)
                              ? "max-h-[1000px] opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              className="flex items-center gap-3 px-8 py-3 text-sm text-gray-600 hover:text-[#e31e24]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {getIcon(child.icon)}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Upload Resume Button */}
                <div className="pt-4 border-t">
                  <Link href="/upload-resume">
                    <Button 
                      className="w-full bg-[#e31e24] hover:bg-[#c91920] text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}