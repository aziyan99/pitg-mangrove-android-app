import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownPipe } from 'src/app/shared/pipes/markdown.pipe';
import { BackgroundImageDirective } from 'src/app/shared/directives/background-image.directive';
import { MainDetailPage } from './main-detail.page';
import { MainDetailPageRoutingModule } from './main-detail-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MainDetailPageRoutingModule,
    HttpClientModule,
    MarkdownPipe,
    BackgroundImageDirective,
    RouterModule,
  ],
  declarations: [MainDetailPage],
  providers: [PitgService],
})
export class MainDetailPageModule {}
