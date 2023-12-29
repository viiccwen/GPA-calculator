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
    <NavigationMenu className="left-12">
      <NavigationMenuList className="absolute w-screen grid grid-cols-6 mt-5">
        <NavigationMenuItem className="col-start-1">
          <div className=" font-bold">GPA計算機</div>
        </NavigationMenuItem>
        <NavigationMenuItem className="col-start-2">
          <Button variant="ghost">
            <Link href="/v1">v1</Link>
          </Button>
          <Button variant="ghost" className="ml-3">
            <Link href="/v2">v2</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem className="col-start-3"></NavigationMenuItem>
        <NavigationMenuItem className="col-start-6 ">
          <div className="ml-[50px]">
            <ModeToggle />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
