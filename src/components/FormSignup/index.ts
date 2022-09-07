import dynamic from 'next/dynamic';

const FormSignup = dynamic(() => import('./FormSignup'), { suspense: true });

export default FormSignup;
