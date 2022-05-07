import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private _baseUrl = 'http://localhost:3000/api/enseignant';

    constructor(private http: HttpClient) {}
  
    public getAllTeacher(): Observable<any> {
      return this.http.get(this._baseUrl);
    }
  
    public addNewTeacher(formData: any): Observable<any> {
      return this.http.post(this._baseUrl, { ...formData });
    }
}