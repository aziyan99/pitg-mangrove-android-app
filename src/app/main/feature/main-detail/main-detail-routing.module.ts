import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDetailPage } from './main-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MainDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDetailPageRoutingModule {}
