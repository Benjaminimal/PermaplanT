import { Link } from 'react-router-dom';
import PageTitle from '@/components/Header/PageTitle';
import StandardLayout from '@/components/Layout/StandardLayout';
import { useEffect } from 'react';
import useFindSeedsStore from '../store/findSeedsStore';

export const ViewSeeds = () => {
  const seeds = useFindSeedsStore((state) => state.seeds);

  useEffect(() => {
    const _findAllSeeds = async () => {
      await useFindSeedsStore.getState().findAllSeeds();
    };
    _findAllSeeds();
  }, []);

  return (
    <StandardLayout>
      <PageTitle title="Mein Saatgut" />
      <ul>
        {seeds.map((seed) => (
          <li key={seed.id}>{seed.name}</li>
        ))}
      </ul>
      <div className="w-[200px]">
        <Link
          to="/seeds/new"
          className="text-blue-600 underline visited:text-blue-600 hover:text-blue-800"
        >
          Neuer Eintrag
        </Link>
      </div>
    </StandardLayout>
  );
};
