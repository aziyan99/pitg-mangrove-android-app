import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownPipe } from 'src/app/shared/pipes/markdown.pipe';
import { BackgroundImageDirective } from 'src/app/shared/directives/background-image.directive';
import { MainMenuPageRoutingModule } from './main-menu-routing.module';
import { MainMenuPage } from './main-menu.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MainMenuPageRoutingModule,
    HttpClientModule,
    MarkdownPipe,
    BackgroundImageDirective,
    RouterModule,
  ],
  declarations: [MainMenuPage],
  providers: [PitgService],
})
export class MainMenuPageModule {}
