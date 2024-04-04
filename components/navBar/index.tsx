'use client';

import Link from 'next/link';
import { menuItems } from '@/data/constants';
import { NavLink } from './navLink';
import { useState } from 'react';

export function NavBar() {
  let [isOpen, setIsOpen] = useState(false); // state of mobile menu

  return (
    <>
      {/*
        Place nav inside header
      */}
          <nav className='container flex items-center justify-between px-4 py-4 mx-auto font-semibold leading-6 lg:py-6 max-w-md'>
              {menuItems.map((item, index) => {
                return (
                    <NavLink key={item.name} href={item.path} exact className='transition duration-300 text-hover'>
                      {item.name}
                    </NavLink>
                );
              })}
          </nav>

      </>
  );
}