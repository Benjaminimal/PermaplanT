import { CreateSeed, EditSeed, SeedDetails, ViewSeeds } from '@/features/seeds';
import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.CreateSeed]: {
    component: CreateSeed,
    path: '/seeds/new',
    title: 'Neuer Eintrag',
  },
  [Pages.ViewSeeds]: {
    component: ViewSeeds,
    path: '/seeds',
    title: 'Meine Saatgüter',
  },
  [Pages.SeedDetails]: {
    component: SeedDetails,
    path: '/seeds/:id',
    title: 'Saatgut',
  },
  [Pages.EditSeed]: {
    component: EditSeed,
    path: '/seeds/:id',
    title: 'Saatgut bearbeiten',
  },
};

export default routes;
