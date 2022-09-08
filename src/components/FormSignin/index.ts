import dynamic from 'next/dynamic';

import Loadable from '../Loadable';

const FormSignin = Loadable(
  dynamic(() => import('./FormSignin'), {
    suspense: true,
    ssr: true,
  }),
);

export default FormSignin;
