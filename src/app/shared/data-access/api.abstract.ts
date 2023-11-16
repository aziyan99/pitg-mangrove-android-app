import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiAbstract {
  private apiUrl: string;

  constructor(private http: HttpClient, apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public get<T>(url: string): Observable<T>;
  public get<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${url}`);
  }

  public post<T>(url: string, item: FormData): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${url}`, item);
  }

  public put<T>(url: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${url}`, item);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${url}`);
  }
}
