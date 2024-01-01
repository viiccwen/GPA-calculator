import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="mt-3">
      <NavigationMenuList className="w-screen grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <NavigationMenuItem>
          <div className="flex justify-center items-center gap-2">
            <img src="/icon.png" alt="icon" className="size-9" />
            <div className="font-bold">GPA計算機</div>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-center">
          <Button variant="ghost" className="mx-1">
            <Link href="/v1">v1</Link>
          </Button>
          <Button variant="ghost" className="mx-1">
            <Link href="/v2">v2</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-center col-start-3 sm:grid-cols-4 md:col-start-5 lg:col-start-6">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
