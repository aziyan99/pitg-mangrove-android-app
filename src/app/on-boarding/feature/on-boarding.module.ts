import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OnBoardingPageRoutingModule } from './on-boarding-routing.module';
import { OnBoardingPage } from './on-boarding.page';
import { RouterModule } from '@angular/router';
import { BackgroundImageDirective } from 'src/app/shared/directives/background-image.directive';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    OnBoardingPageRoutingModule,
  ],
  declarations: [OnBoardingPage],
})
export class OnBoardingPageModule {}
