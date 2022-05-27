import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _baseUrl = 'https://saytoukoapi.herokuapp.com/api/event';

  constructor(private http: HttpClient) {}

  public getAllEvent(): Observable<any> {
    return this.http.get(this._baseUrl);
  }

  public addNewSlot(formData: any): Observable<any> {
    return this.http.post(this._baseUrl, { ...formData });
  }
}
