'use client';

import { NavLink } from './navLink';
import { Icon } from '@chakra-ui/icons';
import { MdHome, MdPerson, MdSearch } from 'react-icons/md';

export function NavBar() {
  return (
    <>
      <footer className='flex content-center justify-center bottom-0 sticky bg-primary h-16 items-center'>
        <nav className='container flex content-center items-center justify-between px-8 py-4 mx-auto font-semibold leading-6 lg:py-6 bottom-0 border-t-2 border-b-blue-300 max-w-md'>
          <NavLink
            href={'/search'}
            icon={<Icon boxSize={26} as={MdSearch} />}
            name={'Search'}
            exact
            className='transition duration-300 text-hover'
          />
          <NavLink
            href={'/'}
            icon={<Icon boxSize={26} as={MdHome} />}
            name={'Main'}
            exact
            className='transition duration-300 text-hover'
          />
          <NavLink
            href={'/profile'}
            icon={<Icon boxSize={26} as={MdPerson} />}
            name={'Profile'}
            exact
            className='transition duration-300 text-hover'
          />
        </nav>
      </footer>
    </>
  );
}
