import Head from 'next/head';
import type { ReactNode } from 'react';

type DefaultLayoutProps = { children: ReactNode };

const title = 'tRPC | Next.js';

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <h1 className="text-4xl mb-6">{title}</h1>
        {children}
      </main>
    </>
  );
};
