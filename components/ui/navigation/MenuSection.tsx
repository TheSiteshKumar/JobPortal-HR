// components/ui/navigation/MenuSection.tsx
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

const MenuSection = ({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: any[];
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="flex items-center gap-1">
        <Icon className="w-4 h-4" />
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {items.map((item) => (
            <ListItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
            >
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuSection;
