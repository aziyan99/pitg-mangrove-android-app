import { createStore, select, setProp, withProps } from '@ngneat/elf';

interface MainMenuProps {
  predict?: Predict;
}

const mainMenuStore = createStore(
  { name: 'main-menu-store' },
  withProps<MainMenuProps>({})
);

import { Injectable } from '@angular/core';
import { Predict } from 'src/app/shared/interfaces/predict.interface';

@Injectable({ providedIn: 'root' })
export class MainMenuRepository {
  public predict$ = mainMenuStore.pipe(select((state) => state.predict));

  public setPredict(predict: Predict): void {
    mainMenuStore.update(setProp('predict', predict));
  }
}
