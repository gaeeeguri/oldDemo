import { IconButton } from '@chakra-ui/react';
import { Icon, Search2Icon } from '@chakra-ui/icons';
import { LuBell, LuSend } from 'react-icons/lu';

export default function HeaderButtons() {
  return (
    <div>
      <IconButton
        className='ml-4'
        icon={<Search2Icon boxSize={20} />}
        aria-label='search'
      />
      <IconButton
        className='ml-4'
        icon={<Icon as={LuBell} boxSize={24} />}
        aria-label='search'
      />
      <IconButton
        className='ml-4'
        icon={<Icon as={LuSend} boxSize={24} />}
        aria-label='search'
      />
    </div>
  );
}
