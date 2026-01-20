// --------------------------------------------------------------------------------------
// Navigation Bar System (Mobile + Desktop)
// --------------------------------------------------------------------------------------
// This file defines a data-driven navigation bar for both mobile and desktop layouts.
// To extend: update the `navigationItems` array with new links or sections.
// Components:
//   - Navigation: Root bar with logo, mobile, and desktop nav.
//   - MobileNav: Hamburger menu for small screens.
//   - DesktopNav: Horizontal menu for larger screens.
// --------------------------------------------------------------------------------------

import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavDrawer } from "@/components/shared/NavDrawer";

interface NavItem {
  type: "item";
  title: string;
  href: string;
  description?: string; // (optional, shown in desktop dropdowns)
}
interface NavSection {
  type: "section";
  title: string;
  items: NavItem[];
}
type NavItems = (NavItem | NavSection)[];

// Main navigation data. Extend this array to add links/sections.
// Example:
// const navigationItems: NavItems = [
//   { type: "item", title: "Docs", href: "/docs", description: "Documentation" },
//   {
//     type: "section",
//     title: "More",
//     items: [
//       { type: "item", title: "About", href: "/about" },
//       { type: "item", title: "Contact", href: "/contact" },
//     ],
//   },
// ];
const navigationItems: NavItems = [];

// Root navigation bar: logo, mobile, and desktop nav
export const Navigation = () => (
  <div className="flex justify-center items-center gap-2">
    <MobileNav />
    <div className="flex-shrink-0">
      {/*
        Placeholder for app logo.
        Replace the <img> below with your real logo once available.
        You can update the src, alt, and styling as needed for your brand.
      */}
      <Link to="/" className="text-xl font-bold">
        <img src="/api/assets/autologo?background=dark" alt="App name" className="h-5 w-auto" />
      </Link>
    </div>
    <DesktopNav />
  </div>
);

// Mobile hamburger menu, uses Sheet for slide-out drawer
const MobileNav = () => {
  return (
    <div className="md:hidden">
      <NavDrawer>
        {({ close }) => (
          <nav className="flex flex-col gap-4 px-6 pt-16 pb-8">
            {navigationItems.map((item) =>
              item.type === "section" ? (
                <div key={item.title}>
                  <p className="text-sm font-medium">{item.title}</p>
                  <div className="mt-2 flex flex-col gap-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="text-sm text-gray-600 hover:text-gray-900"
                        onClick={close}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm font-medium hover:text-gray-900"
                  onClick={close}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
        )}
      </NavDrawer>
    </div>
  );
};

// Desktop horizontal nav, supports dropdown sections
const DesktopNav = () => (
  <NavigationMenu className="hidden md:flex px-4">
    <NavigationMenuList className="flex gap-1">
      {navigationItems.map((item) => (
        <NavigationMenuItem key={item.title}>
          {item.type === "item" ? (
            <NavigationMenuLink asChild>
              <Button className="px-3" variant="ghost">
                <Link to={item.href}>{item.title}</Link>
              </Button>
            </NavigationMenuLink>
          ) : (
            <>
              <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] p-2">
                <div className="p-2">
                  <div className="grid grid-cols-1">
                    {item.items.map((subItem) => (
                      <NavigationMenuLink key={subItem.title} asChild>
                        <Link
                          to={subItem.href}
                          className="block flex flex-col gap-1 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">{subItem.title}</div>
                          {subItem.description && (
                            <p className="text-sm text-muted-foreground">{subItem.description}</p>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </>
          )}
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenu>
);

// --------------------------------------------------------------------------------------
// To extend: add to navigationItems. For custom rendering, edit MobileNav/DesktopNav.
// --------------------------------------------------------------------------------------