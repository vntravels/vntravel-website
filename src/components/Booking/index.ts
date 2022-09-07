import dynamic from 'next/dynamic';

const Booking = dynamic(() => import('./Booking'));

export default Booking;
