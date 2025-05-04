export interface NavLink {
  title: string;
  href: string;
  subLinks?: NavLink[];
}

export interface HeaderProps {
  // Any additional props can be added here
}

export interface DesktopHeaderProps {
  navLinks: NavLink[];
}

export interface MobileHeaderProps {
  navLinks: NavLink[];
}
