'use client';

import Image from 'next/image';

const Class = () => {
  return (
    <div className='flex h-36 justify-between items-center border-b-2 border-b-gray-600 mb-2'>
      <div className='flex items-center pl-2'>
        <div className='relative h-24 w-24 rounded-lg mr-4 rounded-lg overflow-hidden shadow'>
          <Image alt='golf' src='/download.jpeg' fill />
        </div>
        <div className='flex flex-col w-24'>
          <h2 className='text-xl font-extrabold'>골프동호회</h2>
          <div className='text-gray-300'>수지구</div>
        </div>
      </div>
    </div>
  );
};

export default Class;
