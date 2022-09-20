import type { NextPage } from 'next';
import Head from 'next/head';

import Banner from '@/components/Banner';
import Booking from '@/components/Booking';
import Layout from '@/layouts';
import {
  SectionContainer,
  SectionTitle,
  SectionContent,
} from '@/components/Section';
import {
  Extensions,
  ExploreWorld,
  TrendingDestination,
  FeaturedDestination,
  BestPlace,
} from '@/components/Landing';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>VnTravel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Banner />
      <Booking />

      <SectionContainer>
        <SectionTitle
          title="Find a best place in Viet Nam"
          description="Whether you’ve looking for places for a vacation. We are here to Guide you about the details you need to check in"
        />
        <SectionContent>
          <BestPlace />
        </SectionContent>
      </SectionContainer>

      <SectionContainer backgroundColor="#F2F3F3">
        <SectionTitle
          title="Featured Destinations"
          description="Popular destinations open to visitors from Viet Nam"
        />
        <SectionContent>
          <FeaturedDestination />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          title="Trending Destinations"
          description="The most searched destinations for the TripGuide"
        />
        <SectionContent>
          <TrendingDestination />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          textAlign="start"
          title="Explore world"
          description="Over 10,024 beautiful places to go"
        />
        <SectionContent>
          <ExploreWorld />
        </SectionContent>
      </SectionContainer>

      <SectionContainer backgroundColor="#F2F3F3">
        <Extensions />
      </SectionContainer>
    </Layout>
  );
};

export default Home;
