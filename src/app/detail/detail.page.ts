import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BackgroundImageDirective } from '../shared/directives/background-image.directive';
import { CoreStore } from '../shared/stores/core.store';
import * as markdownIt from 'markdown-it';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, BackgroundImageDirective],
})
export class DetailPage implements OnInit {
  public predictedClass: string = '';
  public image: string = '';
  public description: SafeHtml = '';
  private _md: any;

  constructor(
    private _route: ActivatedRoute,
    private _store: CoreStore,
    private _sanitizer: DomSanitizer
  ) {
    this._md = new markdownIt();
  }

  ngOnInit() {
    console.log('route id: ', this._id);
    console.log('data id: ', this._store.state.dataId);
    this.predictedClass = this._store.state.predictedClass;
    console.log(this.description);

    this.description = this._sanitizer.bypassSecurityTrustHtml(
      this._md.render(this._store.state.description)
    );
  }

  private get _id(): string | null {
    return this._route.snapshot.paramMap.get('id');
  }
}
