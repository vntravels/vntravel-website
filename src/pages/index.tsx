import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Booking from '@/components/Booking';
import Layout from '@/layouts';
import SectionTitle from '@/components/Section/SectionTitle';
import SectionContainer from '@/components/Section/SectionContainer';
import { Grid } from '@mui/material';
import VTCard from '@/components/Card';
import SectionContent from '@/components/Section/SectionContent';

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
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <VTCard
                title="Lizard"
                description="Test"
                image="images/hanoi.png"
              />
            </Grid>
            <Grid item xs={4}>
              <VTCard
                title="Lizard"
                description="Test"
                image="images/hanoi.png"
              />
            </Grid>
            <Grid item xs={4}>
              <VTCard
                title="Lizard"
                description="Test"
                image="images/hanoi.png"
              />
            </Grid>
          </Grid>
        </SectionContent>
      </SectionContainer>
    </Layout>
  );
};

export default Home;
