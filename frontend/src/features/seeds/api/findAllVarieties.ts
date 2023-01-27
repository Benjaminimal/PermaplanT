import { ResponseBody, VarietyDTO } from '@/bindings/definitions';

import axiosInstance from '@/api/axiosInstance';

export const findAllVarieties = async (): Promise<VarietyDTO[]> => {
  try {
    const response = await axiosInstance.get<ResponseBody<VarietyDTO[]>>(`/api/varieties`);
    return response.data.data;
  } catch (error) {
    throw error as Error;
  }
};
