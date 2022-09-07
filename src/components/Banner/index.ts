import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./Banner'));

export default Banner;
