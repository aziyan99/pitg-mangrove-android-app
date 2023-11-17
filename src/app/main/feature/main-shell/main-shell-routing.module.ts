import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../main-menu/main-menu.module').then((m) => m.MainMenuPageModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../main-detail/main-detail.module').then(
        (m) => m.MainDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuShellRoutingModule {}
