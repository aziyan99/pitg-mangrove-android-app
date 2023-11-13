import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage),
    pathMatch: 'full'
  },
  {
    path: 'help',
    loadComponent: () => import('./help/help.page').then( m => m.HelpPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
];
