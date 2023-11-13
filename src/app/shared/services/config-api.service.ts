import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predict } from '../interfaces/predict.interface';
import { Config } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigApiService {
  private apiUrl = 'https://pitg.buruhdev.cloud/api/v1/configs';

  constructor(private http: HttpClient) {}

  public getConfigs(): Observable<Config> {
    return this.http.get<Config>(this.apiUrl);
  }
}
