import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatListResponse } from './catlistresponse';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json'}
      )
  };

  constructor(private http: HttpClient) { }

  getCats(): Observable<CatListResponse> {
    return this.http.get<CatListResponse>('assets/cats.json');
  }

}
