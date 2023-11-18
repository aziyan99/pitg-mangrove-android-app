import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuPage } from './main-menu.page';
import { InternetConnectionGuard } from 'src/app/shared/guards/internet-connection.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [InternetConnectionGuard],
    component: MainMenuPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
