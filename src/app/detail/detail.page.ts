import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BackgroundImageDirective } from '../shared/directives/background-image.directive';
import { CoreStore } from '../shared/stores/core.store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule,
    RouterModule,
    BackgroundImageDirective
  ]
})
export class DetailPage implements OnInit {

  public predictedClass: string = '';

  constructor(private _route: ActivatedRoute, private _store: CoreStore) { }

  ngOnInit() {
    console.log('route id: ', this._id);
    console.log('data id: ', this._store.state.dataId);
    this.predictedClass = this._store.state.predictedClass;
  }

  private get _id(): string | null {
    return this._route.snapshot.paramMap.get('id');
  }
}