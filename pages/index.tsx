import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Import the component with dynamic loading to prevent hydration errors with recharts
const SmartTourismInfographic = dynamic(
  () => import('../SmartTourismInfographic'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smart Tourism in Toronto</title>
        <meta name="description" content="Data-Driven Travel Experience Optimization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SmartTourismInfographic />
      </main>
    </div>
  );
};

export default Home; 