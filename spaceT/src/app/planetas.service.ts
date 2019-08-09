import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http:HttpClient) { }
  
  getPlanetas(url:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
 
    return this.http.get(url, {headers}).pipe ();
  }
}
