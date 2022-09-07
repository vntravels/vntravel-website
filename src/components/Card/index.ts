import dynamic from 'next/dynamic';

const VTCard = dynamic(() => import('./Card'));

export default VTCard;
