"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Logo from "./Logo";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "@/constants";
import { NavLinkType } from "@/types";
import { ModeToggle } from "../providers/ModeToggle";

const Header = () => {
  const [targetLink, setTargetLink] = useState("/");

  return (
    <header className="fixed top-0 left-0 z-50 bg-card/80 shadow-md w-full h-[65px] py-2 flex items-center justify-center px-5 backdrop-blur-lg border-b border-border/30">
      <div className="flex items-center justify-between w-full h-full container">
        <Logo />

        <nav className="h-full md:block hidden">
          <ul className="flex items-center gap-5 h-full ">
            {NAV_LINKS.map((link: NavLinkType) => (
              <li
                className="h-full flex items-center justify-center"
                key={link.href}
              >
                <Link
                  onClick={() => setTargetLink(link.href)}
                  className={cn(
                    `h-full px-1 font-semibold flex items-center justify-center hover:bg-accent/60 hover:text-primary rounded-sm`,
                    link.href === targetLink && "bg-accent/60 text-primary",
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 z-99">
          <Link
            href="#contact"
            className={buttonVariants({
              className:
                "hidden! md:flex! p-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-primary/90",
            })}
          >
            اطلب استشارة
          </Link>

          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
