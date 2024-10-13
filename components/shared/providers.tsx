'use client';

import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';

export const Providers: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
      <NextTopLoader />
    </>
  );
};
