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
import { SplashScreenComponent } from 'src/app/shared/ui/splash-screen/splash-screen.component';
import { InternetConnectionService } from 'src/app/shared/data-access/internet-connection.service';
import { InternetConnectionGuard } from 'src/app/shared/guards/internet-connection.guard';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MainMenuPageRoutingModule,
    HttpClientModule,
    MarkdownPipe,
    BackgroundImageDirective,
    RouterModule,
    SplashScreenComponent,
  ],
  declarations: [MainMenuPage],
  providers: [PitgService, InternetConnectionService, InternetConnectionGuard],
})
export class MainMenuPageModule {}
