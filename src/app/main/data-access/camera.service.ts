import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FileService } from 'src/app/shared/services/file.service';

@Injectable({ providedIn: 'root' })
export class CameraService {
  constructor(private _fileService: FileService) {}
  public async takePicture(): Promise<File> {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    const photoBlob = await this._fileService.readBlob(photo.webPath as string);
    return this._fileService.blobToFile(photoBlob, `image.${photo.format}`);
  }
}
