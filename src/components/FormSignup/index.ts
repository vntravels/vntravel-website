import dynamic from 'next/dynamic';

import Loadable from '../Loadable';

const FormSignup = Loadable(
  dynamic(() => import('./FormSignup'), {
    suspense: true,
    ssr: true,
  }),
);

export default FormSignup;
