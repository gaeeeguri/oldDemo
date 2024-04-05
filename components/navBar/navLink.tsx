'use client';

/*
NavLink: The "active" class is added when the href matches the start of the URL pathname, use the "exact" property to change it to an exact match with the whole URL pathname.
*/
import { IconButton} from "@chakra-ui/react"

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import {RefAttributes, HTMLProps, FC, ReactNode, ReactElement, JSXElementConstructor} from 'react';

type NavLinkProps = {
  exact?: boolean;
  icon: ReactElement<any, string | JSXElementConstructor<any>>
  name: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement>;

export const NavLink: FC<NavLinkProps> = ({ exact, icon, name, ...props }) => {
  const pathname = usePathname();
  const active = ' text-active'; // class to add when active
  const isActive = exact ? pathname === props.href : pathname?.startsWith(props.href);

  if (isActive) {
    props.className += active;
  }

  // return <Link {...props}>{children}</Link>;
  return (
    <Link {...props}>
    <IconButton icon={icon} aria-label={name}/>
    </Link>
  )
};
