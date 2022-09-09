import type { NextPage } from 'next';
import Head from 'next/head';
import { Grid } from '@mui/material';

import Banner from '@/components/Banner';
import Booking from '@/components/Booking';
import Layout from '@/layouts';
import {
  SectionContainer,
  SectionTitle,
  SectionContent,
} from '@/components/Section';
import { VTCard, VTCardImage, VTCardTrending } from '@/components/Card';
import VTCarousel from '@/components/Carousel';

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
                style={{
                  padding: '24px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 'o !important',
                  borderRadius: '24px',
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <VTCard
                title="Lizard"
                description="Test"
                image="images/hanoi.png"
                style={{
                  padding: '24px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 'o !important',
                  borderRadius: '24px',
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <VTCard
                title="Lizard"
                description="Test"
                image="images/hanoi.png"
                style={{
                  padding: '24px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 'o !important',
                  borderRadius: '24px',
                }}
              />
            </Grid>
          </Grid>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          title="Featured Destinations"
          description="Popular destinations open to visitors from Viet Nam"
        />
        <SectionContent>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <VTCardImage
                    width={484}
                    height={427}
                    image="images/nhatrang2.png"
                  />
                </Grid>
                <Grid item xs={6}>
                  <VTCardImage
                    width={484}
                    height={427}
                    image="images/phuquoc.png"
                  />
                </Grid>
                <Grid item xs={12}>
                  <VTCardImage
                    width={1012}
                    height={424}
                    image="images/nhatrang.png"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <VTCardImage
                    width={291}
                    height={275}
                    image="images/hanoi.png"
                  />
                </Grid>
                <Grid item xs={12}>
                  <VTCardImage
                    width={291}
                    height={275}
                    image="images/hanoi.png"
                  />
                </Grid>
                <Grid item xs={12}>
                  <VTCardImage
                    width={291}
                    height={275}
                    image="images/hanoi.png"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SectionContent>
      </SectionContainer>

      <SectionContainer backgroundColor="#F2F3F3">
        <SectionTitle
          title="Trending Destinations"
          description="The most searched destinations for the TripGuide"
        />
        <SectionContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <VTCardTrending
                title="Flight to Nha Trang"
                price="250.000"
                rating={2}
                currency="VND"
                image="images/hanoi.png"
              />
            </Grid>
            <Grid item xs={6}>
              <VTCardTrending
                title="Flight to Nha Trang"
                price="250.000"
                rating={2}
                currency="VND"
                image="images/hanoi.png"
              />
            </Grid>
          </Grid>
        </SectionContent>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle
          textAlign="start"
          title="Explore world"
          description="Over 10,024 beautiful places to go"
        />
        <SectionContent>
          <VTCarousel arrItem={[1, 2, 3, 4, 5, 6]} />
        </SectionContent>
      </SectionContainer>
    </Layout>
  );
};

export default Home;
