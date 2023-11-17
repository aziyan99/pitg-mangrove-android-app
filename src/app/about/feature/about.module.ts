import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AboutPageRoutingModule } from './about-routing.module';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownPipe } from 'src/app/shared/pipes/markdown.pipe';
import { BackgroundImageDirective } from 'src/app/shared/directives/background-image.directive';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutPageRoutingModule,
    HttpClientModule,
    MarkdownPipe,
    BackgroundImageDirective,
  ],
  declarations: [AboutPage],
  providers: [PitgService],
})
export class AboutPageModule {}
