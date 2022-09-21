import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from '@mui/styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { VTCard } from '../Card';

import useResponsive from '@/hooks/useResponsive';

const useStyles = makeStyles(() => ({
  Swiper: {
    width: '100%',
    height: '100%',
    padding: 2,

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

    '& .swiper-pagination': {
      position: 'initial',
    },

    '& .swiper-button-prev': {
      color: 'rgb(224,224,224)',

      '&:hover': {
        color: '#438BF7',
        background: 'transparent',
      },
    },

    '& .swiper-button-next': {
      color: 'rgb(224,224,224)',

      '&:hover': {
        color: '#438BF7',
        background: 'transparent',
      },
    },
  },
}));

const VTCarousel = ({ arrItem }: any) => {
  const classes = useStyles();
  const matchDownSM = useResponsive({ query: 'down', key: 723 });
  const matchDownMini = useResponsive({ query: 'down', key: 482 });

  return (
    <>
      <Swiper
        slidesPerView={matchDownSM ? (matchDownMini ? 1 : 2) : 3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={matchDownSM ? false : true}
        pagination={matchDownSM ? true : false}
        modules={[Navigation, Pagination]}
        className={classes.Swiper}
      >
        {arrItem.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <VTCard
                title="Lizard"
                description="City, House"
                image="images/hanoi.png"
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
