import { ResponseBody, SeedDTO } from '@/bindings/definitions';

import axiosInstance from '@/api/axiosInstance';

export const findAllSeeds = async (): Promise<SeedDTO[]> => {
  try {
    const response = await axiosInstance.get<ResponseBody<SeedDTO[]>>('/api/seeds');
    return response.data.data;
  } catch (error) {
    throw error as Error;
  }
};
