import { NewSeedDTO, SeedDTO } from '@/bindings/definitions';

import { ResponseBody } from '../../../bindings/definitions';
import axiosInstance from '@/api/axiosInstance';

export const createSeed = async (seed: NewSeedDTO) => {
  try {
    await axiosInstance.post<ResponseBody<SeedDTO>>('/api/seeds', seed);
  } catch (error) {
    throw error as Error;
  }
};
