"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import { NavLinkType } from "@/types";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [targetLink, setTargetLink] = useState("/");

  const handleLinkClick = (link: NavLinkType) => {
    setTargetLink(link.href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden rounded-sm">
        <Button className="hover:text-primary" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-10">
          <SheetTitle className="mx-auto">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="">
          {NAV_LINKS.map((link: NavLinkType) => (
            <Link
              onClick={() => handleLinkClick(link)}
              className={cn(
                `py-5 text-lg font-semibold flex items-center justify-center hover:bg-accent/60 hover:text-primary rounded-sm`,
                link.href === targetLink && "bg-accent/60 text-primary",
              )}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
