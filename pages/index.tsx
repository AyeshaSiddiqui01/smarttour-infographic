import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Import the component with dynamic loading to prevent hydration errors with recharts
const SmartTourismInfographic = dynamic(
  () => import('../SmartTourismInfographic'),
  { ssr: false }
);

const Home: NextPage = () => {
  const router = useRouter();
  const basePath = router.basePath || '';
  
  return (
    <div>
      <Head>
        <title>Smart Tourism in Toronto</title>
        <meta name="description" content="Data-Driven Travel Experience Optimization" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <main>
        <SmartTourismInfographic />
      </main>
    </div>
  );
};

export default Home; 