'use client';

import {
  FC,
  HTMLProps,
  JSXElementConstructor,
  ReactElement,
  RefAttributes,
} from 'react';
import { IconButton } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';

type TopicProps = {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  name: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement>;

const Topic: FC<TopicProps> = ({ name, icon, ...props }) => {
  return (
    <Link className='flex flex-col items-center' {...props}>
      <div className='w-24 h-24 bg-primary border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex py-2 justify-center items-center'>
        <IconButton icon={icon} aria-label={name} />
      </div>
      <h2 className='text-lg font-medium '>{name}</h2>
    </Link>
  );
};

export default Topic;
