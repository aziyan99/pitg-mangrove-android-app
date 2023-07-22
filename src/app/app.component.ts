import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule]
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private _translateService: TranslateService) {
    this._initiliazieApp();
  }

  private _initiliazieApp(): void {
    this._translateService.setDefaultLang(`${environment.lang}`);
  }
}
