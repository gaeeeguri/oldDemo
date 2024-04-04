'use client'

import React, {FC, RefAttributes, HTMLProps} from "react";
import Link, {LinkProps} from "next/link";
import {usePathname} from "next/navigation";

type NavLinkProps = {
  exact?: boolean;
  children?: React.ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement>;

export const NavLink: FC<NavLinkProps> = ({ exact, children, ...props}) => {
  const pathname = usePathname();
  const active = ' text-active'
  const isActive = exact ? pathname === props.href : pathname?.startsWith(props.href)

  if (isActive) {
    props.className += active;
  }

  return <Link {...props}>{children}</Link>

}