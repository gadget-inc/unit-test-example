// --------------------------------------------------------------------------------------
// App Navigation System (Primary Left Nav + Secondary Header Dropdown)
// --------------------------------------------------------------------------------------
// This file defines the navigation system for the logged-in section of the app.
// There are two main navigation components:
//
//   - Navigation: The primary navigation, rendered as a vertical sidebar on the left.
//     - To extend: add new items to the `navigationItems` array.
//     - Each item should have a title, path, and icon.
//
//   - SecondaryNavigation: The secondary navigation, rendered as a dropdown menu in the header.
//     - To extend: add new items to the `secondaryNavigationItems` array.
//     - Each item should have a title, path, and icon.
//     - The dropdown also includes a "Sign out" action.
//
// Icons are imported from lucide-react. Navigation uses react-router's <Link> for routing.
//
// --------------------------------------------------------------------------------------
// To extend: add to navigationItems or secondaryNavigationItems. For custom rendering,
// edit the Navigation or SecondaryNavigation components.
// --------------------------------------------------------------------------------------

import type { ExoticComponent, ReactNode } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useSignOut } from "@gadgetinc/react";
import { NavDrawer } from "@/components/shared/NavDrawer";
import { Home, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  title: string;
  path: string;
  icon: ExoticComponent<{ className: string }>;
}

/**
 * The main navigation items for the left sidebar.
 * To add a new link, add an object with title, path, and icon.
 */

const navigationItems: NavItem[] = [
  {
    title: "Home",
    path: "/signed-in",
    icon: Home,
  },
];

// Mobile hamburger menu, uses Sheet for slide-out drawer
export const MobileNav = () => {
  return (
    <div className="flex md:hidden">
      <NavDrawer>{({ close }) => <Navigation onLinkClick={close} />}</NavDrawer>
    </div>
  );
};

// Desktop left nav bar
export const DesktopNav = () => {
  return (
    <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-30">
      <div className="flex flex-col grow bg-background border-r h-full">
        <Navigation />
      </div>
    </div>
  );
};

/**
 * The secondary navigation items for the header dropdown menu.
 * To add a new link, add an object with title, path, and icon.
 */

const secondaryNavigationItems: NavItem[] = [
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

/**
 * Primary navigation sidebar for logged-in users.
 * Renders navigationItems as vertical links with icons.
 */

export const Navigation = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation();

  return (
    <>
      <div className="h-16 flex items-center px-6 border-b">
        <Link to="/signed-in" className="flex items-center" onClick={onLinkClick}>
          <img src="/api/assets/autologo?background=light" alt="App logo" className="h-8 w-auto" />
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
        {navigationItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors
              ${
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            onClick={onLinkClick}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </>
  );
};

/**
 * Secondary navigation dropdown for user/account actions.
 * Renders secondaryNavigationItems as dropdown links with icons.
 * Includes a "Sign out" action at the bottom.
 *
 * @param icon - The icon to display as the dropdown trigger (usually a user avatar or icon).
 */

export const SecondaryNavigation = ({ icon }: { icon: ReactNode }) => {
  const [userMenuActive, setUserMenuActive] = useState(false);

  return (
    <DropdownMenu open={userMenuActive} onOpenChange={setUserMenuActive}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className={`p-2 rounded-full focus-visible:ring-0 ${userMenuActive ? "bg-muted hover:bg-muted" : ""}`}
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <>
          {secondaryNavigationItems.map((item) => (
            <DropdownMenuItem key={item.path} asChild className="cursor-pointer">
              <Link to={item.path} className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
          <SignOutOption />
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SignOutOption = () => {
  const signOut = useSignOut({ redirectToPath: "/" });

  return (
    <DropdownMenuItem onClick={signOut} className="flex items-center text-red-600 focus:text-red-600 cursor-pointer">
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </DropdownMenuItem>
  );
};

// --------------------------------------------------------------------------------------
// To extend: add to navigationItems or secondaryNavigationItems. For custom rendering,
// edit the Navigation or SecondaryNavigation components.
// --------------------------------------------------------------------------------------