import dynamic from 'next/dynamic';

export const ExploreWorld = dynamic(() => import('./ExploreWorld'));
export const Extensions = dynamic(() => import('./Extensions'));
export const BestPlace = dynamic(() => import('./BestPlace'));
export const FeaturedDestination = dynamic(
  () => import('./FeaturedDestination'),
);
export const TrendingDestination = dynamic(
  () => import('./TrendingDestination'),
);
