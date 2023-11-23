import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SecurityContext,
  SimpleChanges
} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, switchMap, takeUntil} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
  selector: '[appBackgroundImage]',
  standalone: true,
})
export class BackgroundImageDirective implements OnInit, OnChanges, OnDestroy {
  @Input() imageSrc: string | null = null;

  private _src$ = new BehaviorSubject(this.imageSrc);
  private _dataUrl$ = this._src$.pipe(switchMap((url) => this._loadImage(url)));
  private _destroy$ = new Subject<void>();

  constructor(private _elementRef: ElementRef, private _httpClient: HttpClient, private _domSanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this._dataUrl$
      .pipe(takeUntil(this._destroy$))
      .subscribe((dataUrl) => {
        if (dataUrl) {
          const safeUrl = this._domSanitizer.sanitize(SecurityContext.URL, dataUrl);
          console.log(safeUrl);
          this._elementRef.nativeElement.style.backgroundImage = `url(${safeUrl})`;
        }
      });

    this._elementRef.nativeElement.style.backgroundSize = 'cover';
    this._elementRef.nativeElement.style.backgroundRepeat = 'no-repeat';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageSrc'] && !changes['imageSrc'].isFirstChange()) {
      this._src$.next(this.imageSrc);
    }
  }

  private _loadImage(src: string | null): Observable<any> {
    if (src !== null) {
      return this._httpClient.get(src, { responseType: 'blob' }).pipe(
        map((e) => this._domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e)))
      );
    }

    return of(null);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
