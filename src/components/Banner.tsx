import { Box, SxProps } from '@mui/material';

const Banner = () => {
  return <Box sx={BannerStyle}></Box>;
};

const BannerStyle: SxProps = {
  width: '100%',
  height: '880px',
  backgroundImage: "url('/images/background.png')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default Banner;
