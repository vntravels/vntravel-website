import dynamic from 'next/dynamic';

const VTCarousel = dynamic(() => import('./Carousel'));

export default VTCarousel;
