import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]',
  standalone: true,
})
export class BackgroundImageDirective implements OnInit {
  @Input() imageSrc = '';

  constructor(private _elementRef: ElementRef) {}

  public ngOnInit(): void {
    this._elementRef.nativeElement.style.backgroundImage = `url(${this.imageSrc})`;
    this._elementRef.nativeElement.style.backgroundSize = 'cover';
    this._elementRef.nativeElement.style.backgroundRepeat = 'no-repeat';
  }
}
