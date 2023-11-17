import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { MainMenuRepository } from '../../data-access/predict.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDetailPage implements OnInit {
  public predict$ = this._mainMenuRepository.predict$;

  constructor(
    private _mainMenuRepository: MainMenuRepository,
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    console.log(this._dataId);
  }

  private get _dataId(): string | undefined {
    return this._activatedRoute.snapshot.params['id'];
  }
}
