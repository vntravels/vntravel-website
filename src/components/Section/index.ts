import dynamic from 'next/dynamic';

export const SectionContainer = dynamic(() => import('./SectionContainer'));
export const SectionContent = dynamic(() => import('./SectionContent'));
export const SectionTitle = dynamic(() => import('./SectionTitle'));
