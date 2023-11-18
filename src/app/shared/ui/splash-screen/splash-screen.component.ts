import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'splash-screen',
  standalone: true,
  templateUrl: './splash-screen.component.html',
  imports: [CommonModule, IonicModule],
})
export class SplashScreenComponent {
  public appName: string = 'Pitg';
  constructor() {
    this.appName = environment.appName;
  }
}
