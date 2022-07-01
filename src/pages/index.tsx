import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from 'src/components/Banner';
import Layout from 'src/layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Banner />
    </Layout>
  );
};

export default Home;
