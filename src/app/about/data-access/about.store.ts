import { createStore, select, setProp, withProps } from '@ngneat/elf';

interface AboutProps {
  imageUrl: string;
  aboutText: string;
}

const aboutStore = createStore(
  { name: 'about-store' },
  withProps<AboutProps>({
    imageUrl: '',
    aboutText: '',
  })
);

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AboutRepository {
  public aboutText$ = aboutStore.pipe(select((state) => state.aboutText));
  public imageUrl$ = aboutStore.pipe(select((state) => state.imageUrl));

  public get imageUrl(): string {
    return aboutStore.getValue().imageUrl;
  }

  public setAboutText(text: string): void {
    aboutStore.update(setProp('aboutText', text));
  }

  public setImageUrl(url: string): void {
    aboutStore.update(setProp('imageUrl', url));
  }
}
