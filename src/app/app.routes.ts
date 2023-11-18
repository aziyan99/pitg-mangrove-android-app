import { Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/feature/main-shell/main-shell.module').then(
        (m) => m.MainMenuShellModule
      ),
    title: `Main | ${environment.appName}`,
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/feature/help.module').then((m) => m.HelpPageModule),
    title: `Help | ${environment.appName}`,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/feature/about.module').then((m) => m.AboutPageModule),
    title: `About | ${environment.appName}`,
  },
  {
    path: '',
    loadChildren: () =>
      import('./on-boarding/feature/on-boarding.module').then(
        (m) => m.OnBoardingPageModule
      ),
    title: `On Boarding | ${environment.appName}`,
    pathMatch: 'full',
  },
];
