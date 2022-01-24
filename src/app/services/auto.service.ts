import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automovile } from '../Automoviles';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private apiUrl = 'http://localhost:5000/autos'

  constructor(private http: HttpClient) { }

  getAutos(): Observable<Automovile[]> {
    return this.http.get<Automovile[]>(this.apiUrl);
  }

  deleteAuto(auto: Automovile): Observable<Automovile> {
    const url = `${this.apiUrl}/${auto.id}`;
    return this.http.delete<Automovile>(url);
  }

  addAutomovile(auto: Automovile): Observable<Automovile> {
    return this.http.post<Automovile>(this.apiUrl, auto, httpOptions);
  }
}

