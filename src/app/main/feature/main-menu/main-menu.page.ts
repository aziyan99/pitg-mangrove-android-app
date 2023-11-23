import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { MainMenuRepository } from '../../data-access/predict.store';
import { CameraService } from '../../data-access/camera.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import {finalize, tap, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { LayoutRepository } from 'src/app/shared/data-access/layout.store';
import {ToastService} from "../../../shared/services/toast.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main-menu.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuPage implements OnInit {
  public showSplashScreen$ = this._layoutRepository.showSplashScreen$;
  public bg1: string = '../assets/bg1.JPG';
  public cameraIcon: string = '../assets/camera.png';
  public helpIcon: string = '../assets/question.png';
  public aboutIcon: string = '../assets/information.png';

  constructor(
    private _pitgService: PitgService,
    private _mainMenuRepository: MainMenuRepository,
    private _cameraService: CameraService,
    private _loadingService: LoadingService,
    private _router: Router,
    private _layoutRepository: LayoutRepository,
    private _toastService: ToastService
  ) {}

  public ngOnInit(): void {
    //
  }

  public onCameraButtonClick(): void {
    this._loadingService.showLoading();
    this._cameraService
      .takePicture()
      .then((file) => {
        this._pitgService
          .predict(file)
          .pipe(
            tap((predict) => {
              this._router.navigate(['main', predict.dataId]);
            }),
            catchError((error) => {
              this._toastService.showToast('Gagal melakukan prediksi. Mohon untuk mengulangi kembali')
              return throwError(error);
            }),
            finalize(() => {
              this._loadingService.hideLoading();
            })
          )
          .subscribe();
      })
      .catch(() => {
        this._loadingService.hideLoading();
      });
  }
}
