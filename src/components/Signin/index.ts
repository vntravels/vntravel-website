import dynamic from 'next/dynamic';

const FormSignin = dynamic(() => import('./FormSignin'), {
  suspense: true,
});

export default FormSignin;
