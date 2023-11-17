import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PitgService } from 'src/app/shared/data-access/pitg.service';
import { AboutRepository } from '../data-access/about.store';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage implements OnInit {
  public aboutText$ = this._aboutRepository.aboutText$;
  public imageUrl$ = this._aboutRepository.imageUrl$;

  constructor(
    private _pitgService: PitgService,
    private _aboutRepository: AboutRepository
  ) {}

  public ngOnInit(): void {
    this._pitgService.getConfigs().subscribe();
  }
}
