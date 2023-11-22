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
  public UmrahLogopath: string = '../assets/logo_umrah.png';
  constructor(private _router: Router) {}

  public ngOnInit(): void {
    const durationInMilliseconds = 2 * 1000;
    const timer$ = timer(durationInMilliseconds).pipe(take(1));

    timer$.subscribe(() => {
      this._router.navigate(['/main']);
    });
  }
}
