import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from '@mui/styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { VTCard } from '../Card';

const useStyles = makeStyles(() => ({
  Swiper: {
    width: '100%',
    height: '100%',

    '& .swiper-slide': {
      fontSize: 18,
      background: '#fff',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& .swiper-slide img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

const VTCarousel = ({ arrayItem }: any) => {
  const classes = useStyles();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className={classes.Swiper}
      >
        {[1, 2, 3, 4, 5].map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <VTCard
                title="Lizard"
                description="City, House"
                image="images/hanoi.png"
                style={{ padding: 0, borderRadius: 0 }}
                roomAvailable={100}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default VTCarousel;
