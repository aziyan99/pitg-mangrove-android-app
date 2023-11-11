import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new Subject<boolean>();

  constructor(private loadingController: LoadingController) {}

  public getLoadingState(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  public async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    //   duration: 2000,
      backdropDismiss: false,
    });

    this.loadingSubject.next(true);
    await loading.present();
  }

  public hideLoading() {
    this.loadingSubject.next(false);
    this.loadingController.dismiss();
  }
}
