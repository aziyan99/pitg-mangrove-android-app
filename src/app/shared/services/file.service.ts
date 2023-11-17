import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileService {
  public async readBlob(path: string): Promise<Blob> {
    return await fetch(path).then((r) => r.blob());
  }

  public blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName, { type: blob.type });
  }
}
