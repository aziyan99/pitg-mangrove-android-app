import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/predict-api.service';
import { CoreStore } from './shared/stores/core.store';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule],
  providers: [ApiService, Storage, CoreStore]
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private _storage: Storage) {
    this._storage.create();
  }
}
