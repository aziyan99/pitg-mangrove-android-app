import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BackgroundImageDirective } from '../shared/directives/background-image.directive';
import { ConfigApiService } from '../shared/services/config-api.service';
import * as markdownIt from 'markdown-it';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BackgroundImageDirective,
  ],
  providers: [ConfigApiService],
})
export class AboutPage implements OnInit {
  public about: SafeHtml = '';
  public aboutBannerUrl: SafeHtml = '';
  private _md: any;
  constructor(
    private _configApiService: ConfigApiService,
    private _sanitizer: DomSanitizer
  ) {
    this._md = new markdownIt();
  }

  public ngOnInit() {
    this._configApiService.getConfigs().subscribe((config) => {
      this.aboutBannerUrl = this._sanitizer.bypassSecurityTrustUrl(
        config.about_banner
      );
      this.about = this._sanitizer.bypassSecurityTrustHtml(
        this._md.render(config.about)
      );
    });
  }
}
