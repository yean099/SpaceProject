import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http:HttpClient) { }
  
  getPlanetas(url:string){
    console.log(url);
    return this.http.get(url);
  }
}
