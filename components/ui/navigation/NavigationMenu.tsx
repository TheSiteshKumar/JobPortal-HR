// components/ui/navigation/NavigationMenu.tsx
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu as Menu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Home,
  Upload,
  Briefcase,
  Info,
  Wrench,
  Image,
  Phone,
} from "lucide-react";
import MenuSection from "./MenuSection";

// components/ui/navigation/NavigationMenu.tsx
import { menuItems } from './menuItems';
import { aboutItems, jobsItems, servicesItems, galleryItems } from './menuItems';
// Your component implementation...

const NavigationMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl text-[#e31e24]">
        AHRC
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Menu>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-1",
                  pathname === "/" && "text-[#e31e24]"
                )}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </NavigationMenuLink>

            {/* Dropdown Menus */}

            <MenuSection title="Jobs" icon={Briefcase} items={jobsItems} />
            <MenuSection title="About" icon={Info} items={aboutItems} />
            <MenuSection title="Services" icon={Wrench} items={servicesItems} />
            <MenuSection title="Gallery" icon={Image} items={galleryItems} />

            {/* Contact Link */}
            <NavigationMenuLink asChild>
              <Link
                href="/contact"
                className={cn(
                  "flex items-center gap-1",
                  pathname === "/contact" && "text-[#e31e24]"
                )}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </Menu>
      </div>

      {/* Upload Resume Button */}
      <Link href="/upload-resume" passHref>
        <Button
          variant="outline"
          className="hidden md:flex items-center gap-2 border-[#e31e24] text-[#e31e24] hover:bg-[#e31e24] hover:text-white"
        >
          <Upload className="w-4 h-4" />
          Upload Resume
        </Button>
      </Link>
    </div>
  );
};

export default NavigationMenu;
