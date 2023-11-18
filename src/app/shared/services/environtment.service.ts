import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EnvirontmentService {
  public get(): string | undefined {
    return environment?.appName;
  }
}
