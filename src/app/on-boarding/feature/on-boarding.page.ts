import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OnBoardingPageRoutingModule } from './on-boarding-routing.module';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnBoardingPage implements OnInit {
  constructor(private _router: Router) {}

  public ngOnInit(): void {
    const durationInMilliseconds = 1.5 * 1000;
    const timer$ = timer(durationInMilliseconds).pipe(take(1));

    timer$.subscribe(() => {
      this._router.navigate(['/main']);
    });
  }
}
