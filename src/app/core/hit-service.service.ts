import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hit } from './model/hit.model';

@Injectable({
  providedIn: 'root'
})
export class HitServiceService {

  constructor(private http:HttpClient) { }

  getAllHits():Observable<any>{
    return this.http.get<any>('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es').
    pipe(map(data=>data.hits));
  }

  getHitsBySearch(text:string):Observable<any>{
    return this.http.get<any>('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es&q='+text).
    pipe(map(data=>data.hits));
  }

  getHitsByCategory(text:string):Observable<any>{
    return this.http.get<any>('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es&category='+text).
    pipe(map(data=>data.hits));
  }

  getHitById(text:string):Observable<Hit>{
    return this.http.get<any>('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es&id='+text).
    pipe(map(data=>data.hits[0]));
  }
}
