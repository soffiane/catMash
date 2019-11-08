import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ICat } from '../cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { }

  getCats(): Observable<ICat[]> {
    return this.http.get<ICat[]>('assets/cats.json');
  }

}
