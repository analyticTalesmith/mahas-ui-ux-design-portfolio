import { AppWindow } from "lucide-react";
import Link from "next/link";
import { MobileNavSheet } from "./mobile-nav-sheet";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

const websiteHeadingColorClassMap = {
  background: "text-on-background",
  light: "text-primary-fixed-darkest",
  dark: "text-primary-fixed-dim",
} as const;

type ColorVariant = keyof typeof websiteHeadingColorClassMap;

interface WebsiteHeadingProps {
  on?: ColorVariant;
}

const WebsiteHeading: React.FC<WebsiteHeadingProps> = ({ on = "background" }) => {
  const navLinks = [
    { route: "/", text: "Home" },
    { route: "/work", text: "Work" },
    { route: "/about", text: "About" },
    { route: "/contact", text: "Contact" },
  ];

  const headingColorClass = websiteHeadingColorClassMap[on];

  return (
    <header className={cn("h-40 w-full p-4 sm:p-10 xl:p-20", headingColorClass)}>
      <div className="mx-auto flex flex-row items-center h-full">
        <Link href="/" className="flex font-black items-center">
          {/* Icon */}
          <AppWindow className="h-20 w-20 mr-4 sm:mr-10 md:mr-20" />
        </Link>
        {/* MD and above nav */}
        <nav className="hidden md:ml-auto md:flex items-center">
          <ul className="flex flex-row grow ml-auto font-josefin-sans font-bold uppercase text-xl space-x-10 justify-end items-center">
            {navLinks.map(({ route, text }) => (
              <li key={route} className="block duration-200 cursor-pointer link-underline link-underline-tertiary">
                <Link href={route}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto md:ml-20 flex flex-row items-center">
          <ThemeToggle />
          {/* Mobile nav */}
          <MobileNavSheet links={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeading;
