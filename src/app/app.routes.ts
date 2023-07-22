import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@shared/components/tabs/tabs.routes').then((m) => m.routes)
  }
];
