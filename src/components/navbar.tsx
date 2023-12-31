import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { Link } from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-screen grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
        <NavigationMenuItem>
          <div className="font-bold text-center">GPA計算機</div>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-center">
          <Button variant="ghost" className="mx-1">
            <Link href="/v1">v1</Link>
          </Button>
          <Button variant="ghost" className="mx-1">
            <Link href="/v2">v2</Link>
          </Button>
          <Button variant="ghost" className="mx-1">
            <Link href="/v3">v3</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-center lg:col-start-6">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
