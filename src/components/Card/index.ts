import dynamic from 'next/dynamic';

export const VTCard = dynamic(() => import('./Card'));

export const VTCardImage = dynamic(() => import('./CardImage'));

export const VTCardTrending = dynamic(() => import('./CardTrending'));
