import { SeedDTO } from '@/bindings/definitions';
import { create } from 'zustand';

interface FilterSeedsStore {
  seeds: SeedDTO[];
  filteredSeeds: SeedDTO[];
  filter: string;
  setFilter: (filter: string) => void;
  setSeeds: (seeds: SeedDTO[]) => void;
}

const useFilterSeedsStore = create<FilterSeedsStore>((set) => ({
  seeds: [],
  filteredSeeds: [],
  filter: '',
  setFilter: (filter: string) =>
    set((state) => {
      const filteredSeeds = state.seeds.filter(
        (seed) =>
          seed.name.toLowerCase().includes(filter.toLowerCase()) ||
          seed.harvest_year.toString().toLowerCase().includes(filter.toLowerCase()) ||
          seed.created_at.toLowerCase().includes(filter.toLowerCase()),
      );
      return { ...state, filter, filteredSeeds };
    }),
  setSeeds: (seeds: SeedDTO[]) => set((state) => ({ ...state, seeds, filteredSeeds: seeds })),
}));

export default useFilterSeedsStore;
