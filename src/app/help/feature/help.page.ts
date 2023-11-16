import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { HelpRepository } from '../data-access/help.store';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpPage implements OnInit {
  public helpText$ = this._helpRepository.helpText$;
  public imageUrl$ = this._helpRepository.imageUrl$;

  constructor(
    private _pitgService: PitgService,
    private _helpRepository: HelpRepository
  ) {}

  public ngOnInit(): void {
    this._pitgService.getConfigs().subscribe();
  }
}
