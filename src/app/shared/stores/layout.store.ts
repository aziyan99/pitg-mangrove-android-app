import { InjectionToken } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';

// 1 = Home
// 2 = About
interface LayoutProps {
  activeMenu: 1 | 2;
}

const store = createStore(
  { name: 'layout-store' },
  withProps<LayoutProps>({
    activeMenu: 1
  })
);

export type LayoutStore = typeof store;

export const LAYOUT_STORE = new InjectionToken<ReturnType<typeof createStore>>(
  'Injection Token for Layout Store',
  {
    providedIn: 'root',
    factory: (): LayoutStore => store
  }
);
