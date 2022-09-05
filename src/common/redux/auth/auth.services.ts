import config from '@/utils/config';
import AxiosInstance from '../../axiosInstance';

export const signin = async (payload: any): Promise<any> => {
  const { data } = await AxiosInstance.post(
    `${config.API_ENDPOINT_URL}/auth/login`,
    payload,
  );
  return data;
};

export const signup = async (payload: any): Promise<any> => {
  const { data } = await AxiosInstance.post(
    `${config.API_ENDPOINT_URL}/auth/register`,
    payload,
  );
  return data;
};

export const logout = async (): Promise<any> => {
  await AxiosInstance.post(`${config.API_ENDPOINT_URL}/auth/logout`);
  return;
};
