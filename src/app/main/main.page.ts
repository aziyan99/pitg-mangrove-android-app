import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Subject } from 'rxjs';
import { LoadingService } from '../shared/services/loading.service';
import { ApiService } from '../shared/services/predict-api.service';
import { Predict } from '../shared/interfaces/predict.interface';
import { CoreStore } from '../shared/stores/core.store';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class MainPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  
  constructor(
    private _loadingService: LoadingService, 
    private _apiService: ApiService,
    private  _router: Router,
    private _store: CoreStore) {}

  ngOnInit() { }

  public takePicture() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((photo) => {
      this._readBlob(photo.webPath as string).then((blob) => {
        const file = this._blobToFile(blob, 'image.jpg');
        this._predict(file);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  public _predict(image: File) {
    this._loadingService.showLoading();
    this._apiService.postImage(image)
      .subscribe(
        (response: Predict) => {
          this._store.setDataId(response.dataId);
          this._store.setPredictedClass(response.predictedClass);
          this._router.navigate(['/detail', response.dataId]);
        },
        (error) => {
          console.error('API Error:', error);
        })
      .add(() => {
        this._loadingService.hideLoading();
      });
  }

  private async _readBlob(path: string): Promise<Blob> {
    return await fetch(path).then(r => r.blob());
  }

  private _blobToFile(blob: Blob, fileName: string): File {
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  }
  
}
