import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  searchTerm: any;
  searchResults: any;
  data:any

  constructor( private http:HttpClient) { }

  getProduct(){
    return this.http.get('http://localhost:3000/products')

  }
    
}
