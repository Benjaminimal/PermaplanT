import { Pages, Routes } from './types';
import { CreateSeed, ViewSeeds } from '@/features/seeds';
import { LandingPage } from '@/features/landing_page';

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
  [Pages.LandingPage]: {
    component: LandingPage,
    path: '/',
    title: 'PermaPlanT',
  },
};

export default routes;
