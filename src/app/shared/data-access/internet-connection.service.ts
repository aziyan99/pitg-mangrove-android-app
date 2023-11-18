import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InternetConnectionService {
  private readonly checkUrl = environment.checkUrl;

  constructor(private http: HttpClient) {}

  checkConnection(): Observable<boolean> {
    return this.http.head(this.checkUrl).pipe(
      map(() => true),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of(true);
        }
        return of(false);
      })
    );
  }
}
