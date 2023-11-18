import { createStore, select, setProp, withProps } from '@ngneat/elf';

interface LayoutProps {
  showSplashScreen: boolean;
}

const layoutStore = createStore(
  { name: 'main-menu-store' },
  withProps<LayoutProps>({
    showSplashScreen: true,
  })
);

import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutRepository {
  public showSplashScreen$ = layoutStore.pipe(
    select((state) => state.showSplashScreen),
    distinctUntilChanged()
  );

  public setShowSplashScreen(show: boolean): void {
    layoutStore.update(setProp('showSplashScreen', show));
  }
}
