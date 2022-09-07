import dynamic from 'next/dynamic';

const Dropdown = dynamic(() => import('./Dropdown'));

export default Dropdown;
