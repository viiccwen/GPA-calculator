"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
  return (
    <NavigationMenu className="mt-3">
      <NavigationMenuList className="w-screen flex justify-between px-[40px]">
        <NavigationMenuItem>
          <div className="flex justify-center items-center gap-2">
            <img src="/icon.png" alt="icon" className="size-9" />
            <div className="font-bold">GPA計算機</div>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-center">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
