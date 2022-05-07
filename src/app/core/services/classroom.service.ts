import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClassroomService {
    private _baseUrl = 'http://localhost:3000/api/salle';

    constructor(private http: HttpClient) {}
  
    public getAllClassroom(): Observable<any> {
      return this.http.get(this._baseUrl);
    }
  
    public addNewClassroom(formData: any): Observable<any> {
      return this.http.post(this._baseUrl, { ...formData });
    }
}