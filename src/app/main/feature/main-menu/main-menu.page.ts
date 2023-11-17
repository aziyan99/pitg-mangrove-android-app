import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { MainMenuRepository } from '../../data-access/predict.store';
import { CameraService } from '../../data-access/camera.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { finalize, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main-menu.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuPage implements OnInit {
  constructor(
    private _pitgService: PitgService,
    private _mainMenuRepository: MainMenuRepository,
    private _cameraService: CameraService,
    private _loadingService: LoadingService,
    private _router: Router
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
