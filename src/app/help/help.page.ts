import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BackgroundImageDirective } from '../shared/directives/background-image.directive';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    BackgroundImageDirective
  ]
})
export class HelpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
