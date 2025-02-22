import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function NavigationBar() {
  return (
    <div className="flex sticky top-0 max-w-7xl mx-auto w-full gap-4  backdrop-blur-md justify-between bg-background/20   text-foreground px-4 py-2">
   {/* Left side  */}
      <NavigationMenu className="">
        <NavigationMenuList>
            {/* Home  */}
            <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
            {/* Subscriptions  */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" capitalize">
              Subscriptions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href={"#"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Must-SDA Alumni and Associates
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* About page  */}
          <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side  */}
      <ModeToggle />
    </div>
  );
}
