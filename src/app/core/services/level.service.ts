import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private _baseUrl = 'https://saytoukoapi.herokuapp.com/api/niveau';

  constructor(private http: HttpClient) {}

  public getAllLevel(): Observable<any> {
    return this.http.get(this._baseUrl);
  }

  public getLevelById(id: string): Observable<any> {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  public addNewLevel(formData: any): Observable<any> {
    return this.http.post(this._baseUrl, { ...formData });
  }

  public updateLevel(data: any, id: string): Observable<any> {
    return this.http.put(`${this._baseUrl}/${id}`, data);
  }
}
