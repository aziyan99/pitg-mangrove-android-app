import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { MainMenuRepository } from '../../data-access/predict.store';

@Component({
  selector: 'app-main',
  templateUrl: './main-menu.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuPage implements OnInit {
  constructor(
    private _pitgService: PitgService,
    private _mainMenuRepository: MainMenuRepository
  ) {}

  public ngOnInit(): void {
    //
  }
}
