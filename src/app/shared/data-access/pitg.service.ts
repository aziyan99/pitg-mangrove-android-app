import { HttpClient } from '@angular/common/http';
import { ApiAbstract } from './api.abstract';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutRepository } from 'src/app/about/data-access/about.store';
import { Config } from '../interfaces/config.interface';
import { HelpRepository } from 'src/app/help/data-access/help.store';
import { Predict } from '../interfaces/predict.interface';
import { MainMenuRepository } from 'src/app/main/data-access/predict.store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PitgService extends ApiAbstract {
  constructor(
    _http: HttpClient,
    private _aboutRepository: AboutRepository,
    private _helpRepository: HelpRepository,
    private _mainMenuRepository: MainMenuRepository
  ) {
    super(_http, environment.apiUrl);
  }

  public getConfigs(): Observable<Config> {
    return this.get<Config>('configs').pipe(
      tap((config) => {
        this._aboutRepository.setAboutText(config.about);
        this._aboutRepository.setImageUrl(config.about_banner);

        this._helpRepository.setHelpText(config.help);
        this._helpRepository.setImageUrl(config.help_banner);
      })
    );
  }

  public predict(image: File): Observable<Predict> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);

    return this.post<Predict>('predict', formData).pipe(
      tap((predict) => {
        this._mainMenuRepository.setPredict(predict);
      })
    );
  }
}
