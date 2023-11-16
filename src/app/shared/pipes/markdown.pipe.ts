import { Pipe, PipeTransform } from '@angular/core';
import * as markdownIt from 'markdown-it';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  private _md: any;

  constructor(private _sanitizer: DomSanitizer) {
    this._md = new markdownIt();
  }

  transform(value: string | null): SafeHtml {
    if (value === null) {
      return this._sanitizer.bypassSecurityTrustHtml('');
    }

    const renderedHtml = this._md.render(value);
    return this._sanitizer.bypassSecurityTrustHtml(renderedHtml);
  }
}
