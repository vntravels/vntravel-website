import React, { useEffect } from 'react';
import { useAppDispatch } from 'src/common/redux/hooks';
import { getUserProfile } from 'src/common/redux/user/user.slice';

const AuthWrapper = ({ children }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
