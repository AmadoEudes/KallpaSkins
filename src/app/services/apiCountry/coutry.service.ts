import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.eu/rest/v2'
  constructor(private http : HttpClient){  }

  getPaises(){
    return this.http.get(`${this.api}/all`)
  }
}
