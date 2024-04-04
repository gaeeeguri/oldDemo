'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';
import {ReactNode} from "react";

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  );
};