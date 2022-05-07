import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private _baseUrl = 'http://localhost:3000/api/matiere';

  constructor(private http: HttpClient) {}

  public getAllSubject(): Observable<any> {
    return this.http.get(this._baseUrl);
  }

  public addNewSubject(formData: any): Observable<any> {
    return this.http.post(this._baseUrl, { ...formData });
  }
}
