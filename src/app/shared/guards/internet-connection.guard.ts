import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InternetConnectionService } from '../data-access/internet-connection.service';
import { LayoutRepository } from '../data-access/layout.store';

@Injectable({
  providedIn: 'root',
})
export class InternetConnectionGuard implements CanActivate {
  constructor(
    private _internetConnectionService: InternetConnectionService,
    private _layoutRepository: LayoutRepository
  ) {}

  canActivate(): Observable<boolean> {
    return this._internetConnectionService.checkConnection().pipe(
      tap((isConnected) => {
        this._layoutRepository.setShowSplashScreen(false);

        if (!isConnected) {
          this._layoutRepository.setShowSplashScreen(true);
        }
      })
    );
  }
}
