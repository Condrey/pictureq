import Link from "next/link";
import { InlineModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex justify-between  w-full gap-4 px-4 py-2 bg-yellow-900/25 dark:bg-yellow-900/10">
      <div className="flex justify-between max-w-7xl mx-auto w-full">
        <div>
          <Legals />
        </div>
        <div>
          <InlineModeToggle />
        </div>
      </div>
    </footer>
  );
}

function Legals() {
  const links: { url: string; label: string }[] = [
    { url: "/terms-and-conditions", label: "Terms and Conditions" },
    { url: "/privacy-policy", label: "Privacy Policy" },
    { url: "/cookie-policy", label: "Cookie Policy" },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'}><span>Legals</span>
        <ChevronDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
       <DropdownMenuGroup>
        <DropdownMenuLabel>Legal documents</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {links.map(({ url, label }) => (
          <DropdownMenuItem key={url} >
            <Link href={url} passHref legacyBehavior
            className={buttonVariants({size:'sm',variant:'ghost'})}>
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
       </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
