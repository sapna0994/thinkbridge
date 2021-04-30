import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
    addItem(data) {
    	return this.http.post<any>(`/api/addItem`, data);
  	}
  	editItem(data) {
  		return this.http.post<any>(`/api/editItem`, data);
  	}
  	deleteItem(data) {
    return this.http.post<any>(`/api/deleteItem`, data);
  }
}
