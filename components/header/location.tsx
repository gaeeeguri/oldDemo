import { IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function Location() {
  return (
    <div className='flex'>
      <h1 className='font-bold text-2xl mr-1'>풍덕천1동</h1>
      <IconButton
        icon={<ChevronDownIcon boxSize={26} />}
        aria-label='location'
      />
    </div>
  );
}
