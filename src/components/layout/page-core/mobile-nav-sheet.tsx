import { MobileNavHamburger } from "./mobile-nav-hamburger";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface linkData {
  route: string;
  text: string;
}
const MobileNavSheet = ({ links }: { links: linkData[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MobileNavHamburger />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-primary-lower to-secondary-lower">
        <span className="sr-only">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
        </span>
        <SheetClose asChild>
          <div>
            <ul className="font-josefin-sans text-primary-higher flex flex-col justify-start">
              <div className="">
                {links.map(({ route, text }) => (
                  <li
                    key={route}
                    className="px-4  font-bold capitalize py-6 text-4xl"
                  >
                    <Link href={route} className="cursor-pointer link-underline link-underline-tertiary">{text}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavSheet };
