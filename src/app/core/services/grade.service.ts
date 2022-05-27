import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  private _baseUrl = 'https://saytoukoapi.herokuapp.com/api/classe';

  constructor(private http: HttpClient) {}

  public getAllGrade(): Observable<any> {
    return this.http.get(this._baseUrl);
  }

  public addNewGrade(formData: any): Observable<any> {
    return this.http.post(this._baseUrl, { ...formData });
  }
}
