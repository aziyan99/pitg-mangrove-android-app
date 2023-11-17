import { ElementRef } from '@angular/core';
import { BackgroundImageDirective } from './background-image.directive';

describe('BackgroundImageDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef('<div></div>');
    const directive = new BackgroundImageDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
