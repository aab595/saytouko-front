import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private _baseUrl = 'http://localhost:3000/api/niveau';

  constructor(private http: HttpClient) { }

  public getAllLevel(): Observable<any> {
    return this.http.get(this._baseUrl)
  }
}
