import { ResponseBody, SeedDTO } from '@/bindings/definitions';

import axiosInstance from '@/api/axiosInstance';

export const findOneSeed = async (id: number): Promise<SeedDTO> => {
  try {
    const response = await axiosInstance.get<ResponseBody<SeedDTO>>(`/api/seeds/${id}`);
    return response.data.data;
  } catch (error) {
    throw error as Error;
  }
};
