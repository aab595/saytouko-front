import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  private _baseUrl = 'http://localhost:3000/api/classe';

  constructor(private http: HttpClient) {}

  public getAllGrade(): Observable<any> {
    return this.http.get(this._baseUrl);
  }
}
