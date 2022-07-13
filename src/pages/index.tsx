import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from 'src/components/Banner';
import Booking from 'src/components/Booking';
import Layout from 'src/layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>VnTravel</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Banner />
      <Booking />
    </Layout>
  );
};

export default Home;
