import PageTitle from '@/components/Header/PageTitle';
import SearchInput from '@/components/Form/SearchInput';
import SeedsOverviewList from '../components/SeedsOverviewList';
import SimpleButton from '@/components/Button/SimpleButton';
import StandardLayout from '@/components/Layout/StandardLayout';
import { useEffect } from 'react';
import useFilterSeedsStore from '../store/FilterSeedsStore';
import useFindSeedsStore from '../store/FindSeedsStore';
import { useNavigate } from 'react-router-dom';

export const ViewSeeds = () => {
  const navigate = useNavigate();

  // Set initial seeds in our filterSeedsStore when all the seeds are loaded
  const setSeeds = useFilterSeedsStore((state) => state.setSeeds);

  // Get the filtered seeds from our filterSeedsStore
  const filteredSeeds = useFilterSeedsStore((state) => state.filteredSeeds);

  // Set the filter in our filterSeedsStore when the user types in the search input
  const setFilter = useFilterSeedsStore((state) => state.setFilter);

  useEffect(() => {
    const _findAllSeeds = async () => {
      await useFindSeedsStore.getState().findAllSeeds();
      setSeeds(useFindSeedsStore.getState().seeds);
    };
    _findAllSeeds();
  }, []);

  const handleCreateSeedClick = () => {
    navigate('/seeds/new');
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setFilter(searchValue);
  };

  return (
    <StandardLayout styleNames="flex flex-col space-y-4">
      <PageTitle title="Mein Saatgut" />
      <div className="flex flex-row justify-between space-x-6">
        <SearchInput handleSearch={handleSearch} />
        <SimpleButton title="Neuer Eintrag" onClick={handleCreateSeedClick} />
      </div>
      <SeedsOverviewList seeds={filteredSeeds} />
    </StandardLayout>
  );
};
