import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutRepository } from '@shared/repositories/layout.repository';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  standalone: true,
  imports: [IonicModule, TranslateModule, CommonModule],
  providers: [LayoutRepository]
})
export class AboutComponent {
  public loading$ = this._layoutRepository.loading$;
  constructor(private _layoutRepository: LayoutRepository) {}
}
