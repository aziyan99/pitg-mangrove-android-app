import { createStore, select, setProp, withProps } from '@ngneat/elf';

interface HelpProps {
  imageUrl: string;
  helpText: string;
}

const helpStore = createStore(
  { name: 'help-store' },
  withProps<HelpProps>({
    imageUrl: '',
    helpText: '',
  })
);

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelpRepository {
  public helpText$ = helpStore.pipe(select((state) => state.helpText));
  public imageUrl$ = helpStore.pipe(select((state) => state.imageUrl));

  public get imageUrl(): string {
    return helpStore.getValue().imageUrl;
  }

  public setHelpText(text: string): void {
    helpStore.update(setProp('helpText', text));
  }

  public setImageUrl(url: string): void {
    helpStore.update(setProp('imageUrl', url));
  }
}
