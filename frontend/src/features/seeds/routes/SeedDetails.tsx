import { useEffect, useState } from 'react';

import PageTitle from '@/components/Header/PageTitle';
import { SeedDTO } from '@/bindings/definitions';
import StandardLayout from '@/components/Layout/StandardLayout';
import { findOneSeed } from '../api/findOneSeed';
import { useParams } from 'react-router-dom';

export function SeedDetails() {
  const { id } = useParams();

  const [seed, setSeed] = useState<SeedDTO | null>(null);

  useEffect(() => {
    // fetch seed
    const _findOneSeed = async () => {
      const seed = await findOneSeed(Number(id));
      setSeed(seed);
    };
    _findOneSeed();
  }, []);

  return (
    <StandardLayout>
      <PageTitle title="Seed name" />
      <h2>{seed?.name}</h2>
    </StandardLayout>
  );
}
