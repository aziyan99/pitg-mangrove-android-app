import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/feature/main-shell/main-shell.module').then(
        (m) => m.MainMenuShellModule
      ),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/feature/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/feature/about.module').then((m) => m.AboutPageModule),
  },
  // {
  //   path: 'detail/:id',
  //   loadComponent: () =>
  //     import('./detail/detail.page').then((m) => m.DetailPage),
  // },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
