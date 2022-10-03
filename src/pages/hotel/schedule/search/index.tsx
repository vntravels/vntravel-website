import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppDispatch } from '@/common/redux/hooks';

const HotelScheduleSearch = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getDataSearch = (lo, dt) => {
    dispatch;
  };

  useEffect(() => {
    const { lo, dt } = router.query;
  }, [router.query]);

  return (
    <>
      <div></div>
    </>
  );
};

export default HotelScheduleSearch;
