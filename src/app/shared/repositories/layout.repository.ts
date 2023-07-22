import { Inject, Injectable, OnDestroy } from '@angular/core';
import { select, setProp } from '@ngneat/elf';
import { LAYOUT_STORE, LayoutStore } from '@shared/stores/layout.store';

@Injectable()
export class LayoutRepository implements OnDestroy {
  constructor(@Inject(LAYOUT_STORE) private _store: LayoutStore) {}

  public activeMenu$ = this._store.pipe(select((state) => state.activeMenu));

  public ngOnDestroy(): void {
    this._store.reset();
  }

  public reset(): void {
    this._store.reset();
  }

  public setActiveMenu(menu: 1 | 2): void {
    this._store.update(setProp('activeMenu', menu));
  }
}
