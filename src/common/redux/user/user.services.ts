import config from '@/utils/config';
import AxiosInstance from '../../axiosInstance';

export const getMe = async (): Promise<any> => {
  const { data } = await AxiosInstance.get(
    `${config.API_ENDPOINT_URL}/user/getMe`,
  );
  return data;
};
