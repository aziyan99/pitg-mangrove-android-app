import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutRepository } from '@shared/repositories/layout.repository';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonicModule, TranslateModule, CommonModule],
  providers: [LayoutRepository]
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  public activeMenu$ = this._layoutRepository.activeMenu$;

  constructor(private _layoutRepository: LayoutRepository) {}

  public setActiveMenu(menu: 1 | 2): void {
    this._layoutRepository.setActiveMenu(menu);
  }
}
