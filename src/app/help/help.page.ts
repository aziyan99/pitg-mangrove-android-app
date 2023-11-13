import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BackgroundImageDirective } from '../shared/directives/background-image.directive';
import { ConfigApiService } from '../shared/services/config-api.service';
import * as markdownIt from 'markdown-it';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, BackgroundImageDirective],
  providers: [ConfigApiService],
})
export class HelpPage implements OnInit {
  public help: SafeHtml = '';
  public helpBannerUrl: SafeHtml = '';
  public helpBannerUrlString: string = '';
  private _md: any;
  constructor(
    private _configApiService: ConfigApiService,
    private _sanitizer: DomSanitizer
  ) {
    this._md = new markdownIt();
  }

  public ngOnInit() {
    this._configApiService.getConfigs().subscribe((config) => {
      this.helpBannerUrl = this._sanitizer.bypassSecurityTrustUrl(
        config.help_banner
      );
      this.helpBannerUrlString = this.helpBannerUrl.toString();
      this.help = this._sanitizer.bypassSecurityTrustHtml(
        this._md.render(config.help)
      );
    });
  }
}
