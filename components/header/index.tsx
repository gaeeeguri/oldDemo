'use client';

import Headroom from 'react-headroom';
import { Location } from '@/components/header/location';
import HeaderButtons from '@/components/header/headerButtons';

export function Header() {
  return (
    <Headroom>
      <div className='flex justify-center h-12 bg-primary'>
        <div className='flex content-center items-center justify-between w-full  max-w-md px-8'>
          <Location />
          <HeaderButtons />
        </div>
      </div>
    </Headroom>
  );
}
