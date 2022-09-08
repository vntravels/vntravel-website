import React, { ComponentType, Suspense } from 'react';

import VTLoader from './Loader';

const Loadable = (Component: ComponentType) => (props: any) =>
  (
    <Suspense fallback={<VTLoader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
