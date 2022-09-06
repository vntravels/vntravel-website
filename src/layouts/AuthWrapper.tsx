import React, { useEffect } from 'react';

import { useAppDispatch } from '@/common/redux/hooks';
import { getUserProfile } from '@/common/redux/user/user.slice';

const AuthWrapper = ({ children }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;
