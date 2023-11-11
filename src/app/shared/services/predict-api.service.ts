import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predict } from '../interfaces/predict.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://203.194.113.223:3000/api/v1/predict';

  constructor(private http: HttpClient) {}

  public postImage(image: File): Observable<Predict> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);

    return this.http.post<Predict>(this.apiUrl, formData);
  }
}
