import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [IonicModule, TranslateModule]
})
export class HomeComponent {
  constructor() {}
}
