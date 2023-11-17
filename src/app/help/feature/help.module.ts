import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownPipe } from 'src/app/shared/pipes/markdown.pipe';
import { BackgroundImageDirective } from 'src/app/shared/directives/background-image.directive';
import { HelpPageRoutingModule } from './help-routing.module';
import { HelpPage } from './help.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HelpPageRoutingModule,
    HttpClientModule,
    MarkdownPipe,
    BackgroundImageDirective,
  ],
  declarations: [HelpPage],
  providers: [PitgService],
})
export class HelpPageModule {}
