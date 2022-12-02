import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToDo } from '../_interface/todo'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) { }

  // GET
  public getToDo(): Observable<ToDo[]> {
    // Header
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // Return list of ToDos
    return this._http.get<ToDo[]>(`${this.serverUrl}/todos`, httpOptions);
  }

}
