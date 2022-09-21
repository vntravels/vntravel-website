import { Breakpoint, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

type MediaProps = {
  query: string;
  key?: number | Breakpoint;
  start?: number | Breakpoint;
  end?: number | Breakpoint;
};

export default function useResponsive({ query, key, start, end }: MediaProps) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key || 'xs'));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key || 'xs'));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start || 'xs', end || 'lg'),
  );

  const mediaOnly = useMediaQuery(
    theme.breakpoints.only(typeof key === 'number' || !key ? 'xs' : key),
  );

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  if (query === 'only') {
    return mediaOnly;
  }

  return null;
}
