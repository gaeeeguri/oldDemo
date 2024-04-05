'use client';

import { NavLink } from './navLink';
import { Icon } from '@chakra-ui/icons';
import { MdHome, MdPerson, MdSearch } from 'react-icons/md';

export function NavBar() {
  return (
    <>
      <footer className="flex justify-center bottom-0 sticky bg-primary h-12 items-center">
        <nav className="container flex items-center justify-between px-12 py-4 mx-auto font-semibold leading-6 lg:py-6 bottom-0 h-1 border-t-2 border-b-blue-300 max-w-md">
          <NavLink
            href={'/search'}
            icon={<Icon as={MdSearch} />}
            name={'Search'}
            exact
            className="transition duration-300 text-hover"
          />
          <NavLink
            href={'/'}
            icon={<Icon as={MdHome} />}
            name={'Main'}
            exact
            className="transition duration-300 text-hover"
          />
          <NavLink
            href={'/profile'}
            icon={<Icon as={MdPerson} />}
            name={'Profile'}
            exact
            className="transition duration-300 text-hover"
          />
        </nav>
      </footer>
    </>
  );
}
